
// class Clock {
//   constructor() {
//     const ourDate = new Date();
//     this.hour = ourDate.getHours();
//     this.min = ourDate.getMinutes();
//     this.sec = ourDate.getSeconds();
//     this.printTime();
//     // debugger
//     const boundFn = this._tick
//     setInterval(boundFn, 1000);
//   }
//   printTime() {
//     console.log(`${this.hour}:${this.min}:${this.sec}`);
//   }
//   _tick() {
//     this._secondTick();
//     this.printTime()
//   }

//   _secondTick() {
//     this.sec += 1; 
//     if (this.sec === 60)  {
//       this.sec = 0; 
//       this._minuteTick();
//     }
//   }
 
//   _minuteTick() {
//     this.min += 1;
//     if (this.min === 60) {
//       this.min = 0;
//       this._hourTick();
//     }
//   }

//   _hourTick() {
//     this.hour += 1;
//     if (this.hour === 24) {
//       this.hour = 0;
//     }
//   }
// }

// const clock = new Clock();


const readline = require('readline');
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function addNumbers(sum, numsLeft, callback) {
  if (numsLeft > 0) {
      read.question("Give me a number: ", function (answer) {
      console.log("before sum");
      sum += parseInt(answer);
      console.log("after parse")
      console.log(sum); 
      addNumbers(sum, numsLeft - 1, callback);
    });
  } else {
    read.close();
    return callback(sum);
  }
}



addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      i = 0;
      innerBubbleSortLoop(arr, i, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

function askIfGreaterThan(el1,el2,callback) {
  read.question(`Greater Or No? ${el1} ${el2} ` , function (answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps = false, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
      if (isGreaterThan) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      } 
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}


// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   read.close();
// });