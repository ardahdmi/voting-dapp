import { Hero } from "../components/Hero.component";

declare const window: { ethereum: any };

const IndexPage = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default IndexPage;
