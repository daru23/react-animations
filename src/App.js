import React, {Component} from 'react';
import logo from './logo.svg';
import Box from './Box';
import BoxSimple from './BoxSimple';
import './App.css';

class App extends Component {

    state = {pose: 'top'};

    boxes = [
        {size: 10, x: 100},
        {size: 50, x: 120},
        {size: 100, x: 190},
        {size: 200, x: 320}
    ];

    handleMouseEnter = () => this.setState({
        pose: this.state.pose === 'top' ? 'bottom' : 'top',
    });

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                    {this.boxes.map(box => <Box key={box} {...box}/>)}
                    <BoxSimple size={100}
                               pose={this.state.pose}
                               onMouseEnter={this.handleMouseEnter}/>
            </div>
        );
    }
}

export default App;
