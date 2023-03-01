import  Navigation   from "../Navigation/Navigation";
const Sidebar = () => {
  return (
    <aside
      className=" nav-pills p-5  col-3"
      style={{ height: 'auto' }}
    >
      
        <Navigation />
      
    </aside> 
  );
};
export default Sidebar;