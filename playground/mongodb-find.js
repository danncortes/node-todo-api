const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) {
        return console.error('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server!');

    const db = database.db('TodoApp');

    db.collection('Todos').find({
        completed: true,
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (er) => {
        console.error('Unable to fetch todo', er);
    });

    database.close();
});

