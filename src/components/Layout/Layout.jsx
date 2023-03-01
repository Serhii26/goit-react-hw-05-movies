import Sidebar from './Sidebar';
const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />

      <main
        className="tab-content p-5 h-100 col-9"
        style={{ minHeight: '100vh' }}
      >
        <div className="tab-pane fade show active">{children}</div>
      </main>
    </>
  );
};
export default Layout;
