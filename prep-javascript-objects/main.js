var person = {
  firstName: 'Aubrey',
  lastName: 'Graham',
  hobby: 'Music'
};

var fullName = person.firstName + ' ' + person.lastName;
console.log('Full Name:', fullName);

console.log('First Name:', person.firstName);
console.log('Last Name:', person.lastName);
console.log('Hobby:', person.hobby);

person.job = 'Rapper';
console.log('Current Job:', person.job + '.');

person.previousJob = 'Actor';
console.log('Previous Job:', person.previousJob + '.');

console.log('Complete Person Object:', person);
