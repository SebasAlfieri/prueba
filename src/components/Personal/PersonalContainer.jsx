import React, { useEffect } from "react";
import Personal from "./Personal";
import "./Personal.css";
import "../About/About.css";
import AOS from "aos";
import "aos/dist/aos.css";

function PersonalContainer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="personalMainContainer" id="quienesSomos" data-aos="fade-up" data-aos-duration="1000">
      <div className="personalTextTop">
        <h2 className="AboutTextTitle">Quiénes somos</h2>
        <p className="AboutTextDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          culpa quam et aliquid. Est nesciunt cum, temporibus quod alias
          necessitatibus ex maxime maiores eligendi laboriosam natus delectus
          voluptatem earum voluptate!
        </p>
      </div>

      <div className="personalBottomContainer">
        <div className="personalBottomLine">
          <Personal img="card1.svg" title="Caro Trogliero" />
          <Personal img="card2.svg" title="Mariano Valdez" />
          <Personal img="card3.svg" title="Pili" />
          <Personal img="card4.svg" title="Simón Ayala" />
        </div>
        <div className="personalBottomLine">
          <Personal img="card5.svg" title="Agustín Collomb" />
          <Personal img="card6.svg" title="Persona 6" />
          <Personal img="card7.svg" title="Persona 7" />
          <Personal img="card8.svg" title="Persona 8" />
        </div>
      </div>
      <div className="separador"></div>
    </div>
  );
}

export default PersonalContainer;
