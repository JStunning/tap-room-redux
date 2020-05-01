import initialState from "../initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_KEG':
      return  {
        ...state,
        masterKegList: {
          pints: pints - 1
        }
      }
    default:
      return state;
  }
};