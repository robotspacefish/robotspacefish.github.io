import React from 'react';
import ExternalLink from '../ExternalLink/ExternalLink';
import './Project.css';

const Project = ({ handleInfoModal, project }) => {
  const githubUrl = 'https://github.com/robotspacefish/';
  const { title, img, info, keywords, view, github, video, blog } = project;
  return (
    <div className='Project'>
      <h4>{title}</h4>
      <img src={require(`../../assets/img/${img}`)} alt='library project' />
      <div className='Project__links'>

        {info && (
          <button onClick={() => handleInfoModal(title, info, keywords, blog)}>Info</button>
        )}

        <ExternalLink url={view} text="View" />

        {video && <ExternalLink url={video} text="Demo" />}

        <ExternalLink url={`${githubUrl}${github}`} text="Source Code" />
      </div>
    </div>
  );
};

export default Project;
