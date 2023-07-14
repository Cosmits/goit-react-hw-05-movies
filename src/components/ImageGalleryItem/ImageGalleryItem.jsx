import PropTypes from 'prop-types'

import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage
} from './ImageGalleryItem.styled';

export default function ImageGalleryItem(props) {

  const { image: { tags, webformatURL } } = props;
  
  return (
    <StyledImageGalleryItem>
      <StyledImageGalleryItemImage
        src={webformatURL}
        alt={tags} />
    </StyledImageGalleryItem>
  )

}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    userImageURL: PropTypes.string.isRequired,
  }).isRequired,
};