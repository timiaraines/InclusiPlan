import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Layout