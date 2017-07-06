import operate from './operate.js';

export default function recordButtonName(obj, buttonName) {

	//let cache ;
  if (buttonName === 'AC') {
    return {
      sum:"",
    };
  }
  else if (buttonName === '+/-') {
  	if (obj.next || obj.total) {return {
   	sum: (-1 * parseFloat(obj.sum)).toString()
   }}else{
   	return;
   }
   
  }
 else if(buttonName === '='){
   return {
    // sum:operate(obj.total, obj.next, obj.operation)
    //operate(obj.total, obj.next, obj.operation)
    sum:obj.sum + "=" 
    };
 }
  else{
  		if (obj.sum.search("=") != -1) {
		return { 
			sum:obj.total + buttonName
		}
	}
   
return {
  	 sum:  obj.sum + buttonName.toString(),
  	}
  	
  }
}