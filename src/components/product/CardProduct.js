import React from "react";

export default function CardProduct({ product }) {
  return (
    <tr>
      <th scope="col">{product.id}</th>
      <th scope="col">{product.name}</th>
      <th scope="col">{product.price}</th>
    </tr>
  );
}
