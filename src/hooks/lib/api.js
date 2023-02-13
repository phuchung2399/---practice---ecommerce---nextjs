const { default: axios } = require("axios");

export const signUpAccount = async function (requestData) {
  const { data } = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDb39hZDduK_nXXUzbXN24ru6XLmiZa9Ao`,
    {
      email: requestData.email,
      password: requestData.password,
      returnSecureToken: requestData.returnSecureToken,
    }
  );
  return data;
};

export const signInAccount = async function (requestData) {
  const { data } = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDb39hZDduK_nXXUzbXN24ru6XLmiZa9Ao`,
    {
      email: requestData.email,
      password: requestData.password,
      returnSecureToken: requestData.returnSecureToken,
    }
  );

  return data;
};
