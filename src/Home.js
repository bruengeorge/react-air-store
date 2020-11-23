import React from "react";
import {Image} from 'react-native'; 
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg"
          alt=""
        />

        <div className="home_row">
          <Product title="The Rainforests of Peru"
          price={199.99}
          image="https://images.squarespace-cdn.com/content/v1/5388e453e4b0813d343199fc/1443452406832-IYWA1U24NT8SC7OFQZQW/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczo5Zn4xktlpMsMj-QlHXeMfNK6GwvtVkYEWiR8XAPyD3GfLCe_DXOSC_YcAacWL_/image-asset.jpeg?format=1000w"
          rating={5}
          />
          <Product />
        </div>

        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>

        <div className="home_row">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
