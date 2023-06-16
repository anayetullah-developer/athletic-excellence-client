import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../../assets/home/BDH_2056.jpg"
import image2 from "../../../assets/hero/2.jpg"
import image3 from "../../../assets/hero/3.jpg"
import image4 from "../../../assets/hero/4.jpg"
import image5 from "../../../assets/hero/5.jpg"
const Hero = () => {
    return (
        <div>
            <div>
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src={image1} />
                </div>
                <div>
                    <img src={image2} />
                </div>
                <div>
                    <img src={image3} />
                </div>
                <div>
                    <img src={image4} />
                </div>
                <div>
                    <img src={image5} />
                </div>
            </Carousel>
        </div>
        </div>
    );
};

export default Hero;