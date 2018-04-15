import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import '../style.css';

/* 
=> stateless component (function based)
const Form = () => {
    return <div>Form component</div>;
}
*/

// statefull component
class Form extends React.Component {
    state = {
        name: '',
        quantity: 1
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.props.addArticle(this.state);
        this.setState({name: '', quantity: 1});
    };

    render(){
        return(
            <div className='row'>
                <div className='col-sm-4'>
                    <h4>{this.props.title}</h4>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Article name' value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                        <input type='number' className='quantity' placeholder='Quantity' value={this.state.quantity} onChange={(event) => this.setState({quantity: event.target.value})} />
                        <button type='submit' className='btn btn-sm btn-primary'>Add</button>
                    </form>
                </div>
            </div>
        ) 
    }
}

export default Form;