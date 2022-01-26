// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    //   static propTypes = {};
    articles = []
    constructor() {
        super();
        console.log("hello cons from news");
        this.state = {
            articles: this.articles,
            loading: true
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/everything?q=tesla&from=2021-12-26&sortBy=publishedAt&apiKey=bf63abc3d8e3400b862cafff14e04102";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles})
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title:""} description={element.description ? element.description:""} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}
                </div>
            </div>)
    }
}

export default News;
// 