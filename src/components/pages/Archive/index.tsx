import React from "react";
import Header from "../../Header/Header";
import { archiveList } from "../../TodoApp/App";
import "./index.css";

const index = () => {
  console.log(archiveList);
  return (
    <div>
      <div>
        <Header />
      </div>
      {/* <div>
        <ul>
          {archiveList.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default index;
