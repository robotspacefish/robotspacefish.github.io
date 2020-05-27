import React, { Component } from 'react';
import Project from '../Project/Project';
import InfoModal from '../InfoModal/InfoModal';
import projects from '../../assets/projects.json';
import './Portfolio.css';

class Portfolio extends Component {
  static defaultProps = { projects };
  constructor(props) {
    super(props);
    this.state = {
      visibleTitle: undefined,
      visibleInfo: undefined,
      visibleKeywords: undefined,
      visibleBlog: undefined
    };
  }
  componentDidMount() {
    // make sure portfolio displays top of page since React Router doesn't automatically scroll to
    // top of page links
    window.scrollTo(0, 0);
  }

  handleSearch = searchTerm => {
    this.setState({ searchTerm: searchTerm.target.value.trim() });
  };

  handleInfoModal = (title, info, keywords, blog) => {
    this.setState({
      visibleTitle: title,
      visibleInfo: info,
      visibleKeywords: keywords,
      visibleBlog: blog
    });
  };

  closeModal = () => {
    this.setState({ visibleInfo: undefined });
  };

  render() {
    return (
      <section className='Portfolio'>
        <h2>Portfolio</h2>

        <div className='Portfolio__items'>
          {projects.map(project => (
            <Project
              key={project.id}
              handleInfoModal={this.handleInfoModal}
              project={project}
            />
          ))}
        </div>

        <InfoModal
          visibleTitle={this.state.visibleTitle}
          visibleInfo={this.state.visibleInfo}
          visibleKeywords={this.state.visibleKeywords}
          visibleBlog={this.state.visibleBlog}
          closeModal={this.closeModal}
        />
      </section>
    );
  }
}

export default Portfolio;
