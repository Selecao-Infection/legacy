"use client"
import React from "react";
import { SiNike, SiAdidas, SiPuma } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
import { FaHandHoldingDollar, FaArrowRightArrowLeft } from "react-icons/fa6";
import NewTreding from "./home_componet/newTreding";
import AllCollection from "./home_componet/all_collection";
import BrandsCard from "./home_componet/incoming_Brands"
import CreatorCard from "./home_componet/creator_card";
import NewTrending from "./home_componet/newTreding";

const Home :React.FC = () => {
  return (
    <div className=" text-white w-full m-2 justify-center">
      <div className="flex flex-col w-full gap-10">
          <div className="flex flex-wrap gap-10  justify-center">

          <div className=" flex flex-col items-center lg:max-w-[30%] gap-8 ">
          <h1 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl text-white text-left font-bold mb-6">
            ICE is the Spirit of Fashion
          </h1>
          <div className="text-gray-500 text-left m-4 mb-6">
            Diamonds define style, telling a unique story through personal choices.
            They are the essence of self-expression and individuality in
            fashion.
          </div>
          <button
            className="text-white bg-violet-600 max-w-[10rem] rounded-full p-2"
            // onClick={handleExploreClick}
          >
            Explore now
          </button>
          <div className=" items-center w-[18rem] flex gap-[20%]">
            <div className="text-gray-500 flex flex-col items-center">
              {" "}
              <h2 className="text-white font-bold text-3xl">100K</h2>
              <div className="text-gray-500 text-sm"> Brands</div>
            </div>
            <div className="text-gray-500 flex flex-col items-center">
              {" "}
              <h2 className="text-white font-bold text-3xl">20K</h2>
              <div className="text-gray-500 text-sm"> Fashion Designer</div>
            </div>
            <div className="text-gray-500 flex flex-col items-center">
              {" "}
              <h2 className="text-white font-bold text-3xl">60K</h2>
              <div className="text-gray-500 text-sm"> Fashion Shows</div>
            </div>
          </div>
        </div>
          
          <div>
          <div className="lg:w-[40rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 ">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/edb25474-7af5-4e32-966d-320b731d5079/air-jordan-1-brooklyn-womens-boots-kd9QhX.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://3.bp.blogspot.com/-FhZLokC6kG0/V1r7tdkz_pI/AAAAAAAA5Q4/GGrL6XyqOGMlmu1JcjVjIseCHEIxLKx-gCLcB/s1600/adidas-special-euro-2016-ace-16-purecontrol-boots-paul-pogba-2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://redsneaker.ru/components/com_jshopping/files/img_products/15887/adidas-yeezy-451-15887-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0d77f14f-6c0b-470c-b23f-7e3e4428e92d/air-jordan-1-low-womens-shoes-rJrHLw.png"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://www.kicksonfire.com/wp-content/uploads/2017/05/air-jordan-4-pure-money-1.jpg?x56094"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/711rcItb7qL._AC_SX395_.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61UGLtG0jyL._AC_SX395_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="flex justify-center space-x-8 md:space-x-12 lg:gap-[10rem] h-20 lg:space-x-20 mb-10">
      <SiNike className="w-20 h-20 text-gray-500" />
      <SiAdidas className="w-20 h-20 text-gray-500" />
      <SiPuma className="w-20 h-20 text-gray-500" />
    </div>
    <div className=" p-4 mx-auto flex flex-col gap-8 justify-center items-center">
        <h1 className="text-white text-5xl font-bold ">About Us</h1>
        <p className="text-gray-00 ">
       ICE Makers where Luxury finds you
        </p>
      </div>
      <div className="flex justify-center flex-wrap gap-20">
      <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/11/QI/NX/SO/125968822/lenus-8mm-cuban-chain-in-gold-500x500.jpg"
            alt="What We Do"
            className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
          />
             <div className=" ">
            <h1 className="text-3xl text-left font-bold  text-white mb-4">
              Fashion That Speaks
            </h1>
            <p className="text-left mb-4 text-gray-400  w-[14rem] lg:w-[28rem]">
              Discover the perfect pair for every occasion at B.A.T-SQUAD. We
              curate a diverse range of footwear, from timeless classics to the
              latest fashion-forward designs. Our commitment to comfort is
              unwavering, with each pair crafted from high-quality materials.
        
            </p>
            <button className="bg-violet-600 p-2 px-4 rounded-full">
              Show More
            </button>
          </div>
      </div>
      <div className="flex justify-center">
      <div className="  flex flex-col gap-8 justify-center ">
        <h1 className="text-white text-4xl font-bold ">All Collection</h1>

        <p className="text-gray-500 ">
        Step into elegance with our latest
        </p>
      </div>
      </div>
     
      <div className="lg:gap-[15rem] gap-8 flex items-center justify-center space-x-12  h-20 mt-4 md:mt-8 lg:mt-20">
        <div className="flex flex-col items-center justify-center">
          {" "}
          <FaHandHoldingDollar className="w-10 h-10 text-violet-500" />
          <p className="text-white lg:text-xl font-semibold text-[14px] text-center">Exeptionnal Prices</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {" "}
          <FaCopyright className="w-10 h-10 text-violet-500" />
          <p className="text-white font-semibold lg:text-xl text-center text-[14px]">Fast Payment</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {" "}
          <FaArrowRightArrowLeft className="w-10 h-10 text-violet-500" />
          <p className="text-white font-semibold lg:text-xl text-[14px] text-center" >Fast And Easy Transactions</p>
        </div>
      </div>
      <div>
      
          <AllCollection/>

      </div>
      <div className="flex justify-center text-black">
      <div className="  flex flex-col gap-8 justify-center ">
        <h1 className="text-black text-4xl font-bold ">New & Trending</h1>

        <p >
        Step into elegance with our latest
        </p>
      </div>
      
      </div>
   
        <NewTreding/>
         <div className="flex justify-center">
      <div className="  flex flex-col gap-8 justify-center ">
        <h1 className="text-white text-4xl font-bold ">Our Creators</h1>

        <p className="text-gray-500 ">
        Step into elegance with our latest
        </p>
      </div>
      
      </div>
      <div className="flex justify-center">

        <CreatorCard />

      </div>
      <div className="flex justify-center">
      <div className="  flex flex-col gap-8 justify-center ">
        <h1 className="text-white text-4xl font-bold ">Our Brands</h1>

        <p className="text-gray-500 ">
        Step into elegance with our latest
        </p>
      </div>
      
      </div>
      <div  className="flex justify-center">
        <BrandsCard />
      </div>
      <div className="flex justify-center">

   
     < div className="text-white text-2xl md:text-3xl lg:text-4xl  md:mt-[10rem]">
        Frequently Asked Questions
        <h1 className="text-gray-500 text-md md:text-xl lg:text-2xl justify-center flex">
          Wanna Ask Something?
        </h1>
      </div>
      </div>
      <div className="flex mt-10 justify-center items-center">
        <div className=" flex flex-col flex-1 justify-center items-center">
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind "
          />
        </div>
        <div className="  flex flex-col flex-1 justify-center items-center">
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind"
          />
        </div>

      </div>
      <div className="flex justify-center">

        <button className="text-white bg-violet-500 font-bold pl-6 pr-6 p-2 mt-4 w-[120px] rounded-full">FAQ</button>
      </div>
      <div className="bg-purple-500 p-[5%] mx-9 rounded-md mt-[10%] flex justify-center ">
        <div className="flex justify-center text-white flex-col">
        <h1 className="text-3xl text-white font-bold mb-10 justify-center">
          Highest Quality Collection
        </h1>
        
        <button
          className=" relative  left-14 lg:left-20 w-[200px] text-white bg-gray-300 font-bold pl-6  pr-6 p-2 mt-4 rounded-full "
          // onClick={handleGetStartedClick}
        >
          Get Started
        </button>
        </div>
 
      </div>
      </div>
        
 </div>
    

  );
};



export default Home;
