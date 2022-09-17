const user = {
  fisrtName: 'Igor',
  lastName: 'Silva',
  full_name: 'Nome Completo',
  age: 18,
  instagram: '@igufs123',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
}

// Destructuring
const { fisrtName, age, skills, full_name: fullName } = user;

const [primary, secondary, tertiary, quaternary] = skills;

console.log(fullName)