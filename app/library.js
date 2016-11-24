module.exports = {

computeAverage : function (num1, num2, num3){
    return ((num1 + num2 + num3) / 3);
},

computeFactorial : function (int) {
  var num = 1;
  for(var i = 1; i <= int; i++){
    num *= i;
  }
  return num;
},

convertTempFtoC : function (f) {
    return ((5 / 9) * (f - 32));
},

convertTempCtoF : function (c) {
  return (((9 / 5) * c ) + 32);
},

largestNum : function (arr) {
    var largest = arr[0];
    for(var i = arr[0]; i <= arr.length; i++){
        if(largest < arr[i]) {
           largest = arr[i]; 
        }
        
    }
    return largest;
}


}

