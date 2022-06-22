import Choose from "./Choose";
import LandPage from "./LandPage";
import Meet_Client from "./Meet_Client";
import Services_Section from "./Services_Section";

const HomePage = () => {
  return (
    <>
      <LandPage />
      <Services_Section />
      <Meet_Client />
      <Choose />
    </>
  );
};

export default HomePage;
