const multiplicator = (a, b, printText) => {
    console.log(printText,  a * b);
  }
  
const newLocal =22222;
  multiplicator(newLocal, 4, 'Multiplied numbers 2 and 4, the result is:');


  type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b: number, op: Operation): number  | string => {
  if (op === 'multiply') {
    console.log(a, op, b,'=',a*b)
    return a * b;

  } else if (op === 'add') {
    console.log(a, op, b,'=',a+b)
    return a + b;
  } else if (op === 'divide') {
    if (b === 0) return 'can\'t divide by 0!';
    console.log(a, op, 'with', b,'=',a/b)
    return a / b;
  }
}
calculator(23 , 5, 'multiply')
calculator(23 , 5, 'add')
calculator(23 , 5, 'divide')

//** type Result = string | number */