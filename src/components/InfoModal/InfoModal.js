import React from 'react';
import Modal from 'react-modal';
import Line from '../Line/Line';
import './InfoModal.css';

Modal.setAppElement('#root');

const InfoModal = props => {
  const { visibleTitle, visibleInfo, visibleKeywords, visibleBlog, closeModal } = props;
  const renderInfo = () => {
    // if (typeof visibleInfo === 'string') {
    //   return <p>{visibleInfo}</p>;
    // }

    // multi-lines stored in an array
    const summary = visibleInfo.map(line => (
      <Line line={line} key={line.substring(0, 10)} />
    ));
    return (
      <>
        {summary}
        <p>Made with: {visibleKeywords}</p>
        {visibleBlog && <p>Read more <a href={visibleBlog} target='_blank'
          rel='noopener noreferrer'>here</a>.</p>}
      </>
    )

  };

  return (
    <Modal
      onRequestClose={closeModal}
      isOpen={!!visibleInfo}
      contentLabel='Info Modal'
    >
      <div className='info-modal'>
        <h2 className='InfoModal-title'>{visibleTitle}</h2>
        {visibleInfo !== undefined && renderInfo()}
        <button onClick={closeModal}>X</button>
      </div>
    </Modal>
  );
};

export default InfoModal;
