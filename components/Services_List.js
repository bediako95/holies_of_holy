import { Service_data } from "../service_data";
import Services_Section from "./HomePage/Services_Section";

const Services_List = () => {
  return (
    <>
      {Service_data.map((data, i) => (
        <>
          <Services_Section key={i} image={data.image} desc={data.image} />
        </>
      ))}
    </>
  );
};

export default Services_List;
