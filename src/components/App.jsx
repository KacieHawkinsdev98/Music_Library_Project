import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            song: [
                {
                    title: '', 
                    artist: '', 
                    album: '', 
                    release_date: '', 
                    likes: ''
                }
            ]
        }
    }

    componentDidMount() {
        this.getSong();
    }

    async getSong() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            this.setState({
                song: response.data
            }); 
        }
        catch (ex) {
            alert('Sorry, an error has occured!');
        }
    }

    render() {
        return (
                 <div>
                    <h1>Awaiting Song</h1>
                    <h1>{this.state.getSong}</h1>
                </div>
        );
    }
}

export default App;