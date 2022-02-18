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

  return (
    <Modal show={show} fullscreen={true} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input className="text-input" type="text" name="gg" id="gg" />
        <div className="container ">
          <JSONInput
            placeholder={{}} // data to display
            theme="light_mitsuketa_tribute"
            locale={locale}
            colors={{
              string: "#DAA520" // overrides theme colors with whatever color value you want
            }}
            height="550px"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddDocumentModal

