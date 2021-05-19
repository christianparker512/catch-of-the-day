import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
        // 1. Take a copy of existing state (mutation)
        const fishes = {...this.state.fishes}
        //2. add our new fish to that fishes variable.
        fishes[`fish${Date.now()}}`] = fish;
        //3. set the new fishes objet to state
        this.setState({fishes});
    };

    loadSampleFishes =() => {
        alert("Load sample fishes");
    }
    render(){
    return(
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market" age={50} cool={true}/>
            </div>
            <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>

            <Order />
        </div>

    );
}
}
export default App;
