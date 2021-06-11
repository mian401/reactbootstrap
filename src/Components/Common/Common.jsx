import { NavLink } from 'react-router-dom';

import { Navbar, Footer } from '../Utils';

import '../../css/common.css'

const Common = (Props) => {

    return (
        <>
            <Navbar />

            <section id='header' className=' d-flex align-items-center '>

                <div className='container-fluid nav_bg' >

                    <div className="row">

                        <div className='col-10 mx-auto'>

                            <div className="row">

                                <div className='col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column '>

                                    <h1 className='text-danger mt-5'> {Props.heading_1}. </h1>
                                    <h1 className='text-primary my-2'>{Props.heading_2} <strong className='text-warning'>{Props.brandname}</strong>.</h1>

                                    <div>
                                        <NavLink className='btn btn-outline-primary btn-lg mt-5 rounded-pill pt-1' to={Props.link} > {Props.button} </NavLink>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 mt-5'>
                                    
                                    <img src={Props.img} alt="" className="img-fluid animated" />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <Footer />

        </>
    );
}

export default Common;