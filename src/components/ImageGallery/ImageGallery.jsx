import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import { useParams } from 'react-router-dom';
import { getPixabayPhoto } from 'services/Api/Api';
import ButtonBootstrap from 'components/Button/Button';

import style from './ImageGallery.module.css';

export const ImageGallery = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    if (name) {
      (async () => {
        try {
          const image = await getPixabayPhoto(page, name);

          setValue(prev => [...prev, ...image]);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [page, name]);
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <ul className={style.gallery}>
        {value.map(picture => (
          <ImageGalleryItem
            key={picture.id}
            responceObj={picture}
            // openModal={modalOpen}
          />
        ))}
      </ul>
      <ButtonBootstrap onClick={loadMore} />
    </>
  );
};

ImageGallery.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ),
  modalOpen: PropTypes.func.isRequired,
};
