function handleLoginSuccess(response) {
  const {
    data: { user, tokens }
  } = response;
  return { user, tokens };
}

function handleLoginError(error) {
  return error.response.data;
}

const handleResponse = { handleLoginSuccess, handleLoginError };
export default handleResponse;
