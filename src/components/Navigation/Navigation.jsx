
import { Item } from './Navigation.styled';
const Navigation = () => {
  return (
    <>
      <Item className="df p-5  col-9" to="">Home</Item>
      <Item to="movies">Movies</Item>
    </>
  );
};

export default Navigation;
