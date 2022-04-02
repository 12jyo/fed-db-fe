import React, {useState, useEffect } from "react";
import { getAllCollections } from "../repository/api"
import LeftSideBar from "../components/LeftSideBar";
import MainView from "../components/MainView";
import "../style/style.css";

function Index() {
  const [data, setData] = useState(null);
  const [collectionUpdated, updateCollectionDetails] = useState(false);
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const handler = async () => {
      setData(null);
      const collectionCache = collection;
      setCollection(null);
      const response = await getAllCollections();
      console.log(response)
      setData(response);
      setCollection(collectionCache);
      updateCollectionDetails(false);
    } 
    handler();
  }, [collectionUpdated]);

  const handlecollectionSelction = (collectionName) => {
    setCollection(collectionName);
  };

  return ( 
    <div className="container-base">
      <div className="left-sidebar">
        <LeftSideBar data={data} onClick={handlecollectionSelction} />
      </div>
      <div className="main-view">
        <MainView data={collection} dbUpdated={(updateVal) => updateCollectionDetails(updateVal)} />
      </div>
    </div>
  );
}

export default Index;