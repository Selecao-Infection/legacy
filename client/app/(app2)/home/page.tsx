"use client"
import React from "react";
import { SiNike, SiAdidas, SiPuma } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
import { FaHandHoldingDollar, FaArrowRightArrowLeft } from "react-icons/fa6";
import NewTreding from "./home_componet/newTreding";
import AllCollection from "./home_componet/all_collection";
import BrandsCard from "./home_componet/incoming_Brands"
import CreatorCard from "./home_componet/creator_card";


const Home :React.FC = () => {
  return (
    <div className="text-center p-8 md:p-12 lg:p-16 xl:p-20">
      <div className=" gap-[10rem] flex mb-8 px-[10%] ">
        <div className=" flex flex-col max-w-[40%] gap-8 ">
          <h1 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl text-white text-left font-bold mb-6">
            Shoes are the Spirit of Fashion
          </h1>
          <div className="text-gray-500 text-left mb-6">
            Shoes define style, telling a unique story through personal choices.
            They are the essence of self-expression and individuality in
            fashion.
          </div>
          <button
            className="text-white bg-violet-600 max-w-[10rem] rounded-full p-2"
            // onClick={handleExploreClick}
          >
            Explore now
          </button>
          <div className=" items-center w-[40rem] flex gap-[20%]">
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
          <div className="w-[40rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
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
    <div className="flex justify-center space-x-8 md:space-x-12 gap-[10rem] h-20 lg:space-x-20 mb-10">
      <SiNike className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 text-gray-500" />
      <SiAdidas className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 text-gray-500" />
      <SiPuma className="w-12 md:w-16 lg:w-20 h-12 md:h-16 lg:h-20 text-gray-500" />
    </div>
    <div className=" p-4 mx-auto flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold ">About Us</h1>
        <p className="text-gray-500">
        At B.A.T-SQUAD, we're not just a shoe retailer,
         we're a team of style enthusiasts dedicated
          to delivering quality and comfort.
           Our vision is to curate a collection 
          that blends the latest trends with 
          a commitment to customer satisfaction.
        </p>
      </div>
      <div className=" my-8 gap-10  flex items-center justify-center text-white px-[8rem]">
        <div className=" w-1/2 flex items-center justify-end ">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2022/11/QI/NX/SO/125968822/lenus-8mm-cuban-chain-in-gold-500x500.jpg"
            alt="What We Do"
            className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
          />
        </div>
        <div className=" flex text-left justify-center w-[50rem]">
          <div className="w-1/2 mr-4">
            <h1 className="text-3xl text-left font-bold  text-white mb-4">
              Fashion That Speaks
            </h1>
            <p className="text-left mb-4 text-gray-400 w-[30rem]">
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
      </div>
      <div className=" p-4 mx-auto flex flex-col gap-8 ">
        <h1 className="text-white text-4xl font-bold ">All Collection</h1>
        <p className="text-gray-500">
        Step into elegance with our latest collection shoes.<br />{" "}
          Each pair is a blend of sophistication and comfort, designed for the modern trendsetter.<br />{" "} From sleek formal options to casual chic, our shoes are your perfect companion for any occasion.
        </p>
      </div>
      <div className="gap-[15rem] flex items-center justify-center space-x-12 gap-20 h-20 mt-4 md:mt-8 lg:mt-20">
        <div className="flex flex-col items-center justify-center">
          {" "}
          <FaHandHoldingDollar className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-violet-500" />
          <p className="text-white font-semibold">Exeptionnal Prices</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {" "}
          <FaCopyright className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-violet-500" />
          <p className="text-white font-semibold">Fast Payment</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          {" "}
          <FaArrowRightArrowLeft className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-violet-500" />
          <p className="text-white font-semibold">Fast And Easy Transactions</p>
        </div>
      </div>
      <AllCollection />
      <div className="flex flex-col gap-4 p-4 mx-auto mt-[10rem] ">
        <h1 className="text-white text-6xl font-bold ">New & Trending</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti
          inventore labore voluptas eligendi modi rerum! <br /> Commodi nam
          illum ex eveniet aliquid, quos vitae repellendus corrupti cupiditate,
          suscipit distinctio hic.
        </p>
      </div>

      <NewTreding/>

      <div className="flex flex-col gap-4 p-4 mx-auto mt-[10rem] ">
        <h1 className="text-white text-6xl font-bold ">Upcoming Creators</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti
          inventore labore voluptas elig
        </p>
      </div>
      <CreatorCard />
      <div className="flex flex-col gap-4 p-4 mx-auto mt-[10rem] ">
        <h1 className="text-white text-6xl font-bold ">Upcoming Brands</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti
          inventore labore voluptas elig
        </p>
      </div>
      <BrandsCard />
      <div className="text-white text-2xl md:text-3xl lg:text-4xl  md:mt-[10rem]">
        Frequently Asked Questions
        <h1 className="text-gray-500 text-md md:text-xl lg:text-2xl">
          Wanna Ask Something?
        </h1>
      </div>
      <div className="flex mt-10 justify-center items-center">
        <div className=" flex flex-col flex-1 justify-center items-center">
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                                   +"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                                   +"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                                    +"
          />
        </div>
        <div className="  flex flex-col flex-1 justify-center items-center">
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                                    +"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                                    +"
          />
          <input
            type="text"
            className="w-[80%] bg-transparent mb-5 pb-4 border-b-[1px] border-input placeholder:text-gray-500 text-white w-[26%] "
            placeholder="what is in your mind                                                                                    +"
          />
        </div>
      </div>
          <button className="text-white bg-violet-500 font-bold pl-6 pr-6 p-2 mt-4 rounded-full">FAQ</button>
      <div className="bg-purple-500 p-[5%] mx-9 rounded-md mt-[10%]">
        <h1 className="text-3xl text-white font-bold mb-10">
          Highest Quality Collection
        </h1>
        <button
          className="text-white bg-gray-300 font-bold pl-6  pr-6 p-2 mt-4 rounded-full "
          // onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>
    </div>

  );
};

export default Home;
