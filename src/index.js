import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from "./Sdata";

ReactDOM.render(
  <>
    <h1 className="heading_style"> MY FAVORITE 3 NETFLIX WEBSERIES</h1>
    <Card
      title={Sdata[0].title}
      imgsrc={Sdata[0].imgsrc}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    />
    <Card
      title={Sdata[1].title}
      imgsrc={Sdata[1].imgsrc}
      sname={Sdata[1].sname}
      link={Sdata[1].link}
    />
    <Card
      title={Sdata[2].title}
      imgsrc={Sdata[2].imgsrc}
      sname={Sdata[2].sname}
      link={Sdata[2].link}
    />
  </>,
  document.getElementById("root")
);

