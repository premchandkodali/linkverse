import React from "react";
import a1 from '../../assets/a1.jpg';
import a2 from '../../assets/a2.jpg';
import a3 from '../../assets/a3.jpg';
import a4 from '../../assets/a4.jpg';
import placements from '../../assets/placements.jpg';
import './Landing.css';

const Landing = () => {
  return (
    <div className="mt-5">
      {/* Card Container */}
      <div className="card-container">
        {/* First Card Carousel */}
        <div id="carouselCard1" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={a1} className="d-block w-100" alt="Card Image 1" />
    </div>
    <div className="carousel-item">
      <img src={a2} className="d-block w-100" alt="Card Image 2" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselCard1"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselCard1"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        {/* Second Card Carousel */}
        <div id="carouselCard2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={a3} className="d-block w-100" alt="Card Image 1" />
            </div>
            <div className="carousel-item">
              <img src={a4} className="d-block w-100" alt="Card Image 2" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselCard2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselCard2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center">
        {/* Achievements Card */}
        <div className="card mb-4 shadow-sm" style={{ width: "100%", maxWidth: "1500px", padding: 0 }}>
          <div className="card-body text-center" style={{ padding: 0 }}>
            <h5 className="card-title text-white">Achievements</h5>
            <p className="card-text">
              Ranked top 10 in national coding competitions. Awarded best innovative project in 2024. Recognized as a top performer in research initiatives.
            </p>
            <div className="image-container">
              <img src={placements} alt="Placements" style={{ width: "30%", height: "auto", borderRadius: "10px" }} />
              <img src={placements} alt="Placements" style={{ width: "30%", height: "auto", borderRadius: "10px" }} />
              <img src={placements} alt="Placements" style={{ width: "30%", height: "auto", borderRadius: "10px" }} />
            </div>
            <br />
          </div>
        </div>

        {/* Internships Card */}
        <div className="card mb-4 shadow-sm" style={{ width: "100%", maxWidth: "1500px", padding: 0 }}>
          <div className="card-body text-center" style={{ padding: 0 }}>
            <h5 className="card-title text-white">Internships</h5>
            <p className="card-text">
              Interned with top MNCs like Google and Microsoft. Hands-on experience in AI, web development, and app design. Built impactful solutions for real-world problems.
            </p>
            <div className="image-container">
              <img src={placements} alt="Placements" style={{ width: "30%", height: "auto", borderRadius: "10px" }} />
              <img src={placements} alt="Placements" style={{ width: "30%", height: "auto", borderRadius: "10px" }} />
              <img src={placements} alt="Placements" style={{ width: "30%", height: "auto", borderRadius: "10px" }} />
            </div>
            <br />
          </div>
        </div>

        {/* Placements Card */}
        <div className="card mb-4 shadow-sm" style={{ width: "100%", maxWidth: "1500px", padding: 0 }}>
          <div className="card-body text-center" style={{ padding: 0 }}>
            <h5 className="card-title text-white">Placements</h5>
            <p className="card-text">
              95% placement rate with top tech companies. Highest package offered: ₹50 LPA. Average package: ₹12 LPA.
            </p>
            <div className="image-container">
              <img src={placements} alt="Placements" style={{ width: "30%", height: "auto", borderRadius: "10px" }} />
              <img src={placements} alt="Placements" style={{ width: "30%", height: "auto", borderRadius: "10px" }} />
              <img src={placements} alt="Placements" style={{ width: "30%", height: "auto", borderRadius: "10px" }} />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
