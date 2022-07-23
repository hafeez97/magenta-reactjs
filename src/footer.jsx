const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-txt">
                            <img src="assets/images/magenta-logo.png" />
                            <p>
                                Memories by MAGENTA is a digital marketplace for crypto collectibles
                                &amp; non-fungible tokens (NFTs). Buy &amp; Sell discover exclusive
                                digital.
                            </p>
                            <ul>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 offset-md-1">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer-links">
                                    <h2>Marketplace</h2>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Teams</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Refer a friend</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Updates</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">FAQs</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-links">
                                    <h2>Get Started</h2>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">Tutorials</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Resources</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Guides</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Examples</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Docs</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer-links">
                                    <h2>Resources</h2>
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0)">Stories</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Community</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Blog</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Careers</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Brand Assets</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-links">
                                    <h2>Stay Updated</h2>
                                    <p>Join our mailing list to stay</p>
                                    <div className="subscribe-form">
                                        <form>
                                            <input type="text" name="" placeholder="Enter Your Email" />
                                            <input type="submit" id="subscribe-btn" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="disclaimer">
                        <p>Memories by MAGENTA @2015 - 2022.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer