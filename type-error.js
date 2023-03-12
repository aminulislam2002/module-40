const numbs = 5;
// numbs.push(45);

// let address;
// console.log(address.home); // this code return error
let address ={ city: 'bBaria', postCode: 4560};
// console.log(address.home.building); // this code return error
console.log(address?.home?.building); // solving error

const a = 'abul';
a = 'babul'; // this  code return error