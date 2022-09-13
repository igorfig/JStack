/* function minhaFunction() {
  this.name = 'Igor';

  const minhaArrowFunction = () => {
    this.lastname = 'Silva'
  };

  minhaArrowFunction();
};


console.log(new minhaFunction());
console.log(this);

 */

function soma() {
  const total = Object.values(arguments).reduce((a, b) => b += a); 

  console.log(total)
}

soma(5, 5, 5);

const getUser = () => ({
  id: '123',
  name: 'Igor'
})

console.log(getUser());