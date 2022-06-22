import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children,heading }) => {
  return (
    <>
      <Head>
        <title>Holies of Holy Concepts</title>
      </Head>
      <NavBar title={heading} />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
