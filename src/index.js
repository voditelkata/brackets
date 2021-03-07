module.exports = function check(arr, bracketsConfig) {

    let strArr  = bracketsConfig;
    let open = [];
    let close = [];
    let stack = [];

     for (var i = 0; i < strArr.length; i++){
          open.push(strArr[i][0]);
          close.push(strArr[i][1])
     };
  
       for (let j = 0; j<arr.length; j++){
           if ( (open.includes(arr[j]) && !close.includes(arr[j]) ) 
            || (open.includes(arr[j]) && close.includes(arr[j]) && arr[j] !== stack[stack.length-1]) ) {
            stack.push(arr[j])
           }
          
          else{
              if(close.indexOf(arr[j]) === open.indexOf( stack[stack.length-1] )){
                  let p = stack.pop()
              }else{
                  return false
              }
          }
      }
          return stack.length === 0
};
