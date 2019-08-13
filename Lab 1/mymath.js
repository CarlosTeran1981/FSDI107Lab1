module.exports = {
  sayHello : function(name){
    console.log("Hello ..." + name);
  },


smaller: function (num1, num2){
  if (num1 < num2) return num1;
  return num2;
},

greater: function (num1, num2){
  if (num1 > num2)return num1;
  return num2;
},
division: function (number, by) {
  if (by==0) {
    console.error(" can't divide by 0 fool");
    return 0;
  }

  var res = number / by;
  return res.toFixed(2);
},

isEven: function (number){
  var res = number % 2;
  if (res == 0) return true;

  return false;
}

};