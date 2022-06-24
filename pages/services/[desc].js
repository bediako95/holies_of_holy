import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
import Layout from "../../components/Layout";
import Service_Detail from "../../components/ServicePage";
import { Box } from "@theme-ui/components";
import style from "../../styles/Home.module.css";
import { server } from "../../components/server";

const Service_item = ({ data }) => {
  const { sliders } = data;
  console.log(sliders);
  console.log("Images");

  return (
    <Layout heading={data.desc}>
      <ImageSlider images={sliders} />
      <Service_Detail desc={data.desc} infor={data.infor} image={data.image} />
    </Layout>
  );
};

export default Service_item;

export async function getServerSideProps(context) {
  const url = server;
  console.log(url);
  const slug = context.params.desc;
  console.log(slug);
  const res = await fetch(`${url}/api/services/${slug}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
