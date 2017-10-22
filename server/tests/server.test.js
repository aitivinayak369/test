const expect=require('expect');
const request=require('supertest');
const {ObjectID}=require('mongodb')
const {app}=require('./../server');
const {User}=require('./../models/users');
const todos=[{_id:new ObjectID(),email:'first test todo'},{_id:new ObjectID(),email:'second test todo'}];

beforeEach((done)=>{
    User.remove({}).then(()=>{
   return  User.insertMany(todos);
    }).then(()=>done());
});
describe('POST /todos',()=>{
it('it should create a new user',(done)=>{
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
        expect(todos.length).toBe(3)
        expect(todos[0].email).toBe('first test todo');
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
    expect(todos.length).toBe(2)
    done();
}).catch((e)=>done(e));


});
});
describe('GET /todos',()=>{
    it('should request data',(done)=>{
       request(app)
       
       .get('/todos')
       .expect(200)
       .expect((res)=>{
           expect(res.body.docs.length).toBe(2);
       })
    .end((err,res)=>{
        if(err)
        {
           return done(err);
        }
        
        
    });
User.find().then((todos)=>{
    expect(todos.length).toBe(4)
    expect(todos[0].email).toBe('first test todo');
   
})
done();


});
});
describe('GET /todos/:id',()=>{
it('should dive information according to id',(done)=>{
    request(app)
    .get('/todos/'+todos[0]._id)
    .expect(200)
    .expect((res)=>{
        expect(res.body.doc.email).toBe(todos[0].email)
    })
    .end(done)
});

});