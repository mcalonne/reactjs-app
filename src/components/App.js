import React from 'react';
import ReactDOM from 'react-dom';

import Form from './Form';
import ItemsList from './ItemsList';

// class based component

class App extends React.Component {

    state = {
        articles : []
    }

    addArticle = (_article) => {
        _article.id = Date.now();
        let newArticles = [...this.state.articles, _article];
        this.setState({articles: newArticles});
        console.log('Articles list :', newArticles);
    }

    render(){
        return (
            <div className='container'>
                <h2>Shopping list App</h2>
                <Form title='Add an article' addArticle={this.addArticle} />
                <br/>
                <ItemsList articles={this.state.articles} />
            </div>
        );
    }
}

export default App;