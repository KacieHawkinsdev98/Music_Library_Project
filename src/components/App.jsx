import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
    state= { }

    componentDidMount() {
        this.getAllSongs();
    }

    async getAllSongs() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            console.log(response.data)
        }
        catch (ex) {
            console.log('Error in API call!');
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1>Await Axios Element</h1>
                <button onClick ={this.getAllSongs}>Get Song</button>
            </React.Fragment>
        );
    }
}

export default App;