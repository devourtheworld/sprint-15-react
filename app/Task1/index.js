import React, { Component } from "react";
import axios from "axios";
import { render } from "react-dom";

export default class Task1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            loading: true
        };
    }

    componentDidMount(){
        fetch('http://localhost:3000/list')
        .then(response => response.json())
        .then((data) => this.setState({list: data, loading: false}));
        
    }
    
    render() {
        const { list } = this.state;
        if (this.state.loading === false) {
            return(
                <div className='row'>
                    {list.map(item => {
                        return (
                            <div className='border col-3 col' key={item.id}>
                                <p>id - {item.id}</p>
                                <p>name - {item.name}</p>
                                <p>note - {item.note}</p>
                            </div>
                        );
                    })}
                </div>
            )
        } else {
            return (
                <div className='border'>
                    <p>Loading...</p>
                </div>
            )
        }
    }
}
