
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, database) => {
    if (err) {
        return console.error('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server!');

    const db = database.db('TodoApp');

    // Delete Many

    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID('5a7a20eb42f6156aef318b8b'),
    //     },
    //     {
    //         $set: {
    //             text: 'La tercera tarea',
    //         },
    //     },
    //     {
    //         returnOriginal: false,
    //     },
    // ).then((res) => {
    //     console.log(res);
    // });

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5a79db724a9dc1368c6ce042'),
        },
        {
            $inc: {
                year: 1,
            },
        },
        {
            returnOriginal: false,
        },
    ).then((res) => {
        console.log(res);
    });

    database.close();
});

