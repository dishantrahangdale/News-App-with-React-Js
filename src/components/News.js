// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
    //   static propTypes = {};
    articles = []
    constructor() {
        super();
        console.log("hello cons from news");
        this.state = {
            articles: this.articles,
            loading: false,
            page : 1 
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=tesla&from=2021-12-26&sortBy=publishedAt&apiKey=bf63abc3d8e3400b862cafff14e04102&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles, totalArticles:parsedData.totalResults, loading:false})
    }

    handlePrev = async ()=>{
        let url = `https://newsapi.org/v2/everything?q=tesla&from=2021-12-26&sortBy=publishedAt&apiKey=bf63abc3d8e3400b862cafff14e04102&page=1&pageSize=${this.props.pageSize}`;
        
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles : parsedData.articles})
        this.setState({
            page: this.state.page - 1,
            articles : parsedData.articles,
            loading:false
        })
    }
    
    handleNext = async ()=>{
        if(this.state.page +1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url = `https://newsapi.org/v2/everything?q=tesla&from=2021-12-26&sortBy=publishedAt&apiKey=bf63abc3d8e3400b862cafff14e04102&page=1&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            this.setState({loading:true})
            let parsedData = await data.json();
            this.setState({articles : parsedData.articles})
            this.setState({
                page: this.state.page + 1,
                articles : parsedData.articles,
                loading : false
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>Top Headlines</h1>
                {this.state.loading && <Spinner/>}
                
                <div className="row">
                    {!this.state.loading &&  this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title:""} description={element.description ? element.description:""} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" onClick={this.handlePrev} className="btn btn-secondary">&larr; Prev</button>
                    <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.handleNext} className="btn btn-secondary">Next &rarr;</button>
                </div>
            </div>)
    }
}

export default News;
// 