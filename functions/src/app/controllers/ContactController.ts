import { Request, Response } from 'express'
import ContactModel from '../models/ContactModel'

export default {
    index: async (req: Request, res: Response) => {
        const response = await ContactModel.index()

        res.status(200).json(response)
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params
        const response = await ContactModel.show(id)

        res.status(200).json(response)
    },

    store: async (req: Request, res: Response) => {
        const { name, email } = req.body
        const response = await ContactModel.store({ name, email })

        res.status(201).json(response)
    },

    update: async (req: Request, res: Response ) => {
        const { id } = req.params
        const { name, email } = req.body

        const response = await ContactModel.update(id, { name, email })

        res.status(200).json(response)
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params
        await ContactModel.delete(id)

        res.status(200).send()
    }
}