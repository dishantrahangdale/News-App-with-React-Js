// import PropTypes from 'prop-types';
import { getByTitle } from '@testing-library/react';
import React, { Component } from 'react';

export class NewsItem extends Component {
    //   static propTypes = {};
    render() {
        let {title, description, imageurl, newsurl} = this.props;
        return <div className='my-3'>
            <div className="card" style={{width: "18rem"}}>
                <img src={imageurl?imageurl:"https://emprendedoresnews.com/wp-content/uploads/2022/01/olas-compressed.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsurl} target="_blank" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>;
    }
}

export default NewsItem;
