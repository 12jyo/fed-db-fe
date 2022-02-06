import React, {useState, useEffect } from "react";
import { getAllCollections } from "../repository/api"
import LeftSideBar from "../components/LeftSideBar";
import "../style/style.css";

function Index() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const handler = async () => {
      const response = await getAllCollections();
      console.log(response)
      setData(response);
    } 
    handler();
  }, []);

  return ( 
    <div className="container-base">
      <div className="left-sidebar">
        <LeftSideBar data={data} />
      </div>
      <div className="main-view">
        <p>main view</p>
      </div>
    </div>
  );
}

export default Index;