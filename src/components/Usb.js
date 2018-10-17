import React, { Component } from "react";
class Usb extends Component {
  state = {};
  render() {
    return (
      <section className="service">
        <div className="container text-center">
          <ul>
            <li className="col-lg-4 col-sm-4">
              <figure>
                <img
                  className="img-responsive"
                  src="//cdn.shopify.com/s/files/1/2334/2135/files/safe_6ea92ab7-b5ad-411a-aca9-9829ebb8c228_100x.png?v=1518520590"
                  alt=""
                />
                <figcaption>
                  <strong>SAFE & SECURE</strong>
                  <p>Maximum Encrypted SSL Secure Checkout</p>
                </figcaption>
              </figure>
            </li>
            <li className="col-lg-4 col-sm-4">
              <figure>
                <img
                  className="img-responsive"
                  src="//cdn.shopify.com/s/files/1/2334/2135/files/gurantee_100x.png?v=1518520869"
                  alt=""
                />
                <figcaption>
                  <strong>HIGH QUALITY GUARANTEE</strong>
                  <p>With High Quality Materials</p>
                </figcaption>
              </figure>
            </li>
            <li className="col-lg-4 col-sm-4">
              <figure>
                <img
                  className="img-responsive"
                  src="//cdn.shopify.com/s/files/1/2334/2135/files/return_100x.png?v=1518520944"
                  alt=""
                />
                <figcaption>
                  <strong>NO HASSLE RETURN</strong>
                  <p>No Questions Asked Return Policy</p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Usb;
