import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { postDocument, editDocument } from "../repository/api"
// import JSONInput from 'react-json-editor-ajrm';
// import locale from 'react-json-editor-ajrm/locale/en';

function AddDocumentModal({ onClose, collectionName, contentDetails, editable, collectionEditable, id }) {
  const [show, setShow] = useState(true);

  const hide = (saveState = false) => {
    setShow(false);
    onClose(saveState);
  };

  const [collection, setCollection] = useState("");
  const [document, setDocument] = useState("");

  useEffect(() => {
    if (collectionName && contentDetails) {
      console.log("coll: ", contentDetails);
      setCollection(collectionName);
      setDocument(contentDetails);
    }
    if (typeof editable === "undefined")
      editable = true;
    if (typeof collectionEditable === "undefined")
      collectionEditable = true;
  }, []);

  const save = async () => {
    if (!collection) return;
    if (!document) return;

    if (id) await editDocument(
      collection, { content: document }, id
    );
    else await postDocument(collection, {
      content: document
    });
    hide(true);
  };

  return (
    <Modal show={show} fullscreen={true} onHide={hide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="my-3 input-textarea d-flex flex-column justify-content-center">
          <p>{collectionEditable}</p>
          <input className="text-input" type="text" name="gg" id="gg" onChange={(e) => {
            setCollection(e.target.value)
          }} value={collection} disabled={!collectionEditable} />
          <div className="text-area my-4">
            <label htmlFor="exampleFormControlTextarea1">
              Add Document
            </label>
            <textarea
              onChange={(e) => {
                setDocument(e.target.value)
              }}
              value={document}
              className="form-control my-2"
              id="exampleFormControlTextarea1"
              rows="5"
              disabled={!editable}
            />
          </div>

        </div>
        <button className='my-3 save-button' onClick={() => {
          save();
        }}
          disabled={!editable}
        >Save</button>
      </Modal.Body>
    </Modal>
  );
}

export default AddDocumentModal

