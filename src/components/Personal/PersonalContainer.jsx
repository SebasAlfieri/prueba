import React, { useEffect } from "react";
import Personal from "./Personal";
import "./Personal.css";
import styled from "styled-components";
import "../About/About.css";
import AOS from "aos";
import "aos/dist/aos.css";


const PersonalMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  margin: auto;
  width: 90%;

  @media (min-width: 768px){
    width: 60vw;
  }
`

const PersonalTextTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 20px;

h2{
  font-size: 2.5rem;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 50px;
}

p{
  width: 90%;

  @media (min-width: 768px){
    width: 500px;
  }

  @media (min-width: 1200px){
    width: 900px;
  }
}
`

const PersonalBottomContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  align-self: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 10vh;

  @media (min-width: 768px){
    margin-top: 10vh;
    gap: 30px;
  }
`

const Separador = styled.div`
  align-self: center;
  width: 50%;
  height: 10px;
  border-bottom: 1px solid #d9d9d9;
`


function PersonalContainer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <PersonalMainContainer id="quienesSomos" data-aos="fade-up" data-aos-duration="1000">
      <PersonalTextTop>
        <h2>Quiénes somos</h2>
        <p>
          Somos un grupo interdisciplinario
        </p>
        {/* Chequear texto completo */}
        <p>Con experiencia en desarrollo de software y ciencias de datos que tiene como principal objetivo desarrollar plataformas que reflejen y relaten diferentes problemáticas sociales (ambientales, políticas, de género, etc).
          Además, utilizamos nuestro conocimiento técnico para asesorar a organizaciones, investigadores y gobiernos en el proceso de recolección, visualización y análisis de datos.
          Actualmente nos encontramos desarrollando tres plataformas para diferentes organizaciones y pretendemos generar identidad y visibilidad del grupo como agencia.</p>
      </PersonalTextTop>

      <PersonalBottomContainer>
          <Personal img="frame-1.svg" title="Caro" />
          <Personal img="frame-2.svg" title="Pano" paragraph="Salteño, programador, formado en antropología, me gustan los gatos"/>
          <Personal img="frame-3.svg" title="Pilita" />
          <Personal img="frame-4.svg" title="Simón" paragraph="Berazateguense de corazón."/>
          <Personal img="frame-4.svg" title="Simón" paragraph="Berazateguense de corazón."/>
      </PersonalBottomContainer>
      <Separador/>
    </PersonalMainContainer>
  );
}

export default PersonalContainer;
