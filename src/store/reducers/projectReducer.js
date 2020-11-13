const projectReducer = (state = null, action) => {
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("Created Project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Created Project Error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
