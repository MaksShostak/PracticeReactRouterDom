import { ImageGallery } from 'components/ImageGallery';
import { Outlet } from 'react-router-dom';

export const Image = () => {
  return (
    <>
      <ImageGallery />
      <Outlet />
    </>
  );
};
