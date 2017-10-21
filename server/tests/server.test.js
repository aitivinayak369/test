const expect=require('expect');
const request=require('supertest');

const {User}=require('./../models/users');
beforeEach((done)=>{
    User.remove({}).then(()=>done());
    
});const {app}=require('./../server');
describe('POST /todos',()=>{
it('it shoul create a new user',(done)=>{
    var email='aitivinayak123@gmail.com';
    
request(app)
.post('/todos')
.send({email})
.expect(200)
.expect((res)=>{
expect(res.body.email).toBe(email);
})
.end((err,res)=>{
    if(err)
    {
        return done(err);
    }
    User.find().then((todos)=>{
        expect(todos.length).toBe(1)
        expect(todos[0].email).toBe(email);
        done();
    }).catch((e)=>done(e));

    
});
});
it('it shoul not create a new user',(done)=>{
   
request(app)
.post('/todos')
.send({})
.expect(400)

.end((err,res)=>{
    if(err)
    {
        return done(err);
    }
});
User.find().then((todos)=>{
    expect(todos.length).toBe(0)
    
    done();
}).catch((e)=>done(e));


});
});
