const calculate = require('basic-calculator-js');
const ratio = require('ratio');
class calculator {
    constructor(x, y, w){
      this.x = x;
      this.y = y;
      this.w = w;
    }
    get e(){ return calculate.e() }
    get pi(){ return calculate.pi() };
    //Methods
   get ratio(){return calculate.ratio()}
    multiply(x,y){}
    percentage(x,y){}
    add(x, y){}
    subtract(x, y){}
    divide(x, y){}
    modulation(x, y){}
    elevate(x, y){}
    sqrt(x){}
}
console.log(calculate.ratio);
