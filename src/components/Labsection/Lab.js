import React from 'react'

export default function Lab() {
  return (
    <>
    <meta charSet="utf-8" />
    <title>Lab</title>
    {/* google fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Ubuntu&display=swap"
      rel="stylesheet"
    />
    {/* bootstrap library */}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
      integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href="style.css" />
    {/* icon image */}
    <section id="title">
      <div className="container-fluid">
        {/* Nav Bar */}
        <nav className="navbar  navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="">
            IMPaired
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </nav>
        {/* Title */}
        <div className="row">
          <div className="col-lg-8">
            <div>
              <h1>Welcome, to Lab section !</h1>
              <h2>Here you can practice what you have learned 😊</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Pricing */}
    <section id="pricing">
      <h2>Choose your week</h2>
      <p>Let's start in 1 .. 2.... 3 .......</p>
      <div className="row">
        <div className="pricing-cards col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h3>Week 1</h3>
            </div>
            <div className="card-body">
              <p>5 Matches Per Day</p>
              <p>10 Messages Per Day</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-dark btn-lg btn-block" type="button">
                <a href="./questions/week1.html">start test</a>
              </button>
            </div>
          </div>
        </div>
        <div className="pricing-cards col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-header">
              <h3>Week 2</h3>
            </div>
            <div className="card-body">
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-dark btn-lg btn-block" type="button">
                <a href="./questions/week2.html"> start test</a>
              </button>
            </div>
          </div>
        </div>
        <div className="pricing-cards col-lg-4 col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Week 3</h3>
            </div>
            <div className="card-body">
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-dark btn-lg btn-block" type="button">
                <a href="./questions/week3.html"> start test</a>
              </button>
            </div>
          </div>
        </div>
        <div className="pricing-cards col-lg-4 col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Week 4</h3>
            </div>
            <div className="card-body">
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-dark btn-lg btn-block" type="button">
                <a href="./questions/week4.html"> start test</a>
              </button>
            </div>
          </div>
        </div>
        <div className="pricing-cards col-lg-4 col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Week 5</h3>
            </div>
            <div className="card-body">
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-dark btn-lg btn-block" type="button">
                <a href="./questions/week5.html"> start test</a>
              </button>
            </div>
          </div>
        </div>
        <div className="pricing-cards col-lg-4 col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Week 6</h3>
            </div>
            <div className="card-body">
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button className="btn btn-dark btn-lg btn-block" type="button">
                <a href="./questions/week6.html"> start test</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonials */}
    <section id="testimonials">
      <div id="testimonial-carousel" className="carousel slide" data-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h2>
              Everything we do is practice for something greater than where we
              currently are. Practice only makes for improvement.
            </h2>
            <em>Less Brown</em>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              Knowledge is of no value unless you put it into practice.
            </h2>
            <em>Anton Chekhov</em>
          </div>
          <div className="carousel-item">
            <h2 className="testimonial-text">
              The goal of practice is always to keep our beginner's mind.
            </h2>
            <em>Jack Kornfield</em>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#testimonial-carousel"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#testimonial-carousel"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </section>
    <div className="btns">
      <a className="blue-btn" href="#">
        Back to Learning
      </a>
    </div>
    {/* Footer */}
    <footer id="footer">
      <i className="footer-icons fa-brands fa-twitter" />
      <i className="footer-icons fa-brands fa-facebook-f" />
      <i className="footer-icons fa-brands fa-instagram" />
      <i className="footer-icons fa-solid fa-envelope" />
      <p className="footer-text">© IMPaired</p>
    </footer>
  </>
  
  )
}
