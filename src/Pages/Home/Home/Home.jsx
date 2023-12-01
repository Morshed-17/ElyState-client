import AdsCards from "../AdsCards/AdsCards";
import Banner from "../../../components/Banner/Banner";
import Reviews from "../Reviews/Reviews";
import ImageSection from "../ImageSection/ImageSection";
import NewsLetter from "../NewsLetter/NewsLetter";

import banner2 from '../../../assets/banner2 .jpg'


const Home = () => {
    return (
        <div>
            <Banner title="Search Your Next Home" subTitle="Find new & featured property located in your local city." image={banner2}/>
            <AdsCards/>
            <Reviews/>
            <ImageSection/>
            <NewsLetter/>
        </div>
    );
};

export default Home;