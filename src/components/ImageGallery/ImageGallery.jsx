import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';

import { StyledContainer } from 'components/TitleH1/TitleH1.styled';
import { StyledImageGallery } from './ImageGallery.styled';


const ImageGallery = ({ images }) => {
  return (
    <>
      <StyledContainer>
        <StyledImageGallery>
          {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
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