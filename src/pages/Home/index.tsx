import { lazy } from "react";
import MyCarousel  from "../../components/MyCarousal/MyCarousal";
import AboutContent from "../../content/AboutContent.json";
import ContactContent from "../../content/ContactContent.json";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="realtor.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <div>
        <MyCarousel/>
      </div>
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="about.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="happy.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
