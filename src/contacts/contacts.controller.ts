import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './contact';

@Controller('contacts')
export class ContactsController {
    constructor(private contactService: ContactService) { }

    @Get()
    async getAll(): Promise<Contact[]> {
        return this.contactService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Contact> {
        return this.contactService.getById(id)
    }

    @Post()
    async create(@Body() contact: Contact): Promise<Contact> {
        return this.contactService.create(contact)
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() contact: Contact) {
        contact.id = id
        return this.contactService.update(contact);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.contactService.delete(id);
    }
}
