import React, { useReducer } from "react";
import axios from "axios";
import ModalContext from "./modalContext";
import ModalReducer from "./modalReducer";

//bring in the types
import { SET_CONTACT_MODAL } from "../Types";

const ModalState = (props) => {
  const initialState = {
    modalShow: false,
  };

  const [state, dispatch] = useReducer(ModalReducer, initialState);

  const setModalShow = (bool) => {
    dispatch({ type: SET_CONTACT_MODAL, payload: bool });
  };

  //We return the provider , we wrap our whole application in this
  return (
    <ModalContext.Provider
      value={{
        modalShow: state.modalShow,
        setModalShow,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};
export default ModalState;
