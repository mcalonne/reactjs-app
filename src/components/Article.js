import React from 'react';

class Article extends React.Component {

    state = { isInEditMode: false }

    render(){
        const article = this.props.data;
        return (
            <div className='list-group-item' key={article.id}>{article.quantity} {article.name}</div>
        )
    }
}

export default Article;