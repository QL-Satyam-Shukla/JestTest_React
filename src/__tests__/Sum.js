import Sum from "../sum";

test('testing for sum function', () => { 
      let a=10;
      let b=20;
      let output=30;
      expect(Sum(a,b)).toBe(output)
 })

 test('testing for sum function', () => { 
    let a=100;
    let b=200;
    let output=300;
    expect(Sum(a,b)).toBe(output)
})
