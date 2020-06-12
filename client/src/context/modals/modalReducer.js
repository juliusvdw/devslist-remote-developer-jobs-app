import { SET_CONTACT_MODAL } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case SET_CONTACT_MODAL:
      return {
        ...state,
        contactModalShow: action.payload,
      };
    default:
      return state;
  }
};
