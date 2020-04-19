import { name, internet } from 'faker'

export const contactData = {
    name: name.findName(),
    email: internet.email()
}