class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalID = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  start(printTimeCallback) {
    this.intervalID = setInterval (() => {
      this.currentTime++
      if(printTimeCallback)
      printTimeCallback ()
    }, 1000)
  }
}

  getMinutes() {
    if(this.intervalID == 0) {
      return minutes;
    }

    this.minutes = Math.floor(this.currentTime / 60)
    

    setTimeout = (() => {
      return minutes;
    }, 10000);
  
  }

  getSeconds() {
    this.seconds = currentTime % 60 {
      return this.seconds;
    }
    
  }
  

 function computeTwoDigitNumber(value) {
  let str = " " + value;

  if (str.length >= 3)
  return;

  if(str.length == 2)
  return str;
str = "0" + str;
 }


  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
