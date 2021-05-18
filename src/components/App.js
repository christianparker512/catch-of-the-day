import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    render(){
    return(
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market" age={50} cool={true}/>
            </div>
            <Inventory />
            <Order />
        </div>

    );
}
}
export default App;
