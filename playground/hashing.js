const {SHA256}=require('crypto-js');
var user='vinaya will become  coder';
var user1='vinaya will become  coder';
var hash=SHA256(user).toString();
var hash0=SHA256(user).toString();
if(hash==hash0)
{
    console.log('match');
}
else{
    console.log('no match')
}
console.log(user);
console.log(`hash:${hash}`);
var data={
    id:4,
  
}
var token={
    data,
    hash:SHA256(JSON.stringify(data)+'vina')
}
var data1=
{
    id:4,
 
}
hash1=SHA256(JSON.stringify(data)+'vina');

if(hash1==token.hash)
{
  console.log ('User is accepted') ;
}
else{
    console.log('user is denied');
}
console.log(hash1);
console.log(token.hash);