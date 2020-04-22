import { Injectable } from '@nestjs/common';
import { Contact } from './contact';

@Injectable()
export class ContactService {
    contacts: Contact[] = [
        { id: 1, name: "Matheus Henrique", email: "matheus@teste.com" },
        { id: 2, name: "Jhonatan Júlio", email: "jhonatan@teste.com" },
        { id: 3, name: "André da Silva", email: "andre@teste.com" },
        { id: 4, name: "Marcolino Andrade", email: "marcolino@teste.com" },
    ];

    getAll() {
        return this.contacts;
    }

    getById(id: number) {
        const contact = this.contacts.find((value) => value.id == id);
        return contact;
    }

    create(contact: Contact) {
        let lastId = 0;
        if (this.contacts.length > 0) {
            lastId = this.contacts[this.contacts.length - 1].id;
        }

        contact.id = lastId + 1;
        this.contacts.push(contact);

        return contact;
    }

    update(contact: Contact) {
        const contactArray = this.getById(contact.id)
        if (contactArray) {
            contactArray.name = contact.name;
            contactArray.email = contact.email;
        }

        return contactArray;
    }

    delete(id: number) {
        const index = this.contacts.findIndex((value) => value.id == id);
        this.contacts.splice(index, 1);
    }
}
