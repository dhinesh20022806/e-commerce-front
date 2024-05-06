import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import {useState} from 'react';
export default function categories({ products }) {
  const [filteredData, setFilteredData] = useState(products);

  console.log(products)



  async function handleChange(event) {
    const categoryFilter = event.target.value; // Get the selected category name
    if(categoryFilter === "All"){
      setFilteredData(products)
      return
    }
     setFilteredData(products.filter(item => item.category === event.target.value))
 
  }


  return (
    <>
      <Header />
      <div>
        <label htmlFor="products">choose the products</label>
        <select   onChange={handleChange} id="products" >
            <option value="All">All</option>
            <option value="662888cd62f0e8fb5a24d00a">Bronze antiques</option>
            <option value="662888ec62f0e8fb5a24d00d">Potterys</option>
            <option value="6628891d62f0e8fb5a24d012">Thanjavur dolls</option>
            <option value="6628894362f0e8fb5a24d015">Thanjavur paintings</option>
            <option value="6628ae84575c64992b55859f">Wood</option>
            <option value="662b3349504c86989c624802">Handlooms</option>
            <option value="662c88d298c5a4483e5d8aad">Instruments</option>
        </select>
      </div>
      <Center>
        <Title>Category</Title>
        <ProductsGrid products={filteredData} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
