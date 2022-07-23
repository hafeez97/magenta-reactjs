const Create = () => {
    return (
        <section id="create-collections-inner">
            <div className="container">
                <div className="row">
                    <h2 className="create-collections-head">Create A Collection</h2>
                    <p className="create-collections-para">
                        Keep your information up-to-date at all times. We do not share your
                        information with any third party.
                    </p>
                    <div className="ct-form">
                        <div className="ct-file">
                            <h6>Logo Image *</h6>
                            <p>Update logo image, recommended size 250*250</p>
                            <div className="upload-btn-wrapper">
                                <div className="ct-img">
                                    <img src="assets/images/upload-file.png" />
                                </div>
                                <input type="file" name="myfile" />
                            </div>
                        </div>
                        <div className="ct-file">
                            <h6>Feature Image/banner</h6>
                            <p>Update feature image, recommended size 600*400</p>
                            <div className="upload-btn-wrapper" id="upload2">
                                <div className="ct-img">
                                    <img src="assets/images/upload-file.png" />
                                </div>
                                <input type="file" name="myfile" />
                            </div>
                        </div>
                        <div className="ct-file">
                            <h6>Feature Image/banner</h6>
                            <p>Update banner image, recommended size 1200*400</p>
                            <div className="upload-btn-wrapper" id="upload3">
                                <div className="ct-img">
                                    <img src="assets/images/upload-file.png" />
                                </div>
                                <input type="file" name="myfile" />
                            </div>
                        </div>
                        <div className="ct-inner">
                            <label>Name *</label>
                            <input type="text" name="" placeholder="Hitman" />
                        </div>
                        <div className="ct-inner">
                            <label>URL</label>
                            <p>Customise your url on memories.</p>
                            <input
                                type="text"
                                name=""
                                placeholder="https://memories.voyr.me/home"
                            />
                        </div>
                        <div className="ct-inner">
                            <label>Description</label>
                            <p>Your description goes here</p>
                            <textarea placeholder="Type description" defaultValue={""} />
                        </div>
                        <div className="ct-inner">
                            <label>Category</label>
                            <p>Please add category &amp; social links</p>
                            <button>Add Category</button>
                        </div>
                        <div className="ct-inner02">
                            <label>Links</label>
                            <div className="ct-inpt-fld">
                                <input
                                    type="text"
                                    name=""
                                    placeholder="https://memories.voyr.me/home"
                                />
                            </div>
                            <div className="ct-inpt-fld02">
                                <input
                                    type="text"
                                    name=""
                                    placeholder="https://memories.voyr.me/home"
                                />
                            </div>
                        </div>
                        <div className="ct-inner">
                            <label>Creator Earnings</label>
                            <p>Please add creator earnings</p>
                            <input type="text" name="" placeholder="e.g : 2.0" />
                        </div>
                        <div className="ct-inner">
                            <div className="ct-slct-fld02">
                                <label>Blockchain</label>
                                <p>Select blockchain you would like</p>
                                <select className="vodiapicker">
                                    <option
                                        value="eth"
                                        className="test"
                                        data-thumbnail="assets/images/ethreum.png"
                                    >
                                        Ethereum
                                    </option>
                                    <option value="weth" data-thumbnail="assets/images/eth-icon.png">
                                        Wethereum
                                    </option>
                                </select>
                                <div className="lang-select">
                                    <button className="btn-select" value="" />
                                    <div className="b">
                                        <ul id="a" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ct-inner03">
                            <label>Payment Token</label>
                            <p>The token can be used for sale &amp; buy</p>
                            <div className="ct-btn-inner">
                                <ul>
                                    <li>
                                        <a href="javascript:;" id="eth" >
                                            <img src="assets/images/hedera-icon.png" />
                                            <div style={{marginLeft:"10px"}} >
                                                <span>HBAR</span>
                                                <p>Hedera</p>
                                            </div>
                                        </a>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <a href="javascript:;" id="weth">*/}
                                    {/*        <img src="assets/images/weth-icon.png" />*/}
                                    {/*        <div>*/}
                                    {/*            <span>WETH</span>*/}
                                    {/*            <p>Ethereum</p>*/}
                                    {/*        </div>*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                            <div className="token-slct">
                                <select>
                                    <option>Token</option>
                                </select>
                            </div>
                        </div>
                        <div className="ct-inner04">
                            <label>Explicit &amp; Sensitive Content</label>
                            <div className="inner-toggle">
                                <div className="inner-tog">
                                    <p>The sub title goes here</p>
                                </div>
                                <div className="ct-toggle">
                                    <label className="switch">
                                        <input type="checkbox" defaultChecked="" />
                                        <span className="slider round" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form-btn">
                            <ul>
                                <li>
                                    <button>Cancel</button>
                                </li>
                                <li>
                                    <button>Save</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Create