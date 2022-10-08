import { Component } from "react";

class Modal extends Component {
    constructor() {
        super()
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.props.onClick(this.props.taskValue)
        this.props.onClose()
    }

    render() {
        const { isOpen, onClose, taskValue, onChange } = this.props;
        if (!isOpen) return null
        return (
            <div class="modal">
                <div onClick={onClose} className="overlay" />
                <div className="modal-body">
                    <input
                        value={taskValue}
                        type="text"
                        className="form-control"
                        placeholder="Enter your task"
                        onChange={(e) => onChange(e.target.value)}
                    />
                    <button onClick={this.clickHandler} className="btn btn-primary">Edit!</button>
                </div>
            </div>
        )
    }
}

export default Modal