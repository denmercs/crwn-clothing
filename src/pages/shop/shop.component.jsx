import React, { useState } from "react";
import SHOP_DATA from "./shop.data";
import Collection from "../../components/collection/collection.components";

const ShopPage = () => {
  const [state, setState] = useState({
    collections: SHOP_DATA
  });

  console.log("THIS IS THE STATE", state);
  return (
    <div className="shop-page">
      {state.collections.map(({ id, ...otherCollectionProps }) => (
        <Collection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
