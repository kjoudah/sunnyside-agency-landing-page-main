import arrowDown from './../images/icon-arrow-down.svg';
import eggMobile from './../images/mobile/image-transform.jpg';
import eggDesktop from './../images/desktop/image-transform.jpg';

import glassMobile from './../images/mobile/image-stand-out.jpg';
import glassDesktop from './../images/desktop/image-stand-out.jpg';

import emilyImage from './../images/image-emily.jpg';
import thomasImage from './../images/image-thomas.jpg';
import jennieImage from './../images/image-jennie.jpg';
import milkBottlesMobile from './../images/mobile/image-gallery-milkbottles.jpg';
import orangeMobile from './../images/mobile/image-gallery-orange.jpg';
import coneMobile from './../images/mobile/image-gallery-cone.jpg';
import sugarCubesMobile from './../images/mobile/image-gallery-sugar-cubes.jpg';
import milkBottlesDesktop from './../images/desktop/image-gallery-milkbottles.jpg';
import orangeDesktop from './../images/desktop/image-gallery-orange.jpg';
import coneDesktop from './../images/desktop/image-gallery-cone.jpg';
import sugarCubesDesktop from './../images/desktop/image-gallery-sugarcubes.jpg';

export default function Body() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:text-[125%] xl:text-[150%]">
      <div className="order-1 pt-10 bg-[url(/src/images/mobile/image-header.jpg)] tracking-veryWide h-[400px] bg-bottom bg-cover bg-no-repeat flex flex-col items-center text-center gap-10 md:col-span-2 md:bg-[url(/src/images/desktop/image-header.jpg)]">
        <h1 className="text-4xl uppercase font-serif text-white">
          We are creatives
        </h1>
        <img src={arrowDown} alt="Arrow down"></img>
      </div>
      <div className="order-2 md:order-3">
        <picture>
          <source
            srcSet={eggDesktop}
            media="(min-width:768px)"
            alt="Egg"
          ></source>
          <img className="w-full" src={eggMobile} alt="Egg"></img>
        </picture>
      </div>
      <div className="order-3 md:order-2 text-center p-8 flex flex-col gap-4 justify-center items-center md:text-start xl:p-24">
        <h2 className="font-serif text-3xl text-blue-600 w-full font-black">
          Transform your brand
        </h2>
        <p className="font-sans text-blue-700 w-full">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a
          href="#"
          className="font-serif font-black w-full text-md uppercase text-blue-600 after:bg-yellow-100 after:h-2 after:w-32 after:block after:relative after:-top-2 after:left-1/2 after:-translate-x-1/2 after:rounded-lg hover:after:bg-yellow-200 md:after:left-0 md:after:translate-x-0"
        >
          Learn more
        </a>
      </div>
      <div className="order-4">
        <picture>
          <source
            srcSet={glassDesktop}
            media="(min-width:768px)"
            alt="Glass"
          ></source>
          <img className="w-full" src={glassMobile} alt="Glass"></img>
        </picture>
      </div>
      <div className="order-5 text-center p-8 flex flex-col gap-4 justify-center items-center md:text-start xl:p-24">
        <h2 className="font-serif text-3xl text-blue-600 w-full font-black">
          Stand out to the right audience
        </h2>
        <p className="font-sans text-blue-700 w-full">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </p>
        <a
          href="#"
          className="font-serif font-black w-full text-md uppercase text-blue-600 after:bg-red-100 after:h-2 after:w-32 after:block after:relative after:-top-2 after:left-1/2 after:-translate-x-1/2 after:rounded-lg hover:after:bg-red-200  md:after:left-0 md:after:translate-x-0"
        >
          Learn more
        </a>
      </div>
      <div className="order-6 pt-10 bg-[url(/src/images/mobile/image-graphic-design.jpg)] h-[600px] bg-top bg-cover bg-no-repeat flex flex-col justify-end items-center text-center gap-8 px-4 py-12 md:bg-[url(/src/images/desktop/image-graphic-design.jpg)] xl:h-[900px]">
        <h2 className="font-serif text-3xl text-cyan-200">Graphic Design</h2>
        <p className="font-sans text-cyan-200">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </div>
      <div className="order-7 bg-[url(/src/images/desktop/image-photography.jpg)] h-[600px] bg-top bg-cover bg-no-repeat flex flex-col justify-end items-center text-center gap-8 px-4 py-12 bg-[url(/src/images/desktop/image-desktop.jpg) xl:h-[900px]">
        <h2 className="font-serif text-3xl text-blue-400">Photography</h2>
        <p className="font-sans text-blue-400">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
      <div className="order-8 flex flex-col gap-12 items-center text-center py-16 px-4 md:col-span-2 md:py-32">
        <h2 className="uppercase font-serif text-blue-500 tracking-veryWide">
          Client Testimonials
        </h2>
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              className="w-16 h-16 rounded-full"
              src={emilyImage}
              alt="user Testimonial image"
            />
            <p className="font-sans text-blue-400">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h3 className="font-serif text-blue-600 font-black">Emily R.</h3>
            <span className="font-sans text-blue-500 text-sm -m-2">
              Marketing Director
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              className="w-16 h-16 rounded-full"
              src={thomasImage}
              alt="user Testimonial image"
            />
            <p className="font-sans text-blue-400">
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience
            </p>
            <h3 className="font-serif text-blue-600 font-black">Thomas S.</h3>
            <span className="font-sans text-blue-500 text-sm -m-2">
              Chief Operating Officer
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              className="w-16 h-16 rounded-full"
              src={jennieImage}
              alt="user Testimonial image"
            />
            <p className="font-sans text-blue-400">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h3 className="font-serif text-blue-600 font-black">Jennie F.</h3>
            <span className="font-sans text-blue-500 text-sm -m-2">
              Business Owner
            </span>
          </div>
        </div>
      </div>
      <div className="order-9 grid grid-cols-2 md:grid-cols-4 md:col-span-2">
        <div>
          <picture>
            <source
              srcSet={milkBottlesDesktop}
              media="(min-width:768px)"
              alt="Milk bottles"
            ></source>
            <img src={milkBottlesMobile} alt="Milk bottles"></img>
          </picture>
        </div>
        <div>
          <picture>
            <source
              srcSet={orangeDesktop}
              media="(min-width:768px)"
              alt="Orange on a plate"
            ></source>
            <img src={orangeMobile} alt="Orange on a plate"></img>
          </picture>
        </div>
        <div>
          <picture>
            <source
              srcSet={coneDesktop}
              media="(min-width:768px)"
              alt="Ice cream cone"
            ></source>
            <img src={coneMobile} alt="Ice cream cone"></img>
          </picture>
        </div>
        <div>
          <picture>
            <source
              srcSet={sugarCubesDesktop}
              media="(min-width:768px)"
              alt="Sugar cubes"
            ></source>
            <img src={sugarCubesMobile} alt="Sugar cubes"></img>
          </picture>
        </div>
      </div>
    </main>
  );
}
