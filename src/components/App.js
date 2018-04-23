import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Form from './Form';
import ItemsList from './ItemsList';

// class based component
class App extends React.Component {

    render(){
        return (
            <div className='container'>
                <h2>Shopping list App</h2>
                <Form title='Add an article' addArticle={this.props.addArticle} />
                <br/>
                <ItemsList articles={this.props.articles} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        articles : state.articles
    }
};

const addArticleActionCreator = (article) => {
    return {
        type: 'ADD_ARTICLE',
        payload: article
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle : (article) => {
            dispatch(addArticleActionCreator(article));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);