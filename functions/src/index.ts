import { https } from 'firebase-functions'
import app from './app'

export const api = https.onRequest(app)