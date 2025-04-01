// 2! ===2 * 1
// 3! ===3 * 2 * 1
 export default function factorial(number){
    if (number === 0) {
        return 0;
    }else  if(number === 1){

     return 1;
    }else{
        let result = 1;
    
        for(let count = number; number > 0; number = number - 1) {
            result = result * number;
        }
    
        return result;
    }
}
