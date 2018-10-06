import React, { Component } from "react";
class Productdiscription extends Component {
  state = {};

  render() {
    let style={
      width: "100%"
  
    }
    return (
      <section>
    <div className="row">

    <div className="col-sm-12 dummydesign"> 
    <img style={style} alt="" src={this.props.cimages} className="img-responsive brdr"/> 

    </div>
     </div>
        <div className="robobullGuaranteesOne">
          <div className="container text-left">
            <div className="col-lg-5">
              <img
                src="/texture/quality.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <h2 className="discriptionTittle red">Premium Materials</h2>
              <p className="discriptionText">
                The iPhone XR is here - an affordable iPhone with a premium
                glass-back design. You know what that means, right? Fingerprints
                galore and a high probability it'll slip out of your hands. This
                is where dbrand iPhone XR skins come in. What better way to
                resolve both issues than with a dbrand iPhone XR skin? As the
                world leader in smartphone skins, we of course partnered with
                the world leader in skin material - 3M. We're the only company
                to use authentic 3M materials across our entire portfolio of
                iPhone XR skins. What does that mean for you? A guarantee that,
                when you're ready to swap out your iPhone XR wrap with another
                one, it's guaranteed to come off without any adhesive residue or
                damage to your device. Thanks to our massive buying power with
                3M, dbrand is able to bring you industry-exclusives like Black
                Camo iPhone XR skins and the super-grippy Black Dragon. iPhone
                XR skins from dbrand: guaranteed to protect your device from
                scratches and make fingerprints a thing of the past.
              </p>
            </div>
          </div>
        </div>
        <div className="robobullGuaranteesTwo">
          <div className="container text-left">
            <div className="col-lg-7">
              <h2 className="discriptionTittle green">Unrivaled Precision</h2>
              <p className="discriptionText">
                At dbrand, precision isn't just a marketing buzzword. It's the
                only way we know. When it comes to the fit on dbrand iPhone XR
                skins, perfection is the only measure of success. We expect
                nothing less and neither should you. If you're searching for the
                best iPhone XR skin on the planet, look no further. Our iPhone
                XR skins go through a painstakingly meticulous prototyping
                process - over a thousand iterations to ensure that your iPhone
                XR wrap is absolutely flawless. It's this absolute attention to
                detail which has earned us the reputation for the most precise
                fit on earth™. If you're looking to protect your iPhone XR from
                fingerprints and add some grip, all while adding zero bulk,
                you've come to the right place. It literally isn't possible to
                find a higher quality, more precise iPhone XR wrap than the one
                you'll find here at dbrand. Stop reading and give us your money.
              </p>
            </div>
            <div className="col-lg-5">
              <img
                src="/texture/precision.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="robobullGuaranteesThree">
          <div className="container text-left">
            <div className="col-lg-5">
              <img
                src="/texture/variety.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-7">
              <h2 className="discriptionTittle blue">
                Unlimited Customization
              </h2>
              <p className="discriptionText">
                Common sense would tell you that, when you buy something, you
                should be able to see exactly what it looks like before forking
                over your hard-earned money. Unfortunately, the iPhone XR skin
                game is riddled with poorly photoshopped representations of the
                product. Not at dbrand. Since 2011, we've been leading the pack
                with our one-of-a-kind skin customization interface. A product
                preview where you can see exactly what your iPhone XR skin will
                look like before making the purchase. Go ahead - scroll up and
                check it out. From Matte Black to Marble, Black Camo to Carbon
                Fiber, even Mahogany and Bamboo - we've got an iPhone XR skin
                that's sure to lighten up your wallet. Skeptical? We don't blame
                you - that's why we take world-class product photography to give
                you an actual real-life look at the iPhone XR skins shown on our
                customizer. As expected, what you see is what you get: legendary
                precision and true textured materials. Customizing your iPhone
                XR has never been this fun - or easy. Oh, and in case you were
                wondering... yes - every purchase comes with both a full body
                and glass-coverage iPhone XR skin at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Productdiscription;
