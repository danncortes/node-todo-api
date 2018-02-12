const { expect } = require('chai');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

const todos = [
    {
        text: 'First test to do',
    },
    {
        text: 'Second test todo',
    },
];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /Todos', () => {
    it('Should create a new todo', (done) => {
        const text = 'Test todo text';
        request(app)
            .post('/todos')
            .send({ text })
            .expect(200)
            .expect((res) => {
                // This next expect is from chai
                expect(res.body).to.deep.include({
                    text,
                });
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find({ text }).then((todos) => {
                    expect(todos.length).to.equal(1);
                    expect(todos[0].text).to.deep.equal(text);
                    done();
                }).catch((e) => {
                    done(e);
                });
            });
    });
    it('Should not create todo with invalid body data', (done) => {
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).to.equal(2);
                    done();
                }).catch((e) => {
                    done(e);
                });
            });
    });
});

describe('Get / todos', () => {
    it('Should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).to.equal(2);
            })
            .end(done);
    });
});
