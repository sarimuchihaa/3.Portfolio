import './WorkCardStyles.css';
import WordCard from "./WorkCard";
import WordCardData from "./WorkCardData";
import React from 'react'
import Project1 from "../assets/Project1.png";
import { NavLink } from 'react-router-dom';

const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        {WordCardData.map ((value, index) => {
            return (
                <WordCard
                key    = {index}
                imgsrc = {value.imgsrc}
                title  = {value.title}
                text   = {value.text}
                view   = {value.view}
                source = {value.source}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work