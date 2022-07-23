const Accounts = () => {
    return(
        <section id="account-inner">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="upper-account-box">
                        <div className="account-pic">
                            <img src="assets/images/popular-03.png" className="img-fluid" />
                        </div>
                        <p>User Name</p>
                        <div className="account-eth">
                            <img src="assets/images/hedera-icon.png" />
                            <span>8nmtkpage…</span>
                        </div>
                    </div>
                </div>
                <ul className="tabs-custom-nav">
                    <li>
                        <a href="#collected" className="current">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16.553"
                                height="16.553"
                                viewBox="0 0 16.553 16.553"
                            >
                                <path
                                    id="Path_16869"
                                    data-name="Path 16869"
                                    d="M20.553,15.587V5.655A1.655,1.655,0,0,0,18.9,4H8.966A1.655,1.655,0,0,0,7.311,5.655v9.932a1.655,1.655,0,0,0,1.655,1.655H18.9A1.655,1.655,0,0,0,20.553,15.587Zm-9.1-3.311,1.68,2.243,2.458-3.071L18.9,15.587H8.966ZM4,7.311V18.9a1.655,1.655,0,0,0,1.655,1.655H17.243V18.9H5.655V7.311Z"
                                    transform="translate(-4 -4)"
                                    fill="#e3e0db"
                                />
                            </svg>
                            Collected
                        </a>
                    </li>
                    <li>
                        <a href="#created">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                            >
                                <path
                                    id="create"
                                    d="M0,0V16H16V0ZM12,9H9v3H7V9H4V7H7V4H9V7h3Z"
                                    fill="#e3e0db"
                                />
                            </svg>
                            Created
                        </a>
                    </li>
                    <li>
                        <a href="#offers">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16.16"
                                height="18.557"
                                viewBox="0 0 16.16 18.557"
                            >
                                <g id="offer" transform="translate(-4.594 -3.305)">
                                    <path
                                        id="Path_16857"
                                        data-name="Path 16857"
                                        d="M10,19.229l2.29,3.967a.442.442,0,0,0,.766,0l2.29-3.967L20.2,10.822l.493-.854a.442.442,0,0,0-.383-.663H5.037a.442.442,0,0,0-.383.663l.493.854Z"
                                        transform="translate(0 -1.555)"
                                        fill="#e3e0db"
                                    />
                                    <path
                                        id="Path_16858"
                                        data-name="Path 16858"
                                        d="M17.458,9.3H9.149L7.025,12.983l3.606,6.245.69,1.2h3.965l.69-1.2,3.606-6.245L17.458,9.3Z"
                                        transform="translate(-0.63 -1.555)"
                                        fill="#e3e0db"
                                    />
                                    <path
                                        id="Path_16859"
                                        data-name="Path 16859"
                                        d="M15.347,7.492l-2.29-3.967a.442.442,0,0,0-.766,0L10,7.492,5.147,15.9l-.493.854a.442.442,0,0,0,.383.663H20.31a.442.442,0,0,0,.383-.663L20.2,15.9,15.347,7.492Z"
                                        transform="translate(0)"
                                        fill="#e3e0db"
                                    />
                                    <path
                                        id="Path_16860"
                                        data-name="Path 16860"
                                        d="M20.693,16.753,20.2,15.9,15.347,7.492l-2.29-3.967a.442.442,0,0,0-.766,0l-.671,1.162.764,1.323L16.188,12.6a2.223,2.223,0,0,1-1.925,3.334H5.126l-.473.819a.442.442,0,0,0,.383.663H20.31a.443.443,0,0,0,.383-.665Z"
                                        transform="translate(0 0)"
                                        fill="#e3e0db"
                                    />
                                </g>
                            </svg>
                            Offers
                        </a>
                    </li>
                    <li>
                        <a href="#listings">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16.51"
                                height="16.51"
                                viewBox="0 0 16.51 16.51"
                            >
                                <path
                                    id="Layer_2"
                                    data-name="Layer 2"
                                    d="M0,2.58V8.255a1.032,1.032,0,0,0,.3.73l7.223,7.223a1.032,1.032,0,0,0,1.459,0l7.223-7.223a1.032,1.032,0,0,0,0-1.459L8.985.3a1.032,1.032,0,0,0-.73-.3H2.58A2.583,2.583,0,0,0,0,2.58Zm3.612,0A1.032,1.032,0,1,1,2.58,1.548,1.032,1.032,0,0,1,3.612,2.58Z"
                                    transform="translate(-0.001)"
                                    fill="#e3e0db"
                                />
                            </svg>
                            Listings
                        </a>
                    </li>
                </ul>
                <div className="tabs-custom general">
                    <div id="collected" className="selected tab-content-panel">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="tab-inpt">
                                    <input type="text" placeholder="Search" />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="recent-box">
                                    <select>
                                        <option>Recently Received</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <ul className="account-link">
                                    <li id="listing-view">
                                        <a href="javascript:;">
                                            <img src="assets/images/analytics.svg" />
                                        </a>
                                    </li>
                                    <li id="box-view">
                                        <a href="javascript:;">
                                            <img src="assets/images/box-view.svg" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row ct-account-collection">
                            <div className="col-md-4">
                                <div className="autction-box">
                                    <div className="autction-pic">
                                        <img src="assets/images/popular-01.png" className="img-fluid" />
                                    </div>
                                    <div className="row auntion-head">
                                        <div className="col-lg-6">
                                            <h3>Super Man</h3>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>Art</span>
                                        </div>
                                    </div>
                                    <div className="price-auction">
                                        <h6>Price</h6>
                                        <h4>
                                            3.50 HBAR<span>(USD 15.50)</span>
                                        </h4>
                                    </div>
                                    <div className="item-ethem">
                                        <img src="assets/images/hedera-icon.png" />
                                        <p>Hedera</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="autction-box">
                                    <div className="autction-pic">
                                        <img src="assets/images/popular-07.png" className="img-fluid" />
                                    </div>
                                    <div className="row auntion-head">
                                        <div className="col-lg-6">
                                            <h3>Super Man</h3>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>Art</span>
                                        </div>
                                    </div>
                                    <div className="price-auction">
                                        <h6>Price</h6>
                                        <h4>
                                            3.50 HBAR<span>(USD 15.50)</span>
                                        </h4>
                                    </div>
                                    <div className="item-ethem">
                                        <img src="assets/images/hedera-icon.png" />
                                        <p>Hedera</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="autction-box">
                                    <div className="autction-pic">
                                        <img src="assets/images/popular-03.png" className="img-fluid" />
                                    </div>
                                    <div className="row auntion-head">
                                        <div className="col-lg-6">
                                            <h3>Super Man</h3>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>Art</span>
                                        </div>
                                    </div>
                                    <div className="price-auction">
                                        <h6>Price</h6>
                                        <h4>
                                            3.50 HBAR<span>(USD 15.50)</span>
                                        </h4>
                                    </div>
                                    <div className="item-ethem">
                                        <img src="assets/images/hedera-icon.png" />
                                        <p>Hedera</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="autction-box">
                                    <div className="autction-pic">
                                        <img src="assets/images/popular-01.png" className="img-fluid" />
                                    </div>
                                    <div className="row auntion-head">
                                        <div className="col-lg-6">
                                            <h3>Super Man</h3>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>Art</span>
                                        </div>
                                    </div>
                                    <div className="price-auction">
                                        <h6>Price</h6>
                                        <h4>
                                            3.50 HBAR<span>(USD 15.50)</span>
                                        </h4>
                                    </div>
                                    <div className="item-ethem">
                                        <img src="assets/images/hedera-icon.png" />
                                        <p>Hedera</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="autction-box">
                                    <div className="autction-pic">
                                        <img src="assets/images/popular-07.png" className="img-fluid" />
                                    </div>
                                    <div className="row auntion-head">
                                        <div className="col-lg-6">
                                            <h3>Super Man</h3>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>Art</span>
                                        </div>
                                    </div>
                                    <div className="price-auction">
                                        <h6>Price</h6>
                                        <h4>
                                            3.50 HBAR<span>(USD 15.50)</span>
                                        </h4>
                                    </div>
                                    <div className="item-ethem">
                                        <img src="assets/images/hedera-icon.png" />
                                        <p>Hedera</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="autction-box">
                                    <div className="autction-pic">
                                        <img src="assets/images/popular-03.png" className="img-fluid" />
                                    </div>
                                    <div className="row auntion-head">
                                        <div className="col-lg-6">
                                            <h3>Super Man</h3>
                                        </div>
                                        <div className="col-lg-6">
                                            <span>Art</span>
                                        </div>
                                    </div>
                                    <div className="price-auction">
                                        <h6>Price</h6>
                                        <h4>
                                            3.50 HBAR<span>(USD 15.50)</span>
                                        </h4>
                                    </div>
                                    <div className="item-ethem">
                                        <img src="assets/images/hedera-icon.png" />
                                        <p>Hedera</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="created" className="tab-content-panel">
                        <h2 style={{ color: "#fff" }}>Created</h2>
                    </div>
                    <div id="offers" className="tab-content-panel">
                        <h2 style={{ color: "#fff" }}>Offers</h2>
                    </div>
                    <div id="listings" className="tab-content-panel">
                        <h2 style={{ color: "#fff" }}>Listings</h2>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Accounts