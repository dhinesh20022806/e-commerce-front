import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
import {useState} from 'react';
import { mongooseConnect } from "@/lib/mongoose";
import axios from "axios";


const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct, buyNow , addToLikedList, removeLikedList } = useContext(CartContext);
  const [isLiked , setIsLiked] = useState(false);
 
  const url = "/product/" + _id;
  const sendLikedProduct = async ()=>{
    const likedProduct = {_id , title, price , images}
    try {
      const response = await axios.post('/api/LikedProducts',{
        methods:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(likedProduct)
      })

    } catch (error) {
      console.log(error)
    }
  }
 useEffect(()=>{
  if(isLiked){
    // send the product info
    addToLikedList({_id , title, price , images})

  }
  else{
    removeLikedList(_id)
  }
 },[isLiked])
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
       <div className="flex justify-between w-full" >
       <div>
          <img src={images?.[0]} alt={title} />
        </div>
       </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price> &#8377;{price}</Price>
          
          <ButtonsWrapper>
          <button className="w-fit h-fit mx-auto " onClick={()=> setIsLiked(prev => !prev) } >
        <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked? 'red':"none"} viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

        </button>
            <Button block onClick={() => addProduct(_id)} primary outline>
              Add to cart
            </Button>
            <Button black outline onClick={() => buyNow(_id)} primary outline>
              Buy Now
            </Button>
           
          </ButtonsWrapper>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
