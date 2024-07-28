// function dateMethods() {
//   const currentDates = new Date();
//   console.log(currentDates);


//   console.log(currentDates.getDate());
//   console.log(currentDates.getMonth() + 1);
//   console.log(currentDates.getFullYear());
//   console.log(currentDates.getHours());
//   console.log()
  
// }
// dateMethods();

// const currentDate = new Date();
// console.log(`Time in millisecond since 1970: ${currentDate.getTime()}`);


function CalculateSum () {
    let a = 0;
    for(let i = 0; i < 100000000; i++){
      a += i;
    }
    return a;
  }
  
  const beforeDate = new Date();
  const beforeTimeInMs = beforeDate.getTime();
  CalculateSum();
  
  const afterDate = new Date();
  const afterTimeInMs = afterDate.getTime();
  
  console.log(afterTimeInMs - beforeTimeInMs);



function CalculateSum () {
    let a = 0;
    for(let i = 0; i < 100000000; i++){
      a += i;
    }
    return a;
  }
  
  const beforeDate = new Date();
  const beforeTimeInMs = beforeDate.getTime();
  CalculateSum();
  
  const afterDate = new Date();
  const afterTimeInMs = afterDate.getTime();
  
  console.log(afterTimeInMs - beforeTimeInMs);


  