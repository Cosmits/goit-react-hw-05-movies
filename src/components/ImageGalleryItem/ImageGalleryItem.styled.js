import styled from "styled-components";

export const StyledImageGalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1), 
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
    background-color: #303f9f;
    color: white;
  }

  &:hover > h2 {
    color: white;
  }
`

export const StyledImageGalleryItemImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`
export const StyledTitle = styled.h2`
  margin: 12px 8px;
  font-size: 2rem;
  font-weight: 700;
  min-height: 124px;
  color: #3f51b5;
`;