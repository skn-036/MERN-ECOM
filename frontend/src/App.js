import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react'

// header components
import Backdrop from "./components/common/Backdrop";
import Navbar from "./components/common/Navbar";
import SideDrawer from "./components/common/SideDrawer";

//Screens
import HomeScreen from './components/homeScreen/HomeScreen';
import ProductScreen from './components/productScreen/ProductScreen';
import CartScreen from './components/cartScreen/CartScreen';

const App = () => {

const [sideDrawer, setSideDrawer] = useState(false);

const toggleSidedrawer = () => setSideDrawer(!sideDrawer)

return (
    <>
        <Router>
            {/** Navbar */}
            <Navbar onToggle={toggleSidedrawer} side={sideDrawer} />
            {/** Side Drawer */}
            <SideDrawer onToggle={toggleSidedrawer} side={sideDrawer} />
            {/** Backdrop */}
            <Backdrop onToggle={toggleSidedrawer} side={sideDrawer}/>

            <Switch>
                <div className="bg-gray-100 screen-min-height w-full">
                    {/** HomeScreen */}
                    <Route exact path="/" component={HomeScreen}></Route>
                    {/** Product Screen */}
                    <Route path="/products/:id" component={ProductScreen}></Route>
                    {/** Cart Screen */}
                    <Route path="/cart" component={CartScreen}></Route>
                </div>
            </Switch>
        </Router>
    </>
    );
};

export default App;
