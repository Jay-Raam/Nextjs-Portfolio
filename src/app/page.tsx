import { Hero } from "./components/HeroParallax";
import { FloatingNavDemo } from "./components/navbar";
import Member from "./components/member";
import Card from "./components/card";
import "./style.css";

export default function Home() {
  return (
    <div className="protfolio">
      <div className="navbar">
        <FloatingNavDemo />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div
        id="#about"
        className="about flex gap-6 max-w-[800px] mx-auto my-0 justify-center items-center pb-[150px] mt-[40px]"
      >
        <div className="text flex flex-col gap-5 w-[50%]">
          <h1 className="font-bold text-[30px]">About Us...</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit
            corporis ut necessitatibus officia iusto perspiciatis recusandae
            atque et, eveniet dicta error commodi. Voluptatem incidunt debitis
            alias quod laborum dolorum! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Labore enim exercitationem quia iure repellendus
            saepe, architecto dolores eveniet hic perspiciatis. Harum libero
            nostrum dolore fugit accusamus dolorum, facilis quam consequuntur.
          </p>
          <a href="https://jay-raam.github.io/Jayasriraam/">
            <button type="button" className="btn">
              Read More
            </button>
          </a>
        </div>
        <div className="w-[50%]">
          <img
            src="https://aceternity.com/images/products/thumbnails/new/moonbeam.png"
            alt="the design"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="project flex flex-wrap gap-[4.7rem] justify-center items-center max-w-[1200px] mx-auto my-0">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div id="#contact" className="join mt-11">
        <Member />
      </div>
    </div>
  );
}
