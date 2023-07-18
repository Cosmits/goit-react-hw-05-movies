import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';
import { StyledContainer } from 'components/App.styled';

const Button = ({ onClick, title }) => {
  return (
    <StyledContainer>
      <StyledButton type="button" onClick={() => onClick()}>{title}</StyledButton>
    </StyledContainer>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export default Button;