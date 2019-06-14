const reg = {
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/
};
Object.freeze(reg);

export default reg;
