import PropTypes from 'prop-types';

import { StyledContainer } from 'components/App.styled';
import { StyledTitleH1 } from './TitleH1.styled';

export default function TitleH1({ searchValue, totalHits }) {
  return (
    <StyledContainer>
      <StyledTitleH1> {searchValue}
        <sup style={{ fontSize: "initial" }}> {totalHits} img</sup>
      </StyledTitleH1>
    </StyledContainer>
  )
}

TitleH1.propTypes = {
  searchValue: PropTypes.string.isRequired,
  totalHits: PropTypes.number.isRequired,
}