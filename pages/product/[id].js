import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";

import chatbot from "@/asserts/chatbot.jpeg";
import ChatBot from "@/components/ChatBot";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Parentdiv = styled.div`
  // position: relative;
  // height: 35vh;
`;
const Figure = styled.figure`
  position: absolute;
  bottom: 40px;
  right: 50px;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>&#8377;{product.price}</Price>
              </div>
              <div>
                <Button primary onClick={() => addProduct(product._id)}>
                  <CartIcon />
                  Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
      <div className="absolute bottom-[140px] w-[400px] right-[160px]">
        {isChatOpen ? <ChatBot /> : undefined}
      </div>
      <Parentdiv>
        <Figure>
          <Button onClick={handleOpenChat}>
            <Image src="http://localhost:3001/chatbot.jpeg" alt="chatbot" />
          </Button>
        </Figure>
      </Parentdiv>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
