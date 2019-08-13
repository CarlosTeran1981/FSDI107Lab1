var matLib = require("./mymath");

function smaller(num1, num2){
  if(num1 < num2) return num1;
  return num2;
}

function greater (num1, num2){
  if (num1 > num2) return num1;
  return num2;
}

function division (number, by){
   if (by == 0){
     console.log("Error no 0 div");
     return 0;
   }
}

function printEvents() {

  


  /** print n even number */
 
  /** for 2 you should print 2, 4 */
  /** for 3 you should print 2, 4, 6 */
  /** for 4 you should print 2, 4, 6, 8 */
  for (let i=1; i<10; i++) {
    if(i % 2 === 0) {
      console.log(i);
    }
  }
  
 }
 

function toUpper(text){
  return text.toUpperCase();
}

function toLower(text){
  return text.toLowerCase();
}

function init(){
  console.log("Carlos");

  matLib.sayHello("Carlos");

  printEvents(2);
  printEvents(20);
  printEvents(13215615);

  var results = 15 /2;
  var residue = 15 % 2;
  console.log(results, residue);



  var res = matLib.smaller (2, 9);
  console.log(res);

  var res2 = matLib.greater (989370709, 99999999999);
  console.log(res2);

  var div1 = matLib.division(100,10);
  console.log(div1);

  var div3 = matLib.division(1,0);
  console.log(div3);

  var isEven = matLib.isEven(42);
  console.log(isEven);

  var isNot = matLib.isEven(3);
  console.log(isNot);

}


init();

/* Console management commands

cd = change directory
Win + R type cmd press enter = command prompt */

