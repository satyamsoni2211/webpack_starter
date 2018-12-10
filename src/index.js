const arr = ['satyam', 'soni'];
const names = [...arr, 'vedika', 'soni'];

const name = () => {
  return names.map(e => `name: ${e}`);
};
console.log(name());
