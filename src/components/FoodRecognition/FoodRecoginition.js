import React from "react";

import Modal from "../UI/Modal/Modal";

const FoodRecoginition = ({ url, show, canceled, foodIngredients }) => {
  const highrateArray = foodIngredients.slice(0, 10);
  const SmellsIngredients = highrateArray.map((ing) => {
    return <li key={ing.name}>{ing.name}</li>;
  });
  return (
    <Modal show={show} canceled={canceled}>
      <div className="center w-90 pa1  shadow-3 tc">
        <img className="mw-100" src={url} alt="food" />
      </div>
      <h4 className="white">Hmm I can sense some..</h4>
      {foodIngredients.length >= 10 ? (
        <ul className="white">{SmellsIngredients}</ul>
      ) : foodIngredients.length ? (
        <h4 className="white">something wrong</h4>
      ) : (
        <h4 className="white">Loading</h4>
      )}
    </Modal>
  );
};

export default FoodRecoginition;
