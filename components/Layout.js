import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Holies of Holy Concepts</title>
      </Head>
      <NavBar />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
