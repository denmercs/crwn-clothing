import React from "react";
import "./collection.style.scss";
import Item from "../collection-item/item.components";

const Collection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <Item key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default Collection;
