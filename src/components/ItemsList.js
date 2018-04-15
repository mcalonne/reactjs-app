import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ItemsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='row'>
                <div className='col-sm-4'>
                    <ul className='list-group'>
                    {
                        this.props.articles.map(a => <div className='list-group-item' id={a.id}>{a.name}</div>)
                    }
                    </ul>
                </div>
            </div>
        );
    }
}

export default ItemsList;