import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import a1 from '../../assets/a1.jpg';
import a2 from '../../assets/a2.jpg';
import nba from '../../assets/nba.jpg';
import google from '../../assets/google.png';
import infosys from '../../assets/infosys.jpg';
import microsoft from '../../assets/microsoft.png';
import sphereme from '../../assets/sphereme.png';
import techmahindra from '../../assets/techmahindra.avif';
import veetech from '../../assets/veetech.webp';
import student from '../../assets/student.jpg';
import './Landing.css';

const Landing = () => {
  const location = useLocation();
  const companies = [
    { logo: google, name: 'Google' },
    { logo: infosys, name: 'Infosys' },
    { logo: microsoft, name: 'Microsoft' },
    { logo: sphereme, name: 'Sphereme' },
    { logo: techmahindra, name: 'Tech Mahindra' },
    { logo: veetech, name: 'Vee Technologies' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.slide-in-left, .slide-in-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll to recruitment section handler
  useEffect(() => {
    if (location.hash === '#recruitment') {
      const element = document.getElementById('recruitment');
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  }, [location.hash]);

  return (
    <div className="landing-container-fluid">
      {/* Hero Carousel */}
      <div className="hero-carousel">
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-overlay"></div>
              <img src={a1} className="d-block w-100" alt="Campus facility" />
              <div className="carousel-caption">
                <h1>Shaping Future Tech Leaders</h1>
                <p>Where Innovation Meets Excellence</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-overlay"></div>
              <img src={a2} className="d-block w-100" alt="Student activity" />
              <div className="carousel-caption">
                <h1>Industry-Ready Graduates</h1>
                <p>Hands-on Learning Experience</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Accreditation Section */}
      <div className="accreditation-section">
        <div className="accreditation-content">
          <div className="accreditation-text slide-in-left">
            <h2>Accredited Excellence in Technical Education</h2>
            <p>
              Our institution maintains NBA accreditation, ensuring the highest standards 
              in technical education. We combine rigorous academics with practical 
              experience to prepare students for global challenges.
            </p>
            <Link to="/programs" className="cta-button">
              Explore Programs
            </Link>
          </div>
          <div className="accreditation-image slide-in-right">
            <img src={nba} alt="NBA Accreditation" className="img-fluid" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Recruiters Section with ID */}
      <div id="recruitment" className="recruiters-section">
        <div className="section-header">
          <h2>Our Esteemed Recruitment Partners</h2>
          <p>Connecting talent with global opportunities</p>
        </div>
        
        <div className="scroller">
          <div className="scroller-inner">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="company-item">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="recruiter-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers Section */}
        <div className="top-performers">
          <div className="performer-content">
            <div className="performer-image slide-in-left">
              <img src={student} alt="Top Performer" />
            </div>
            <div className="performer-details slide-in-right">
              <h3>Rahul Sharma</h3>
              <p className="lpa">44 LPA</p>
              <p className="company">Placed at: Google</p>
              <p className="description">
                Computer Science graduate with exceptional problem-solving skills.
                Developed innovative machine learning models during internships.
                Recipient of the Presidents Gold Medal for academic excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;