import React from "react";
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
        <Product title="Kanye West Concert"
          price={9999.99}
          image="https://media.npr.org/assets/img/2016/11/21/ap_347614358952_wide-2ab542204bc868df514c1aca42d58e5e8a53ddbb.jpg?s=1400"
          rating={5}
          />
          <Product title="The side of I-4"
          price={144.99}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/I-4_WB_1_mi_to_FL_535.jpg/220px-I-4_WB_1_mi_to_FL_535.jpg"
          rating={2}/>
        </div>

        <div className="home_row">
          
        <Product title="The Himalayan Mountains"
          price={699.99}
          image="https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_960_720.jpg"
          rating={3}
          />
          <Product title="Redwood Forest"
          price={1199.99}
          image="https://cdn.pixabay.com/photo/2014/02/25/10/09/sequoia-274158__340.jpg"
          rating={1}
          />
          <Product title="Shanty Town"
          price={99.99}
          image="https://cdn.pixabay.com/photo/2015/04/20/13/33/city-731385_960_720.jpg"
          rating={4}
          />
        </div>

        <div className="home_row">
        <Product title="Hogwarts"
          price={1199.99}
          image="https://cdn.pixabay.com/photo/2016/02/03/01/12/castle-1176423_960_720.jpg"
          rating={3}
          />
         
          <Product title="Rocket Exhaust"
          price={9999.99}
          image="https://cdn.pixabay.com/photo/2015/03/26/18/36/rocket-launch-693238_960_720.jpg"
          rating={5}
          />
        </div>
        <div className="home_row">
        <Product title="Mustard Gas"
          price={1199.99}
          image="https://cdn.pixabay.com/photo/2016/03/05/20/13/america-1238708_960_720.jpg"
          rating={5}
          />
           <Product title="Ohio"
          price={399.99}
          image="https://cdn.pixabay.com/photo/2017/08/27/15/47/barn-2686500_960_720.jpg"
          rating={4}
          />
          <Product title="The Rainforests of Peru"
          price={499.99}
          image="https://images.squarespace-cdn.com/content/v1/5388e453e4b0813d343199fc/1443452406832-IYWA1U24NT8SC7OFQZQW/ke17ZwdGBToddI8pDm48kPqQfq0L3n3wpHIsRapTfg8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKczo5Zn4xktlpMsMj-QlHXeMfNK6GwvtVkYEWiR8XAPyD3GfLCe_DXOSC_YcAacWL_/image-asset.jpeg?format=1000w"
          rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
