import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FormGroup } from "react-bootstrap";
import { useState } from "react";

function AddModal({ showModal, handleClose, drName, addAppointment }) {
  const [patientName, setPatientName] = useState("");
  const [appoDate, setAppoDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({
      id: crypto.randomUUID(),
      patient: patientName,
      day: new Date(),
      consulted: false,
      doctor: drName,
    });
    setPatientName('');
    setAppoDate('')
    handleClose()
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setPatientName(e.target.value)}
                value={patientName}
                type="text"
                placeholder="enter your name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date and Time</Form.Label>
              <Form.Control
                onChange={(e) => setAppoDate(e.target.value)}
                value={appoDate}
                type="datetime-local"
              />
            </Form.Group>
            <FormGroup className="d-flex justify-content-center gap-3">
              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
