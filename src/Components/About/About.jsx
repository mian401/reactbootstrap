import Common from '../Common/Common';
import { AData } from '../Data/Data';

const About = () => {
    
    document.title = 'About Us';

    return (

        <Common heading_1={AData.heading_1} heading_2={AData.heading_2} img={AData.img} brandname={AData.brand_name} button = {AData.button} link={AData.link}/>
    );
    
}

export default About;