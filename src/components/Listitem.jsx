import React, { Component } from 'react'

class Listitem extends Component {
    render() {
        const { item, onDelete, onToggle, onEdit } = this.props

        return (
            <li className="list-group-item d-flex justify-content-between">
                {item.name}
                <div className='d-flex'>
                    <input checked={item.checked} onChange={() => onToggle(item.id)} type="checkbox" className='me-3' />
                    <button onClick={() => onEdit(item.id)} className="btn btn-primary me-3">edit</button>
                    <button onClick={() => onDelete(item.id)} className="btn btn-danger">&times;</button>
                </div>
            </li>
        )
    }
}

export default Listitem;

