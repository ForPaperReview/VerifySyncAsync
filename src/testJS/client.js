/*function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

//setTimeout(function(){ console.log("Hello"); }, 3000);
//console.log(1);

asyncCall();
console.log(1);
*/

var fs = require('fs');
console.log("start");
var contents = fs.readFileSync('DATA.txt', 'utf8');
console.log("reading...");
console.log("contents");
