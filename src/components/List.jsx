import React, { Component } from 'react';
import Listitem from './Listitem';

class List extends Component {
    render() {
        const { list, onDelete, onToggle, onEdit } = this.props
        return (
            <ul className="list-group">
                {
                    list.map((listItem) => {
                        return (
                            <Listitem
                                key={listItem.id}
                                item={listItem}
                                onDelete={onDelete}
                                onToggle={onToggle}
                                onEdit={onEdit}
                            />
                        );
                    })
                }
            </ul>
        )
    }
}

export default List;