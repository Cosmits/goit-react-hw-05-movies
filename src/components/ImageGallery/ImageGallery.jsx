import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';

import { StyledImageGallery } from './ImageGallery.styled';
import { StyledContainer } from 'components/App.styled';
import { Link, useLocation } from 'react-router-dom';

const ImageGallery = ({ images }) => {

  const location = useLocation();

  return (
    <>
      <StyledContainer>
        <StyledImageGallery>
          {images.map(image => (
            <Link key={image.id} to={`/movies/${image.id}`} state={{ from: location }}>
              <ImageGalleryItem key={image.id} image={image} />
            </Link>
          ))}
        </StyledImageGallery>
      </StyledContainer>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;