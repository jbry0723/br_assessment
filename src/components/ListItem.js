import "../css/listitem.css";
import React from "react";

function ListItem(props) {
  let handleClick = (e) => {
    e.preventDefault();
    updateSelected(props.id);
  };
  let { updateSelected } = props;
  let { bgImg, name, category } = props;
  return (
    <section
      onClick={handleClick}
      className="itemDiv"
      style={{ backgroundImage: `url(${bgImg}` }}
    >
      <div className="overlay"></div>
      <h2 className="nameText">{name}</h2>
      <p className="categoryText">{category}</p>
    </section>
  );
}

export default ListItem;
