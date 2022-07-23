const Stats = () => {
    return(
        <section id="art-collection-inner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="art-collection-pic">
                            <img src="assets/images/popular-03.png" />
                        </div>
                        <div className="accordion" id="side-accordion">
                            <div className="quest-section">
                                <a className="quest-title active" href="#accordion-1">
                                    <img src="assets/images/art-track.svg" />
                                    Description
                                </a>
                                <div id="accordion-1" className="quest-content">
                                    <p>
                                        Created By <span>You</span>
                                    </p>
                                </div>
                            </div>
                            <div className="quest-section">
                                <a className="quest-title" href="#accordion-2">
                                    <img src="assets/images/superman.svg" />
                                    Super Man
                                </a>
                                <div id="accordion-2" className="quest-content">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                            <div className="quest-section">
                                <a className="quest-title" href="#accordion-3">
                                    <img src="assets/images/details.svg" />
                                    Details
                                </a>
                                <div id="accordion-3" className="quest-content">
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="art-collection-txt">
                            <h2>Digital Art Collection</h2>
                            <p>
                                Owned By<span>@memories</span>
                            </p>
                            <div className="accordion">
                                <div className="quest-section">
                                    <a className="quest-title active" href="#accordion-4">
                                        <img src="assets/images/chat.jpg" />
                                        Price History
                                    </a>
                                    <div id="accordion-4" className="quest-content">
                                        <div className="price-txt">
                                            <select>
                                                <option>All Time</option>
                                            </select>
                                        </div>
                                        <div className="price-chat">
                                            <img src="assets/images/chat.jpg" />
                                            <p>No Item Activity Yet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion">
                                <div className="quest-section">
                                    <a className="quest-title" href="#accordion-5">
                                        <img src="assets/images/listing.svg" /> Offers
                                    </a>
                                    <div id="accordion-5" className="quest-content">
                                        <div className="price-chat">
                                            <img src="assets/images/chat.jpg" />
                                            <p>No Item Activity Yet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion">
                                <div className="quest-section">
                                    <a className="quest-title" href="#accordion-6">
                                        <img src="assets/images/offer.svg" /> Listings
                                    </a>
                                    <div id="accordion-6" className="quest-content">
                                        <div className="price-chat">
                                            <img src="assets/images/offer-icon.jpg" />
                                            <p>No Item Activity Yet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="accordion" id="btm-accordion">
                            <div className="quest-section">
                                <a className="quest-title" href="#accordion-7">
                                    <img src="assets/images/chart.svg" />
                                    Price History
                                </a>
                                <div id="accordion-7" className="quest-content">
                                    <div className="price-txt" id="btm-price">
                                        <select>
                                            <option>All Time</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Stats