/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck
/* eslint-disable */
// import useAuth from 'frontend/hooks/useAuth';
import useAuth from 'frontend/hooks/useAuth';
import $ from 'jquery';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import blacklogo from '../../material/black.png';
import homeImage from '../../material/home-miami.jpg';
import Bgvideo from '../../material/home2.mp4';
import '../../material/homepage.css';
import { isIPhone, isMetamask } from '../../utils';

const Home = () => {
  const { user } = useAuth();
  console.log(user);
  const navigate = useNavigate();

  React.useEffect(() => {
    const apiToken = localStorage.getItem('apiToken');
    if (apiToken) {
      navigate('/lounge/home');
    }
  }, []);
  const back_to_top = $('#back_to_top');

  $(window).scroll(() => {
    const scroll = $(window).scrollTop();
    if (scroll && scroll > 300) {
      $('.header_home').css('background', 'rgba(26, 24, 22, 0.85)');
      back_to_top.addClass('show');
    } else {
      $('.header_home').css('background', 'transparent');
      back_to_top.removeClass('show');
    }
  });

  back_to_top.on('click', (e: any) => {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  // const select = (el: string, all = false) => {
  //   el = el.trim();
  //   if (all) {
  //     return [...document.querySelectorAll(el)];
  //   }
  //   return document.querySelector(el);
  // };

  // const mobile_nav = () => {
  //   select('#navbar').classList.toggle('navbar-mobile');
  //   $('#navbar_icon').classList.toggle('bi-list');
  //   $('#navbar_icon').classList.toggle('bi-x');
  // };

  // const logout = () => {
  //   props.logout();
  //   // sessionStorage.removeItem("logged");
  //   window.location.reload();
  // };

  // const EditProfile = () => {
  //   navigate('/profile');
  // };

  return (
    <>
      <div>
        {/* ======= Hero Section ======= */}
        <section id="hero" className="card-video-banner">
          <div className="hero-container">
            <div className="bg-video-wrap">
              {isMetamask || !!isIPhone() ? (
                <img src={homeImage} alt="home" style={{ height: '100%' }} />
              ) : (
                <video src={Bgvideo} loop muted autoPlay />
              )}
              <div className="overlay" />
              <div className="caption-video">
                <h1>Dint Club</h1>{' '}
                <p style={{ textAlign: 'center' }}>
                  Revolutionizing Creator and Fan Connections Through NFTs and Membership Tokens
                </p>
                <Link to="/auth/signup">
                  <button type="button" className="submit-form btn btn-primary">
                    Join Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
        <main id="main" style={{ padding: 0 }}>
          <section className="email-col animate__animated animate__fadeInLeft">
            <div className="container position-relative">
              <section className="title">
                <h2 style={{ textAlign: 'center' }}>
                  {' '}
                  <strong>
                    <br />
                    <br />
                    Ownership of a Dint Clubber Key Collection NFT grants you lifetime access to
                    Dint Music Festival as well as member-only benefits. Each key can be bought,
                    sold, or traded.
                  </strong>
                </h2>
                <a href="https://i7kxtaeuba6.typeform.com/to/nS1Y8Btu">
                  <button type="button" className="submit-form btn btn-primary">
                    Apply To Join Our Whitelist Now!
                  </button>
                </a>
              </section>
            </div>
          </section>
        </main>
        {/* End #main */}

        {/* The Modal */}
        <div className="modal animate__animated animate__fadeInUp" id="myModal">
          <div className="modal-dialog model-waitlist">
            <div className="modal-content">
              <img src={blacklogo} width="40" height="40" className="" alt="" />
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">At last, a debit card worth waiting for!</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" />
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <p>
                  The Dint Card lets you spend crypto, fiat, gold and more at nearly 50 million
                  merchants worldwide. Join our waitlist today.
                </p>
                <div className="form-group">
                  <form
                    action="https://dint.us14.list-manage.com/subscribe/post?u=65d603d3453722100d5218f87&id=59936c8234"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll">
                      <div className="indicates-required">
                        <span className="asterisk" />
                      </div>
                      <div className="mc-field-group">
                        <label htmlFor="mce-EMAIL">
                          <span className="asterisk" />
                        </label>
                        <input
                          type="email"
                          //   defaultValue
                          name="EMAIL"
                          className="form-control email-for-model"
                          id="mce-EMAIL"
                        />
                      </div>
                      <div id="mce-responses" className="clear foot">
                        <div
                          className="response"
                          id="mce-error-response"
                          style={{ display: 'none' }}
                        />
                        <div
                          className="response"
                          id="mce-success-response"
                          style={{ display: 'none' }}
                        />
                      </div>{' '}
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                        <input
                          type="text"
                          name="b_65d603d3453722100d5218f87_59936c8234"
                          tabIndex={-1}
                          //   defaultValue
                        />
                      </div>
                      <div className="optionalParent">
                        <div className="clear footd">
                          <button type="submit" className="btn btn-primary join-now">
                            Join Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <p>
                  By joining, you accept our <Link to="/">Terms of Use</Link> and{' '}
                  <Link to="/">Privacy Policy</Link>
                </p>
              </div>
              {/* End mc_embed_signup */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;

//  {/* ======= Footer ======= */}
//  <footer id="footer" className="animate__animated animate__fadeInUp">
//  <div className="container">
//    <div className="row">
//      <div className="col-md-3">
//        <a href="https://dint.com">
//          <img src="images/logo.png" alt="logo" width="40" height="40" />
//        </a>
//        <p />
//      </div>
//      <div className="col-md-3">&nbsp;</div>
//      <div className="col-md-3">&nbsp;</div>
//      <div className="col-md-3">&nbsp;</div>
//    </div>
//  </div>

//  <div id="back_to_top" />
// </footer>
// {/* End Footer */}
// <div className="social-links animate__animated animate__fadeInUp">
//  <a
//    href="https://discord.gg/zk97Vf4YyX"
//    className="discord"
//    target="_blank"
//    rel="noreferrer"
//  >
//    <i className="bi bi-discord" />
//  </a>
//  <a href="https://twitter.com/dint" className="twitter" target="_blank" rel="noreferrer">
//    <i className="bi bi-twitter" />
//  </a>
//  <a
//    href="https://www.instagram.com/dint"
//    className="instagram"
//    target="_blank"
//    rel="noreferrer"
//  >
//    <i className="bi bi-instagram" />
//  </a>
//  <a
//    href="https://www.youtube.com/channel/UCGXYFkXyYYIZIjOyjDQ6S7w"
//    className="youtube"
//    target="_blank"
//    rel="noreferrer"
//  >
//    <i className="bi bi-youtube" />
//  </a>
//  <div className="copyright">Copyright ©2022 All rights reserved | dint.com</div>
// </div>
// <div className="back-to-top d-flex align-items-center justify-content-center">
//  <i className="bi bi-arrow-up-short" />
// </div>
