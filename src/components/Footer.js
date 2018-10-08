import React, { Component } from "react";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="robobullFooter">
        <div className="robobullFooterUpper">
          <div className="container text-center">
            <ul className="robobullFooterUl">
              <li className="robobullFooterItem">
                <a href="https://robobull.com/pages/about-robobull">About Us</a>
              </li>

              <li className="robobullFooterItem">
                <a href="https://robobull.com/pages/find-our-outlets">Exclusive Outlets</a>
              </li>

              <li className="robobullFooterItem">
                <a href="https://robobull.com/pages/warranty-program">Warranty Program</a>
              </li>

              <li className="robobullFooterItem">
                <a href="https://robobull.com/pages/installation-videos">Videos</a>
              </li>

              <li className="robobullFooterItem">
                <a href="https://robobull.com/pages/faq">FAQ's</a>
              </li>

              <li className="robobullFooterItem">
                <a href="https://robobull.com/pages/e-waste-management">E-Waste</a>
              </li>

              <li className="robobullFooterItem">
                <a href="https://robobull.com/pages/get-in-touch">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="robobullTollFree">
            <span className="robobullTollNum">
              Toll Free: <a href="tel:1800-103-9898">1800-103-9898</a>
            </span>
            <span className="robobullTimeToll">Mon to Sat 10AM to 6PM IST</span>
          </div>
        </div>

        <div className="copyright footer-bottom">
          <div className="robobullFooterBottom">
            <div className="robobullCopyright">
              © 2018 <a href="https://robobull.com/">Robobull</a>. All rights
              reserved
            </div>

            <div className="container text-center">
              <ul className="robobullFooterUl">
                <li className="robobullFooterItem">
                  <a href="">Payment, Shipping &amp; Returns</a>
                </li>

                <li className="robobullFooterItem">
                  <a href="">Terms Of Use</a>
                </li>

                <li className="robobullFooterItem">
                  <a href="">Privacy &amp; Policy</a>
                </li>

                <li className="robobullFooterItem">
                  <a href="">Careers</a>
                </li>

                <li className="robobullFooterItem">
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
