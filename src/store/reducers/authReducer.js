const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login Successful");
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_ERROR":
      console.log("Login Error", action.err);
      return {
        ...state,
        authError: action.err.message,
      };
    case "SIGNOUT_SUCCESS":
      console.log("SignOut Successful");
      return state;
    case "SIGNOUT_ERROR":
      console.log("SignOut Error", action.err);
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup Successful");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("Signup Error", action.err);
      return {
        ...state,
        authError: action.err.message,
      };
    case "SIGNUP_CREATE_USER_ERROR":
      console.log("Signup Create User Error", action.err);
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return {
        ...state,
        authError: null,
      };
  }
};

export default authReducer;
