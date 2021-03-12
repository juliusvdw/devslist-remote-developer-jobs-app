import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ContactContext from "../../context/contact/contactContext";

const ContactModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation
    >
      <Modal.Body>
        <h4 className="text-center">This feature will be available shortly!</h4>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-outline-primary " onClick={props.onHide}>
          <strong>Close</strong>
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
