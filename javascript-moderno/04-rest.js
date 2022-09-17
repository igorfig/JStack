const user = {
  fisrtName: 'Igor',
  lastName: 'Silva',
  full_name: 'Nome Completo',
  age: 18,
  instagram: '@igufs123',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
}

// Rest Operator
const { fisrtName, skills, ...rest } = user;

const [primary, secondary, ...restSkills] = skills;

console.log(restSkills);