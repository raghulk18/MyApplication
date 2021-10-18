import {BrowserRouter, BrowserRouter as Router, Route,Switch
} from 'react-router-dom';
import Collections from './pages/collections/collections';
import Contactus from './pages/contact-us/contact-us';
import Home from './pages/home/home';
function AppRouter() {
    return(
        <BrowserRouter>
               <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/contact-us' component={Contactus}></Route> 
                    <Route path='/collections' component={Collections}></Route>                    
               </Switch>
        </BrowserRouter>
    );
}
export default AppRouter;