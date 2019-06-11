import safeStringify from 'fast-safe-stringify';

async function setTokens(tokens) {
  await localStorage.setItem('tokens', safeStringify(tokens));
}
async function getTokens() {
  const tokens = await JSON.parse(localStorage.getItem('tokens'));
  return tokens;
}
async function removeTokens() {
  await localStorage.removeItem('tokens');
}

export default {
  setTokens,
  getTokens,
  removeTokens
};
