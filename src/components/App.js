import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFish from '../sampleFish';
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    componentDidMount(){
        const {params} = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef){
            this.setState({order:JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    componentDidUpdate() {
        console.log(this.state.order);
        localStorage.setItem(this.props.match.params.storeId)
        console.log("It updated");
    }

    addFish = fish => {
        // 1. Take a copy of existing state (mutation)
        const fishes = {...this.state.fishes}
        //2. add our new fish to that fishes variable.
        fishes[`fish${Date.now()}}`] = fish;
        //3. set the new fishes objet to state
        this.setState({fishes});
    };

    loadSampleFishes =() => {
        this.setState({fishes:sampleFish});
    }

    addToOrder = (key)=> {
        //1. take a copy of state
        const order = {...this.state.order}
        //2. Either add to the order, or update to the order
        order[key] = order[key] +1 || 1;
        //3. Call set state to update the state object.
        this.setState({order});
    }
    render(){
    return(
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Fresh Seafood Market" />
                <ul className="fishes">
                    //
                    {Object.keys(this.state.fishes).map(key => (
                        <Fish
                            key={key}
                            index={key}
                            details={this.state.fishes[key]}
                            addToOrder={this.addToOrder}/>
                        ))}
                </ul>
            </div>
            <Order fishes={this.state.fishes} order={this.state.order}/>
            <Inventory
                addFish={this.addFish}
                loadSampleFishes={this.loadSampleFishes}/>
        </div>
    );
    }
}
export default App;
