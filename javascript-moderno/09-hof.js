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
