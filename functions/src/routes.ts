import { Router } from 'express'
import ContactController from './app/controllers/ContactController'
import * as jwt from 'jsonwebtoken'

const routes = Router()

routes.get('/contacts', ContactController.index)
routes.get('/contacts/:id', ContactController.show)

routes.use((req, res, next) => {
    const { authorization } = req.headers

    if(!authorization) {
        res.status(401).send()
        return
    }

    const token = authorization.replace('Bearer ', '')

    try {
        const decode = jwt.verify(token, process.env.SECRET)

        req.headers.user = JSON.stringify(decode)

        next()
    }
    catch(err) {
        throw new Error(err)
    }
})

routes.post('/contacts', ContactController.store)
routes.put('/contacts/:id', ContactController.update)
routes.delete('/contacts/:id', ContactController.delete)

export default routes