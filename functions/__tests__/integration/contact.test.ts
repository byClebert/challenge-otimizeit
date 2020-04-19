import * as supertest from 'supertest'
import app from '../../src/app'
import { contactData } from '../faker/contact'

const request = supertest(app)

describe('contact', () => {

    let idConst = []

    test('register new contact', async () => {
        await request.post('/contacts')
            .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.JgE3iK5c1ZBmUK-X0iiazRLtlOvO-G6b6sZV6eDTZOg')
            .send(contactData)
            .expect(201)
            .then(result => {
                idConst.push(result.body.id)
                expect(!!result.body.id).toBe(true)
            })
            .catch(err => {
                throw new Error(err)
            })
    })

    test('list contacts', async () => {
        await request.get('/contacts')
            .expect(200)
            .then(result => {
                expect(typeof(result)).toBe('object')
            })
            .catch(err => {
                throw new Error(err)
            })
    })

    test('show contact', async () => {
        await request.get(`/contacts/${idConst}`)
            .expect(200)
            .then(result => {
                expect(!!result.body.id).toBe(true)
                expect(!!result.body.name).toBe(true)
                expect(!!result.body.email).toBe(true)
            })
            .catch(err => {
                throw new Error(err)
            })
    })

    test('update contact', async () => {
        await request.put(`/contacts/${idConst[0]}`)
            .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.JgE3iK5c1ZBmUK-X0iiazRLtlOvO-G6b6sZV6eDTZOg')
            .send(contactData)
            .expect(200)
            .then(result => {
                expect(!!result.body.id).toBe(true)
                expect(!!result.body.name).toBe(true)
                expect(!!result.body.email).toBe(true)
            })
            .catch(err => {
                throw new Error(err)
            })
    })

    test('delete contact', async () => {
        await request.delete(`/contacts/${idConst[0]}`)
            .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.JgE3iK5c1ZBmUK-X0iiazRLtlOvO-G6b6sZV6eDTZOg')
            .send(contactData)
            .expect(200)
            .catch(err => {
                throw new Error(err)
            })
    })
})