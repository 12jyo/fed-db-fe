import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/style.css";


function LeftSideBar({ data }) {
  if (data) {
    const myData = data;
    const listData = myData.map((el, i) => {
      console.log(i, el);
      return (
        <button key={i} className='neo-btn listItem '>{el}</button>
      )
    });

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