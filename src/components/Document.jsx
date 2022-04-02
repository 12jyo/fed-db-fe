import React, { useState, useEffect } from 'react'
import { getAllDocuments } from "../repository/api"
import AddDocumentModal from './AddDocumentModal'

function Document({ collectionName, onEdit }) {
  const [documents, setDocuments] = useState([]);
  const [show, setShow] = useState(false);
  const [edit, setEditable] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    const getDocs = async () => {
      let docs = [];
      if (collectionName)
        docs = await getAllDocuments(collectionName);
      setDocuments(docs.map((doc, i) => {
        return (
          <tr key={i}>
            <th scope="row">{i}</th>
            <td>{doc.id}</td>
            <td className='d-flex justify-content-center align-items-center'>
              <button className='mx-2 doc-btn' onClick={e => viewDetails(doc.content)}>View</button>
              <button className='mx-2 doc-btn' onClick={e => editDetails(doc.content, doc.id)}>Edit</button>
            </td>
          </tr>
        )
      }));
    };
    getDocs();
  }, [collectionName])

  const viewDetails = doc => {
    setContent(doc);
    setEditable(false);
    setShow(true);
  }

  const editDetails = (doc, id) => {
    onEdit(
      collectionName,
      doc,
      id
    );
  }

  return (
    <div className='container overflow-auto document-div' >
      {collectionName}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className='col-2'>#</th>
            <th scope="col" className='col-3'>ID</th>
            <th scope="col" className='col-7'>Action</th>
          </tr>
        </thead>
        <tbody>
          {documents}
        </tbody>
      </table>
      {show &&
        <AddDocumentModal 
          onClose={() => setShow(false)}
          collectionName={collectionName}
          contentDetails={content} 
          editable={edit}
          collectionEditable={false}
        />
      }
    </div>
  )
}

export default Document