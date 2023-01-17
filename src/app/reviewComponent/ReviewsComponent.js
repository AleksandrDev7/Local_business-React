import React, { Component } from "react";
import reviews from "../../api/ReviewsApi";
import './reviewsComponent.scss'

class ReviewsComponent extends Component {
    render() {
        const recall =[];
        reviews.forEach((reviews, index) => {
            recall.push(
                <div className="item" key={index}>
                    <div className="item-photo">
                        <img src={reviews.photo} alt="userPhoto" />
                    </div>
                    <div className="item-text">
                        <p className="text_reviews">{reviews.text}</p>
                        <div className="personal">
                            <span>{reviews.name},&nbsp;</span>
                            <p>{reviews.profession}</p>
                        </div>
                    </div>
                </div>
            )
        });

    return (
        <div className="block_reviews">
            {recall}
        </div>
    );
    }
}

export default ReviewsComponent;