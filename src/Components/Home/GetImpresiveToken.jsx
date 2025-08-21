import React, { useContext } from "react";
import {ImpC } from "../../Myontext";

export default function GetImpresiveToken() {
  const { rate } = useContext(ImpC);
  return (
    <>
      <section
        className="section h-chatbot"
        data-background="assets/images/h-chatbot-bg.png"
      >
        <div className="container">
          <div className="row gaper align-items-center">
            <div className="col-12 col-lg-5">
              <div className="section__content">
                <div className="s-thumb">
                  <img src="assets/images/wheel.png" alt="Image" />
                </div>
                <h2 className="title title-animation">
                  Giveaway Impresive Token
                </h2>
                <p>
                  We're thrilled to announce a special giveaway of Impresive
                  Tokens to our amazing community! As a thank you for your
                  ongoing support and enthusiasm
                </p>
                <h4 className="my-2 text-white">How to Participate :</h4>
                <ul>
                  <li className="m-1">
                    Follow us: Make sure you're following our official account
                    to stay updated on the latest news and announcements.
                    <ul className="m-1">
                      <li className="m-1">1.Twitter follow</li>
                      <li className="m-1">2.Twitter pinned image with photo retweet</li>
                      <li className="m-1">3. Instagram page follow </li>
                      <li className="m-1">4. Telegram join </li>
                      <li className="m-1">5. YouTube channel follow</li>
                    </ul>
                  </li>
                  <li className="m-1">
                    Like & Retweet: Like and retweet our giveaway post to spread
                    the word and increase your chances of winning!
                  </li>
                  <li className="m-1">
                    Tag Your Friends: Tag [X] friends in the comments of the
                    giveaway post who would love to participate in this exciting
                    opportunity.
                  </li>
                </ul>
                <p>
                  Fill out the Form: Complete the participation form linked in
                  our bio to officially enter the giveaway.
                </p>
                <div className="section__content-cta">
                  <a className="btn btn--primary">
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="h-chatbot__thumb text-start text-lg-end reveal-img parallax-img">
                <img src="assets/images/giveway.png" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
