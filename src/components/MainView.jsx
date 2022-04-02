import React, { useState } from 'react'
import AddDocumentModal from './AddDocumentModal'
import Document from './Document';

export default function MainView({ data, dbUpdated }) {
  const [show, setShow] = useState(false);
  const [collection, setCollection] = useState("");
  const [document, setDocument] = useState("");
  const [id, setId] = useState(null);
  const [collectionEditable, setCollectionEditable] = useState(true);

  const documentAdditionState = (saveState) => {
    console.log("Is Document Saved? ", saveState);
    dbUpdated(saveState);
    setCollectionEditable(true);
    setCollection("");
    setDocument("");
    setId(null);
    setShow(false);
  };

  const onEdit = (collectionName, contentDetails, id) => {
    setCollection(collectionName);
    setDocument(contentDetails);
    setId(id);
    setCollectionEditable(false);
    setShow(true);
  }

  return (
    <div className='my-3 main-view-div'>
      <button className='create-doc-btn' onClick={
        () => setShow(true)
      }>Create a Document</button>
      {show &&
        <AddDocumentModal onClose={documentAdditionState}
          collectionName={collection}
          contentDetails={document}
          collectionEditable={collectionEditable}
          editable={true}
          id={id}
        />

      }
      <Document collectionName={data} onEdit={onEdit} />
    </div>
  )
}