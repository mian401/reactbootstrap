import { SData } from '../Data/Data';
import Card from './Card';

const Cardgroup = () => {

    return (

        <>

            <h1 className='text-center mb-5 mt-3 mx-auto text-primary' > Services We Provide </h1>
            
            <div className='col-10 mx-auto'>

                <div class="row row-cols-1 row-cols-md-4  g-5">

                    {SData.map((data, index) => {

                        return (

                            <Card key={index} name={data.name} text={data.text} img={data.image} />
                        );
                    })}

                </div>
            </div>

        </>
    );
}


export default Cardgroup;