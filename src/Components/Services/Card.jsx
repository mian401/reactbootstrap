import { NavLink } from 'react-router-dom';

const Card = (Props) => {

    return (

        <div class="col">

            <div class="card h-100 rounded-3">

                <img src={Props.img} class="card-img-top" alt="Service" />

                <div class="card-body">
                    <h4 class="card-title fw-bold">{Props.name}</h4>
                    <p class="card-text ">{Props.text}</p>
                    <NavLink to='/contact' class="btn btn-primary">Get A Quote</NavLink>
                </div>

            </div>

        </div>

    );

}

export default Card;