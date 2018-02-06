const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) {
        return console.log('Unable to connect to MonogoDB Server');
    }
    console.log('Connected to MongoDB Server');

    const db = database.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'The 3rd todo',
    //     completed: false,
    // }, (er, resp) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', er);
    //     }
    //     console.log(JSON.stringify(resp.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Diana Carolina Cortes',
    //     year: 1991,
    //     location: 'Medellin',
    // }, (er, resp) => {
    //     if (er) {
    //         return console.log('Unable to insert User', err);
    //     }
    //     console.log(JSON.stringify(resp.ops, undefined, 2));
    // });

    database.close();
});
