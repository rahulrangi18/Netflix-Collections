import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from "./Sdata";
import App from "./App";

const ncard=(val)=>
{
  return (
    <Card
      key={val.id}
      title={val.title}
      imgsrc={val.imgsrc}
      sname={val.sname}
      link={val.link}
    />
  );
}
ReactDOM.render(<App/>,document.getElementById("root")
);

