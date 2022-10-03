import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useParams } from 'react-router-dom';
import style from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ responceObj }) => {
  const { name } = useParams();
  console.log(responceObj);
  return (
    <li className={style.galleryItem}>
      <NavLink to={`/${name}/modal/${JSON.stringify(responceObj)}`}>
        <img src={responceObj.webformatURL} alt={responceObj.tags} />
      </NavLink>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  responceObj: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
