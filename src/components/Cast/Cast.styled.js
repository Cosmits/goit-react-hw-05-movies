import styled from "styled-components";

export const StyledCastList = styled.ul`
  padding: 0 44px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;
`;

export const StyledCastItem = styled.li`
  width: calc((100% - 80) / 6);

  & h3 {
     width: 180px;
  }
`;

export const StyledCastImage = styled.img`
  width: 180px;
  margin-bottom: 8px;
  border-radius: 5px;
`;

export const StyledCastTitle = styled.p`
  width: 140px;
`;