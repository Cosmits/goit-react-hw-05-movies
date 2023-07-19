import PropTypes from 'prop-types'

import {
  StyledImageGalleryItem,
  StyledImageGalleryItemImage,
  StyledTitle
} from './ImageGalleryItem.styled';
import { getImg, getInfo } from 'API/utils';
import { Link, useLocation } from 'react-router-dom';

export default function ImageGalleryItem(props) {

  const { image: { title, poster_path, name, id } } = props;
  const img = getImg(poster_path);
  const alt = getInfo([title, name]);

  const location = useLocation();

  return (
    <StyledImageGalleryItem>
      <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
        <StyledImageGalleryItemImage src={img} alt={alt} />
        <StyledTitle>{alt} </StyledTitle>
      </Link>
    </StyledImageGalleryItem>
  )

}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};