import React, { Component } from 'react'

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.onChange = this.onChange.bind(this);
        this.createTask = this.createTask.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    createTask() {
        if (!this.state.value.trim()) return
        this.props.onCreate(this.state.value);
        this.setState({ value: '' })
    }
    onChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    keyUpHandler(event) {
        if (event.key === 'Enter') {
            this.createTask()
        }
    }
    render() {
        return (
            <div className="div">
                <input
                    value={this.state.value}
                    type="text"
                    className="form-control"
                    placeholder="Enter your task"
                    onChange={this.onChange}
                    onKeyUp={this.keyUpHandler}
                />

                <button
                    type="button" className="btn btn-primary" onClick={this.createTask}>Submit
                </button>
            </div>


        )
    }
}

export default Input;