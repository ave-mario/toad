import safeStringify from 'fast-safe-stringify';

async function setTokenData(tokenData) {
  await localStorage.setItem('tokenData', safeStringify(tokenData));
}
async function getTokenData() {
  const tokenData = await JSON.parse(localStorage.getItem('tokenData'));
  return tokenData;
}
async function removeTokenData() {
  await localStorage.removeItem('tokenData');
}

export default {
  setTokenData,
  getTokenData,
  removeTokenData
};
