import { Navbar,Footer } from '../Utils';
import Form from './Form'; 

const Contact = () => {

    document.title = 'Contact Us';

    return (
        <>

            <Navbar />

            <h1 className="mt-3 text-center fw-bold text-primary" >This Is Contact Section</h1 >

            <Form />

            <Footer />

        </>
    )
}

export default Contact;