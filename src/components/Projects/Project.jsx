import React,{ useEffect } from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: fit-content;
  gap: 30px;

  @media (min-width: 768px){
    width: 25%;
    height: fit-content;
  }
`

const ProjectCardImage = styled.div`
  display: flex;
  background-color: #fff;
  width: 200px;
  height: 200px;

  @media (min-width: 768px){
    width: 80%;
  height: 50%;
  }

  img{
    width: 100%;
  height: 100%;
  object-fit: contain;
  }
`

const ProjectCardBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: fit-content;
  text-align: center;
  color: #1d1d1b;
  gap: 20px;

  @media (min-width: 768px){
    gap: 30px;
  }
`

const ProjectCardTitle = styled.div`
  height: 15%;
  font-size: 1.1rem;

  h3{
    margin: 0;
  }
`

const ProjectCardDescription = styled.div`
  height: 50%;
`

const ProjectCardLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 15%;
  width: 60%;
  text-decoration: none;
  color: #1d1d1b;

  &:hover{
    background-color: rgb(209, 209, 209);
  }
`

function Project(props) {

  let { title, description, img } = props

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <ProjectCard data-aos="fade-up" data-aos-duration="1000">
      <ProjectCardImage className='projectCardImage'>
        <img src="images/eclipse.svg" alt="proyecto"/>
      </ProjectCardImage>
      <ProjectCardBottom>
        <ProjectCardTitle>
          <h3>{title}</h3>
        </ProjectCardTitle>
        <ProjectCardDescription>
          <p>{description}</p>
        </ProjectCardDescription>
        <ProjectCardLink href='#'>Ver Proyecto</ProjectCardLink>
      </ProjectCardBottom>
    </ProjectCard>
  )
}

export default Project