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
      size="lg"
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
          <h4 className="mt-1 ">Name</h4>
          <input
            type="text"
            placeholder="Name..."
            className="form-control"
            value={contactName}
            name="name"
            onChange={(e) => setContactName(e.target.value)}
          />
          <h4 className="mt-4 ">Email </h4>
          <input
            type="email"
            placeholder="Email..."
            className="form-control"
            value={contactEmail}
            name="email"
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
          <h4 className="mt-4 ">Message</h4>
          <textarea
            className="form-control"
            style={{ minHeight: "150px" }}
            value={contactMessage}
            name="msg"
            onChange={(e) => setContactMessage(e.target.value)}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">
            <strong>Send</strong>
          </Button>
          <Button onClick={props.onHide}>
            <strong>Close</strong>
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ContactModal;
