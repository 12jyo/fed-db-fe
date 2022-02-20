import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';

function AddDocumentModal({ onClose }) {
  const [show, setShow] = useState(true);

  const hide = () => {
    setShow(false);
    onClose();
  };

  const [collection, setCollection] = useState("");
  const [document, setDocument] = useState({});

  const handleJsonInput = event => {
    console.log(event);
  };

  const save = () => {
    console.log(collection);
  };

  return (
    <Modal show={show} fullscreen={true} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input className="text-input" type="text" name="gg" id="gg" onChange={(e) => {
          setCollection(e.target.value)
        }}/>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
            Basic textarea
            </label>
            <textarea
          onChange={setDocument}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            />
        </div>
        <button onClick={() => {
          save();
        }}>Save</button>
      </Modal.Body>
    </Modal>
  );
}

export default AddDocumentModal

