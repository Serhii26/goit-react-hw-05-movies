import { Link } from 'react-router-dom';
import styled from 'styled-components';

// export const HomeWrapper = styled.div`
//   padding: 24px;
//   display: flex;
//   flex-direction: column;
//   gap: 16px;

// `;

export const HomeTitle = styled.h1`
  margin: 0;
`;

export const MovieList = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ListItem = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 19px;
  font-weight: 500;
  :hover,:active {
    color: #50c5ff;
  }
`;