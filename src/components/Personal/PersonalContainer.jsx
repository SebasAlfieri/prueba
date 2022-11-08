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
          Somos un grupo interdisciplinario
        </p>
        {/* Chequear texto completo */}
        <p>Con experiencia en desarrollo de software y ciencias de datos que tiene como principal objetivo desarrollar plataformas que reflejen y relaten diferentes problemáticas sociales (ambientales, políticas, de género, etc).
          Además, utilizamos nuestro conocimiento técnico para asesorar a organizaciones, investigadores y gobiernos en el proceso de recolección, visualización y análisis de datos.
          Actualmente nos encontramos desarrollando tres plataformas para diferentes organizaciones y pretendemos generar identidad y visibilidad del grupo como agencia.</p>
      </div>

      <div className="personalBottomContainer">
        <div className="personalBottomLine" style={{marginBottom:"10vh"}}>
          <Personal img="card1.svg" title="Caro" />
          <Personal img="card2.svg" title="Pano" paragraph="salteño, programador, formado en antropología, me gustan los gatos"/>
          <Personal img="card3.svg" title="Pilita" />
          <Personal img="card4.svg" title="Simón" paragraph="Berazateguense de corazón."/>
        </div>
        <div className="personalBottomLine">
          <Personal img="card5.svg" title="Agu" />
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
