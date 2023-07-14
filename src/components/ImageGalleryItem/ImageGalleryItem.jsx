import PropTypes from 'prop-types'

import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
  StyledTitle
} from './ImageGalleryItem.styled';

export default function ImageGalleryItem(props) {

  const { image: { title, poster_path, name } } = props;
  const alt = !title ? name : title;

  return (
    <StyledImageGalleryItem>
      <StyledImageGalleryItemImage
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={alt} />
      <StyledTitle>{alt} </StyledTitle>
    </StyledImageGalleryItem>
  )

}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};