  //JSON methods
  //Json.parse
  //JSON.string

const user = {
    firstName : 'Karan',
    lastName : 'Chourasia',
    age : 24,
    phone : 9855663322,
    gender : 'male'
  };
  
  console.log(user);
  //Json File is converted to the string format
  const userString = JSON.stringify(user);
  console.log(userString);
  
// The stringified file is converted back to the JSON format
  const userParsed = JSON.parse(userString);
  console.log(userParsed);


//   Methods of JSON
  
  
