import React, { Component } from "react";
class Newletter extends Component {
  state = {};
  render() {
    return (
      <section className="newLetter">
        <div className="container text-center">
          <h2 className="mainText">NEWSLETTER</h2>
          <p className="newLetterText">
            Make sure that you’re always the first who receive our latest news
            and hottest promotions
          </p>
          <form>
            <div className="form-group newLetterCon">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Your Email Address"
                className="formInput"
              />
              <button type="submit" className="newLetterBtn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Newletter;
