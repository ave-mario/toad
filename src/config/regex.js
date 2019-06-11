const reg = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}/
};
Object.freeze(reg);

export default reg;
