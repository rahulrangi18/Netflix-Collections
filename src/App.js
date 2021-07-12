import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";


const ncard = (val) => {
  return (
    <Card
      key={val.id}
      title={val.title}
      imgsrc={val.imgsrc}
      sname={val.sname}
      link={val.link}
    />
  );
};
const App=()=>(
  <>
    <h1 className="heading_style"> MY FAVORITE NETFLIX WEBSERIES</h1>
    {Sdata.map(ncard)}
  </>
);

export default App;