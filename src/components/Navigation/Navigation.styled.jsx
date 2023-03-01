import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Item = styled(NavLink)`
  text-decoration: none;
  color: #450505;
  font-weight: 400;
  &.active {
    color: #0c8df0;
  }
  :hover {
    color: #ffb650;
  }
`;