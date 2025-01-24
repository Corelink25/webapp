// export default Home;
import React from "react";
import "../HomePage.css"
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
  return (
    <div className="homepage slider">
        <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active rounded">
            <img src="/images/curly.png" class="rounded mx-auto d-block rounded" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Our Store</h5>
              <p>Discover our range of products!</p>
              <button className="btn btn-primary" onClick={() => window.location.href='/products?category=groceries'}>Shop Now</button>
            </div>
          </div>
          <div className="carousel-item rounded">
            <img src="/images/lipstick.jpg" class="rounded mx-auto d-block" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Quality Products</h5>
              <p>Only the best for you.</p>
              <button className="btn btn-primary" onClick={() => window.location.href='/products?category=ladiesHairAndCosmetics'}>Shop Now</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/benny.png" class="rounded mx-auto d-block" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Great Deals</h5>
              <p>Shop and save big today!</p>
              <button className="btn btn-primary" onClick={() => window.location.href='/products?category=groceries'}>Shop Now</button>
            </div>
          </div>
          <div className="carousel-item rounded">
            <img src="/images/shirt.png" class="rounded mx-auto d-block" alt="Slide 4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Quality Products</h5>
              <p>Only the best for you.</p>
              <button className="btn btn-primary" onClick={() => window.location.href='/products?category=mensProducts'}>Shop Now</button>
            </div>
          </div>
          <div className="carousel-item rounded">
            <img src="/images/ssd-drives.png" class="rounded mx-auto d-block" alt="Slide 4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Quality Products</h5>
              <p>Only the best for you.</p>
              <button className="btn btn-primary" onClick={() => window.location.href='/products?category=ladiesHairAndCosmetics'}>Shop Now</button>
            </div>
          </div>
          <div className="carousel-item rounded">
            <img src="/images/straight-curl.png" class="rounded mx-auto d-block" alt="Slide 4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Quality Products</h5>
              <p>Only the best for you.</p>
              <button className="btn btn-primary" onClick={() => window.location.href='/products?category=ladiesHairAndCosmetics'}>Shop Now</button>
            </div>
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    );

}

export default Home;
