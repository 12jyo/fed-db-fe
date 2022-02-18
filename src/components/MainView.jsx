import React, { useState } from 'react'
import AddDocumentModal from './AddDocumentModal'

export default function MainView({ data }) {

  const [show, setShow] = useState(false);

  return (
    <div className='my-3'>
      <button onClick={
        () => setShow(true)
      }>Create a Document</button>
      {show &&
        <AddDocumentModal onClose={() => setShow(false)} />
      }
    </div>
  )
}