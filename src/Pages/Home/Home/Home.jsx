import Extra from "../Extra/Extra";
import Hero from "../Hero/Hero";
import PopularClasses from "../PopurlarClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularClasses/>
            <PopularClasses/>
            <Extra/>
        </div>
    );
};

export default Home;