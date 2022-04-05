import React from "react";
import Header from "../../organisms/Header";
import "./styles.css";
import Modal from "../../organisms/Modal";
import useModal from "../../organisms/Modal/modalhook";
import MuiModal from "../../organisms/ReactModal/index"

const Index = () => {
  const {isShowing, toggle} = useModal();

  return (
    <div>
      <div>
        <Header />
      </div>

      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default Index;
