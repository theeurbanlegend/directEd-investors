import { useGetPoolsQuery } from "../../hooks/useGetPoolsQuery";
import LandingLayout from "../portfolio/layout";
import Cards from "./card/poolCard";

const Pools = () => {
  const { pools, isLoadingPools } = useGetPoolsQuery();
  return (
    <LandingLayout>
      <div className="p-10">
        <section className="my-8 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Explore Investment Opportunities
          </h2>
          <p className="text-lg mb-4">
            Discover exciting investment opportunities in Web Development, UI/UX
            Design, and Generative AI. Each of these sectors presents unique
            potential for growth and innovation in today's market. Whether
            you're passionate about building the web, crafting intuitive user
            experiences, or exploring the creative potential of AI, there's an
            investment path waiting for you.
          </p>
        </section>
        {pools && pools.length > 0 && !isLoadingPools ? (
          <div className="mx-auto p-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-screen-lg mx-auto">
              {pools.map((pool) => (
                <Cards key={pool.id} pool={pool} />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-2xl font-bold">
            No Pools Available
          </div>
        )}
      </div>
    </LandingLayout>
  );
};

export default Pools;
