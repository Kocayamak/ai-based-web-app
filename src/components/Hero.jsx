// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo.png" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/Kocayamak", "_blank");
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Daha iyi bir Makale <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Uzun makaleleri net ve özlü özetlere dönüştüren açık kaynaklı bir makale
        özetleyici olan özetleme ile okumanızı basitleştirin
      </h2>
    </header>
  );
};

export default Hero;
