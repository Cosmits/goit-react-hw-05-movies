import PropTypes from 'prop-types'

import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
  StyledTitle
} from './ImageGalleryItem.styled';
import { getImg, getInfo } from 'API/utils';

export default function ImageGalleryItem(props) {

  const { image: { title, poster_path, name } } = props;
  const img = getImg(poster_path);
  const alt = getInfo([title, name]);

  return (
    <StyledImageGalleryItem>
      <StyledImageGalleryItemImage src={img} alt={alt} />
      <StyledTitle>{alt} </StyledTitle>
    </StyledImageGalleryItem>
  )

}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};