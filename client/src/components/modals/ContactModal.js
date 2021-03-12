import React, { useContext, useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ContactContext from "../../context/contact/contactContext";

const ContactModal = (props) => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const contactContext = useContext(ContactContext);

  const { sendMail, mailSuccess, setMailSuccess } = contactContext;

  const onSubmit = (e) => {
    e.preventDefault();

    sendMail({ contactName, contactEmail, contactMessage });
  };

  //determine email success or failure alert
  let alert;
  if (mailSuccess === true) {
    alert = (
      <div className="alert-success py-3 px-3">
        Thanks for the message! We will get back to you shortly.
      </div>
    );
  } else if (mailSuccess === false) {
    alert = (
      <div className="alert-danger">
        There was a problem sending this mail, please try again!
      </div>
    );
  } else {
    alert = <></>;
  }

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation
    >
      <form onSubmit={onSubmit}>
        <Modal.Header closeButton className=" ">
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>Send us a message</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {mailSuccess !== null && <div className="text-center"> {alert}</div>}
          {/* <h4 className="mt-1 ">Name</h4> */}
          <input
            style={inputStyle}
            type="text"
            placeholder="Name..."
            className="form-control"
            value={contactName}
            name="name"
            onChange={(e) => setContactName(e.target.value)}
          />
          {/* <h4 className="mt-4 ">Email </h4> */}
          <input
            style={inputStyle}
            type="email"
            placeholder="Email..."
            className="form-control mt-4"
            value={contactEmail}
            name="email"
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
          {/* <h4 className="mt-4 ">Message</h4> */}
          <textarea
            placeholder="Enter Message..."
            className="form-control mt-4"
            style={{ minHeight: "150px" }}
            value={contactMessage}
            name="msg"
            onChange={(e) => setContactMessage(e.target.value)}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-outline-primary" type="submit">
            <strong>Send</strong>
          </button>
          <button className="btn btn-outline-danger" onClick={props.onHide}>
            <strong>Close</strong>
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

const inputStyle = {
  border: " none",
  borderBottom: "1px solid black",
  borderRadius: "0px",
};

export default ContactModal;
