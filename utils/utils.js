module.exports.add=(a,b)=>{
console.log('toot');

return   a+b};

module.exports.Asyncadd=(a,b,callback)=>
{
setTimeout(()=>{

  callback(a+b);
},1000);

};


  