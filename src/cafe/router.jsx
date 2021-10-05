import {BrowserRouter as Router,Route,Switch
} from 'react-router-dom';
import Contactus from './pages/contact-us/contact-us';
import Home from './pages/home/home';
function AppRouter() {
    return(
        <Router>
               <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/contact-us' component={Contactus}></Route>                    
               </Switch>
        </Router>
    );
}
export default AppRouter;