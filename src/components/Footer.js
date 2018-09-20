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
                <a href="">about us</a>
              </li>

              <li className="robobullFooterItem">
                <a href="">exclusive outlets</a>
              </li>

              <li className="robobullFooterItem">
                <a href="">warranty program</a>
              </li>

              <li className="robobullFooterItem">
                <a href="">videos</a>
              </li>

              <li className="robobullFooterItem">
                <a href="">FAQ's</a>
              </li>

              <li className="robobullFooterItem">
                <a href="">E-Waste</a>
              </li>

              <li className="robobullFooterItem">
                <a href="">contact us</a>
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
                  <a href="">payment, shipping &amp; returns</a>
                </li>

                <li className="robobullFooterItem">
                  <a href="">terms of use</a>
                </li>

                <li className="robobullFooterItem">
                  <a href="">privacy &amp; policy</a>
                </li>

                <li className="robobullFooterItem">
                  <a href="">careers</a>
                </li>

                <li className="robobullFooterItem">
                  <a href="">blog</a>
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
