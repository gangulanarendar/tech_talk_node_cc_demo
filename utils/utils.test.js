const utils=require('./utils');
const expect=require('expect');


it('should be add two number',()=>{
  var res=utils.add(2,3);
  expect(res).toBe(5).toBeA('number');
});

it('should be add two number async ',(done1)=>{
 var res=utils.Asyncadd(2,5,(sum)=>{
expect(sum).toBe(5).toBeA('number');
        done1();
  });
});

