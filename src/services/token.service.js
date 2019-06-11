import safeStringify from 'fast-safe-stringify';

function setTokens(tokens) {
  localStorage.setItem('tokens', safeStringify(tokens));
}
function getTokens() {
  return JSON.parse(localStorage.getItem('tokens'));
}
function removeTokens() {
  localStorage.removeItem('tokens');
}

export default {
  setTokens,
  getTokens,
  removeTokens
};
