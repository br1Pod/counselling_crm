const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('crm');
    const clientsCollection = db.collection('clients');
    const clientsRouter = createRouter(clientsCollection);
    app.use('/api/clients', clientsRouter);

    const contactsCollection = db.collection('contacts');
    const contactsRouter = createRouter(contactsCollection);
    app.use('/api/contacts', contactsRouter);
  })
  .catch(console.err);

app.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
