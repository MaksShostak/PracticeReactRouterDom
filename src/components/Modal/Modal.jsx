// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import style from './Modal.module.css';
import { useParams } from 'react-router-dom';
// const body = document.querySelector('body');

const Modal = () => {
  const { id } = useParams();
  console.log(id);
  const parseId = JSON.parse(id);

  // useEffect(() => {
  //   const handleKeyDown = event => {
  //     if (event.code === 'Escape') {
  //       modalClose();
  //     }
  //   };
  //   document.body.style.overflow = 'hidden';
  //   // body.classList.add('not_scroll');
  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     // body.classList.remove('not_scroll');
  //     document.body.style.overflow = 'none';
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [modalClose]);

  // const handleBackDropClose = event => {
  //   if (event.currentTarget === event.target) {
  //     modalClose();
  //   }
  // };

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        {parseId.id}
        <img src={parseId.id} alt="gdsgdag" />
      </div>
    </div>
  );
};

// Modal.propTypes = {
//   modalClose: PropTypes.func.isRequired,
//   modalimg: PropTypes.shape({
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Modal;
