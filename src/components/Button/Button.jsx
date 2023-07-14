import PropTypes from 'prop-types';

import { StyledButton } from './Button.styled';
import { StyledContainer } from 'components/App.styled';

const Button = ({ onClick }) => {
  return (
    <StyledContainer>
      <StyledButton type="button" onClick={() => onClick()}>Load more</StyledButton>
    </StyledContainer>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Button;