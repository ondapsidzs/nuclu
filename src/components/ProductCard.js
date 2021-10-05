import React from "react";

import {
  Container,
  Content,
  Favorites,
  ProductImage,
  Reviews,
  Star,
  Plus,
} from "./styles/ProductCard.styled";

const ProductCard = () => {
  return (
    <Container>
      <ProductImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
      <Content>
        <h1>Product</h1>
        <p>$ 100</p>
        <Reviews>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <p>No reviews yet</p>
        </Reviews>
        <Favorites>
          <Plus />
        </Favorites>
      </Content>
    </Container>
  );
};

export default ProductCard;
