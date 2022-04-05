import React from "react";
import Header from "../../organisms/Header";
import { archiveList } from "../Notes/App";

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
