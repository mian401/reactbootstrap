import { Route, Switch } from 'react-router-dom';


import Home from './Home/Home';
import Services from './Services/Services';
import About from './About/About';
import Contact from './Contact/Contact';
import Error from './Error';



const App = () => {

    return (
        <>

            {/* Configuring Routes For Requests */}

            <Switch>

                <Route exact path='/reactbootstrap' component={Home} />
                <Route exact path='/services' component={Services} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route component={Error} />

            </Switch>

        </>
    );
}

export default App;