## Create a counter in JavaScript

We halready covered this in the second lesson, but as an easy recap try to code a counter in Javave ascript
It should go up as time goes by in intervals of 1 second

let count = 0;
function Timer() {
    console.log(count++);
}
setInterval(Timer,1000);
