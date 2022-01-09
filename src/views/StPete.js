import React, { Component } from 'react';
// import stpete from './pier.jpg';
import NewsArticle from '../components/NewsArticle';

export default class StPete extends Component {

    constructor() {
        super();
        this.state = {
            articles: []
        }
    }


    getNews = async () => {
        const res = await fetch("https://newsapi.org/v2/everything?q=Israel&apiKey=ace489dd71b74e8f9cf8aeedf4c0a864");
        const data = await res.json();
        console.log(data)
        this.setState({
            articles: data.articles
        }
        )
    }

    loopThroughArticles = (listOfArticles) => {
        return listOfArticles.map((article, index) => <NewsArticle key={index} article={article} />)
    }

    componentDidMount() {
        this.getNews()
    }


    render() {
        return (
            <div>
                <h2>Israel in the News</h2>
                <div className='container'>
                    <div className='row'>
                        {this.loopThroughArticles(this.state.articles)}
                    </div>
                </div>
            </div>
        )
    }
}
