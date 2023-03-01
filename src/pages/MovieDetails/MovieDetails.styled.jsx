
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Detailsitem = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 18px;
`;

export const ButtonBack = styled(Link)`
  text-decoration: none;
  display: inline-block;
  padding: 8px 26px;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  margin: 5px;
  background-color: #ffffff;
  :hover,
  :active {
    color: #8d50ff;
    background-color: #4c444411;
  }
`;
