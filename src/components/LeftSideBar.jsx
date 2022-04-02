import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";
import { useEffect, useState } from 'react';


function LeftSideBar({ data, onClick }) {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    if (data)
      setListData(data.map((el, i) => {
        console.log(i, el);
        return (
          <button key={i} className='neo-btn listItem' onClick={e => onClick(e.target.innerText)}>{el}</button>
        )
      }))
  }, [data]);
  if (data) {
    return (
      <div className="container">
        <h1>Collections</h1>
        <hr />
        {listData}
      </div>
    )
  }
  return (
    <p>Loading...</p>
  )
}

export default LeftSideBar;