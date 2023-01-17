import ReviewsComponent from "../reviewComponent/ReviewsComponent";
import "./reviews.scss";
import "../home/home.scss";

function Reviews() {
    return(
        <section className="bg_yellow">
            <div className="wrapper">
                <div className="block" id="request">
                    <div className="block-title">
                        <h2>happy clients</h2>
                        <p>We are explain who is using our business solutions</p>
                    </div>
                    <ReviewsComponent />
                </div>
            </div>
        </section>

    );
}

export default Reviews;