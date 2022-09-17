const user = {
  fisrtName: 'Igor',
  lastName: 'Silva',
  full_name: 'Nome Completo',
  age: 18,
  instagram: '@igufs123',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
}

// Spread Operator
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],

  active: true,
}

console.log({user});

console.log({updatedUser});