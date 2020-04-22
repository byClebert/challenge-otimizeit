# Challenge Otimize IT
This is just a simple API RESTful for managing contacts.

### Functional Requirements
- [x] Must be able to register a new contact;
- [x] Must be able to update contact;
- [x] Must be able to delete a contact;
- [x] Must be able to list all contacts;
- [x] Must be able to show a contact;

### Non-Functional Requirements
- Must be developed with Nestjs;

### Business Requirements
Empty

### API Access
No access

#### ENDPOINTS
```js
- [GET] /contacts         // List contacts
- [GET] /contacts/:id     // Show a contact
- [POST] /contacts        // Register new contact
- [PUT] /contacts/:id     // Update a contact
- [DELETE] /contacts/:id  // Delete a contact
```

#### Data to register new contact
```js
[POST] /contacts

{
    "name": "Jhon Snow",
    "email": "jhon.snow@gameofthrones.com"
}
```