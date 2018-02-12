const { expect } = require('chai');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

beforeEach((done) => {
    Todo.remove({}).then(() => done());
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
                Todo.find().then((todos) => {
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
                    expect(todos.length).to.equal(0);
                    done();
                }).catch((e) => {
                    done(e);
                });
            });
    });
});

