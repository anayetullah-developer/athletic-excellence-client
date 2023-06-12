import Extra from "../Extra/Extra";
import Hero from "../Hero/Hero";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularClasses/>
            <PopularInstructors/>
            <Extra/>
        </div>
    );
};

export default Home;