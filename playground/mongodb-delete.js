
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) {
        return console.error('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server!');

    const db = database.db('TodoApp');

    // Delete Many
    // db.collection('Todos').deleteMany({ text: 'jeje' }).then((result) => {
    //     console.log(result);
    // });

    // Delete one
    // db.collection('Todos').deleteOne({ text: 'jeje' }).then((result) => {
    //     console.log(result);
    // });

    // Delete one and delete
    // db.collection('Todos').findOneAndDelete({ completed: true }).then((result) => {
    //     console.log(result);
    // });

    // Deleting by ID
    db.collection('Todos').findOneAndDelete({
        _id: new ObjectID('5a7cb51790f2d95a4cd5c6ae'),
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    });

    database.close();
});

