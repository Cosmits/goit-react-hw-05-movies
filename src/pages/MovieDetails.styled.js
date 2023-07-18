import { Link } from "react-router-dom";
import styled from "styled-components";

export const GoBackBtn = styled(Link)`
 padding: 8px 16px;
  margin:  20px 0;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);


  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

export const Wrapper = styled.div`
  margin: 24px auto;

  @media screen and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    width: 846px;
  }
`;

export const DetailsList = styled.ul`
  padding: 24px;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DetailsItem = styled.li`
  @media screen and (min-width: 768px) {
    width: calc(100% / 2);
  }
`;

export const DetailsImg = styled.img`
  /* width: 248px; */
  height: 315px;
  border-radius: 5px;
  margin: auto;

  @media screen and (min-width: 768px) {
    /* width: 294px; */
    height: 400px;
  }

  @media screen and (min-width: 1280px) {
    /* width: 375px; */
    height: 478px;
  }
`;

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  
  @media screen and (max-width: 767px) {
    font-size: 1rem;
  }
`;

export const MovieSubTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 600;
`;

export const MovieText = styled.p`
  margin-bottom: 12px;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 36px;
  
`;

export const InfoLink = styled(Link)`
  padding: 8px 12px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 5px;
  color: #3f51b5;
  border: 1px solid #3f51b5;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #303f9f;
    border: 1px solid #303f9f;
  }
`;