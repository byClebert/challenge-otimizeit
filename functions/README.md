# Challenge Otimize IT
This is just a simple API RESTful for managing contacts.

### Functional Requirements
- [x] Must be able to register a new contact;
- [x] Must be able to update contact;
- [x] Must be able to delete a contact;
- [x] Must be able to list all contacts;
- [x] Must be able to show a contact;

### Non-Functional Requirements
- Must be developed with TypeScript and Node.js;
- Must be hosted in Firebase Functions;
- Must store the data in the Firebase Firestore;
- Must use JWT for authentication;

### Business Requirements
- To register, update or delete a contact, must be authenticated with a JWT;

### API Access
[Link to endpoint]('https://us-central1-challenge-otimizeit.cloudfunctions.net/api/contacts')

#### ENDPOINTS
```js
- [GET] /contacts         // List contacts
- [GET] /contacts/:id     // Show a contact
- [POST] /contacts        // Register new contact <Need to authenticate>
- [PUT] /contacts/:id     // Update a contact <Need to authenticate>
- [DELETE] /contacts/:id  // Delete a contact <Need to authenticate>
```

#### JWT Authentication
You can use the following token to authenticate yourself:
```js
authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.JgE3iK5c1ZBmUK-X0iiazRLtlOvO-G6b6sZV6eDTZOg"

// This should be in the request header.
```

#### Data to register new contact
```js
[POST] /contacts

{
    "name": "Jhon Snow",
    "email": "jhon.snow@gameofthrones.com"
}
```