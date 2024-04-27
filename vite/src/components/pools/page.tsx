import LandingLayout from "../portfolio/layout";
import Cards from "./card/poolCard";

const Pools = () => {
  return (
    <LandingLayout>
      <div className="p-10">
        <section className="my-8 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Explore Investment Opportunities</h2>
          <p className="text-lg mb-4">
            Discover exciting investment opportunities in Web Development, UI/UX Design, and Generative AI.
            Each of these sectors presents unique potential for growth and innovation in today's market.
            Whether you're passionate about building the web, crafting intuitive user experiences,
            or exploring the creative potential of AI, there's an investment path waiting for you.                   
          </p>
        </section>
        <Cards />
      </div>
    </LandingLayout>
  );
};

export default Pools;
