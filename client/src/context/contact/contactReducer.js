import { EMAIL_SENT, CLEAR_ALERTS } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case EMAIL_SENT:
      return {
        ...state,
        mailSuccess: action.payload,
      };
    case CLEAR_ALERTS:
      return {
        ...state,
        mailSuccess: null,
      };
    default:
      return state;
  }
};
