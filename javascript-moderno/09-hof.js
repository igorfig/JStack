const array = [
  { name: 'iPhone', price: 5000, quantity: 2 },
  { name: 'MacBook Pro', price: 20000, quantity: 1 },
  { name: 'Magic Mouse', price: 1000, quantity: 5 },
];

// .find e findIndex

const find = array.find((product) => product.price > 1000);

const findIndex = array.findIndex((product) => product.price > 1000);

//.some e .every

const some = array.some((product) => product.price < 1000);


const every = array.every((product) => product.price >= 1000);

// .map

const map = array.map((product) => ({...product,subtotal: product.quantity * product.price}));


// .filter


const filter = array.filter((product) => product.quantity > 1);

// .reduce 

const reduce = array.reduce((accumulator, current) => accumulator += current.price * current.quantity, 0)

console.log({ reduce });