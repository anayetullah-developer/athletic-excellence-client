import Hero from "../Hero/Hero";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import Venue from "../Venue/venue";

const Home = () => {
    return (
        <div>
            <Hero/>
            <PopularClasses/>
            <PopularInstructors/>
            <Venue/>
        </div>
    );
};

export default Home;