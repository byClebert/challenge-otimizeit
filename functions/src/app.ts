import * as dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env'
})

import * as express from 'express'
import * as admin from 'firebase-admin'
import * as path from 'path'
const firebaseConfig = path.resolve('src/utils/firebase.json')
admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig)
})
import * as cors from 'cors'
import routes from './routes'

class Application {
    express: express.Application

    constructor() {
        this.express = express()

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
        this.express.use(cors({ origin: true }))
    }

    routes() {
        this.express.use(routes)
    }
}

export default new Application().express
