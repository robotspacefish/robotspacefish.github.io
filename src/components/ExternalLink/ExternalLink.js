import React from 'react';

const ExternalLink = ({ url, icon, text }) => (
  <a href={url} title="opens new window" target="_blank" rel="noopener noreferrer">
    {icon && <i className={icon} />}
    {text && text}
  </a>
);

export default ExternalLink;