import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";

//bring in the types
import { EMAIL_SENT, CLEAR_ALERTS } from "../Types";

const ContactState = (props) => {
  const initialState = {
    mailSuccess: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  const sendMail = async (contactData) => {
    try {
      console.log(contactData);

      const sentMail = await axios.post(
        "https://devslistjules.uk.r.appspot.com/api/contact",
        { contactData }
      );
      console.log(sentMail);

      //alert msg seent or message failure
      sentMail.data.success === true
        ? setMailSuccess(true)
        : setMailSuccess(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  //Email sent handler
  const setMailSuccess = (bool) => {
    dispatch({ type: EMAIL_SENT, payload: bool });

    setTimeout(clearAlerts, 4000);
  };

  //clear alerts
  const clearAlerts = () => {
    dispatch({ type: CLEAR_ALERTS });
  };

  //We return the provider , we wrap our whole application in this
  return (
    <ContactContext.Provider
      value={{
        mailSuccess: state.mailSuccess,
        sendMail,
        setMailSuccess,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
