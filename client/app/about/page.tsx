"use client"
import React, { useState } from "react";


const About: React.FC = () => {
  const [showMoreWhoWeAre, setShowMoreWhoWeAre] = useState<boolean>(false);
  const [showMoreWhatWeDo, setShowMoreWhatWeDo] = useState<boolean>(false);
  const [showMoreWhenWeStart, setShowMoreWhenWeStart] = useState<boolean>(false);

  const handleShowMoreWhoWeAre = () => {
    setShowMoreWhoWeAre(!showMoreWhoWeAre);
  };

  const handleShowMoreWhatWeDo = () => {
    setShowMoreWhatWeDo(!showMoreWhatWeDo);
  };

  const handleShowMoreWhenWeStart = () => {
    setShowMoreWhenWeStart(!showMoreWhenWeStart);
  };
  return (
    <div>
    <section className="my-8 flex flex-col gap-5 items-center justify-center mx-auto max-w-[40rem] text-white text-center">
      <p className="text-violet-700 underline">About us</p>
      <h2 className="text-3xl font-bold text-white mb-4 uppercase">
        Who We Are.
      </h2>
      <p className="mb-4 text-gray-400">
        At SELECAO, we're not just a shoe retailer, we're a team of style
        enthusiasts dedicated to delivering quality and comfort. Our vision is
        to curate a collection that blends the latest trends with a commitment
        to customer satisfaction.
      </p>
      {showMoreWhoWeAre && (
        <p className="mb-4 text-gray-400">
          We believe in the transformative power of the right pair of shoes
          and aim to build a community of individuals who share our passion
          for fashion and functionality.
        </p>
      )}
      <button
        className="text-white-500 bg-violet-600 w-[8rem]  rounded-full  p-2"
        onClick={handleShowMoreWhoWeAre}
      >
        {showMoreWhoWeAre ? "Show Less" : "Show More"}
      </button>
    </section>



    <section className="my-8 flex text-white">
      <div className="flex justify-center items-center">
        <div className="w-1/2 mr-4">
          <p className="text-violet-500 underline">since 2023</p>
          <h1 className="text-3xl font-bold  text-white mb-4">What We Do</h1>
          <p className="mb-4 text-gray-400">
            Discover the perfect pair for every occasion at SELECAO. We
            curate a diverse range of footwear, from timeless classics to the
            latest fashion-forward designs. Our commitment to comfort is
            unwavering, with each pair crafted from high-quality materials.
            ...
          </p>
          {showMoreWhatWeDo && (
            <p className="mb-4 text-gray-400">
              Shopping with us is an experience tailored to your lifestyle,
              offering a seamless online platform and exceptional customer
              support. Step into style, comfort, and confidence with
              SELECAO.
            </p>
          )}
          <button
            className="text-white-500 bg-violet-600 rounded-full  p-2"
            onClick={handleShowMoreWhatWeDo}
          >
            {showMoreWhatWeDo ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <div className=" w-[30rem] relative">
          <img
            className="h-80 w-96 left-[50px] top-[50px] absolute rounded-lg shadow-lg"
            src="https://www.soccerbible.com/media/120836/copa-sense-sb-6.jpg"
            alt=""
          />
          <img
            className="h-80 w-96 left-[25px] top-[25px] absolute rounded-lg shadow-lg"
            src="http://images.solecollector.com/complex/image/upload/chub70dc74fqtfyf2a4j.jpg"
            alt=""
          />
          <img
            className="h-80 w-96 left-0 top-0 absolute rounded-lg shadow-lg"
            src="https://i.pinimg.com/originals/e9/7f/04/e97f042615694ee5b0b109f57367235f.jpg"
            alt=""
          />
        </div>
      </div>
    </section>

    

    <section className=" mx-auto mt-20 flex max-w-[90rem] items-center text-white">
      <div className="w-1/2">
      <div className="h-80 w-[30rem] relative">
          <img
            className="h-80 w-96 left-[50px] top-[50px] absolute rounded-lg shadow-lg"
            src="https://www.soccerbible.com/media/120836/copa-sense-sb-6.jpg"
            alt=""
          />
          <img
            className="h-80 w-96 left-[25px] top-[25px] absolute rounded-lg shadow-lg"
            src="http://images.solecollector.com/complex/image/upload/chub70dc74fqtfyf2a4j.jpg"
            alt=""
          />
          <img
            className="h-80 w-96 left-0 top-0 absolute rounded-lg shadow-lg"
            src="http://mindthehype.com/wp-content/uploads/2015/03/Crampons-Nike-Mercurial-Superfly-CR7-Silverware-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white mb-4">When We Start</h1>
        <p className="mb-4 text-gray-400">
          Discover the perfect pair for every occasion at SELECAO. We
          curate a diverse range of footwear, from timeless classics to the
          latest fashion-forward designs. Our commitment to comfort is
          unwavering, with each pair crafted from high-quality materials. ...
        </p>
        {showMoreWhenWeStart && (
          <p className="mb-4 text-gray-400">
            Shopping with us is an experience tailored to your lifestyle,
            offering a seamless online platform and exceptional customer
            support. Step into style, comfort, and confidence with
            SELECAO.
          </p>
        )}
        <button
          className="text-white-500 bg-violet-600 rounded-full  p-2"
          onClick={handleShowMoreWhenWeStart}
        >
          {showMoreWhenWeStart ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
    




    <section className="my-8 text-white">
        <h2 className="text-2xl text-center font-bold text-white mb-4">
          Our Makers
        </h2>
        <div className="text-center">
          <h1 className="mb-4 text-xl text-gray-500">
            Wael Adem Aziz Hyba is one of the creative minds behind
            SELECAO.
          </h1>
        </div>
        <div className="makers-container flex items-center justify-center">
          <div className="makers-box w-1013 h-1289 p-8  rounded-lg">
            <div className="maker flex items-center flex-wrap gap-5 justify-center">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-794f5.appspot.com/o/398978244_872916797418157_2055816608000768215_n.jpg?alt=media&token=e7c598fd-249f-4a84-ad0c-2433f9d693cc"
                alt="Person"
                className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-794f5.appspot.com/o/183196972_184931676715104_8773563313684147324_n.jpg?alt=media&token=f4e855e1-123e-42e3-a7ec-fb29e7c7ddf2"
                alt="Person"
                className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-794f5.appspot.com/o/Screenshot%202023-09-04%20110008.png?alt=media&token=d1c231c9-af46-4a8d-99ae-4c7088490bd6"
                alt="Person"
                className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/e-commerce-794f5.appspot.com/o/IMG_6690.jpg?alt=media&token=55cc41c2-8bce-4765-a5a0-0acd52e8108b"
                alt="Person"
                className="w-80 h-80 object-fit flex-shrink-0 mr-4 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About