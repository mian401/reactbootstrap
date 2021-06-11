import Common from '../Common/Common';
import { HData } from '../Data/Data';


const Home = () => {

    document.title = `Welcome To ${HData.brand_name}` ;

    return (

        <Common heading_1={HData.heading_1} heading_2={HData.heading_2} img={HData.img} brandname={HData.brand_name} button={HData.button} link={HData.link} />
    );

}

export default Home;
