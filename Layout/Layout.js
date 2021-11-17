import Header from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />;{children}
    </>
  );
};

export default Layout;
