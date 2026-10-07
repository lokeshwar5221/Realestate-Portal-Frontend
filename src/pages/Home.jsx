import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    api
      .get("/properties")
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-small-text">
            WELCOME TO ESTATEHUB
          </span>

          <h1>
            Find a place
            <br />
            you can call <span>home.</span>
          </h1>

          <p>
            Discover beautiful properties, compare your options,
            and find the perfect place for your next chapter.
          </p>

          <div className="hero-buttons">
            <Link to="/properties" className="hero-primary-btn">
              Explore Properties →
            </Link>

            <Link to="/properties" className="hero-secondary-btn">
              View Listings
            </Link>
          </div>
        </div>
      </section>


      {/* ================= SEARCH BOX ================= */}
      <section className="home-search-wrapper">
        <div className="home-search">

          <div className="search-item">
            <span className="search-icon">📍</span>
            <div>
              <small>LOCATION</small>
              <strong>Find properties near you</strong>
            </div>
          </div>

          <div className="search-item">
            <span className="search-icon">🏠</span>
            <div>
              <small>PROPERTY TYPE</small>
              <strong>Apartment, Villa, House...</strong>
            </div>
          </div>

          <div className="search-item">
            <span className="search-icon">💰</span>
            <div>
              <small>PRICE RANGE</small>
              <strong>Choose your budget</strong>
            </div>
          </div>

          <Link to="/properties" className="search-button">
            Search
          </Link>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="home-stats">

        <div className="stat-box">
          <strong>{properties.length}+</strong>
          <span>Properties</span>
        </div>

        <div className="stat-box">
          <strong>4+</strong>
          <span>Property Types</span>
        </div>

        <div className="stat-box">
          <strong>100%</strong>
          <span>Easy to Use</span>
        </div>

        <div className="stat-box">
          <strong>24/7</strong>
          <span>Access</span>
        </div>

      </section>


      {/* ================= FEATURED PROPERTIES ================= */}
      <section className="featured-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              EXPLORE OUR LISTINGS
            </span>

            <h2>Featured Properties</h2>

            <p>
              Discover some of the best properties available
              on EstateHub.
            </p>
          </div>

          <Link to="/properties" className="view-all-link">
            View All Properties →
          </Link>

        </div>


        <div className="home-property-grid">

          {featuredProperties.length > 0 ? (
            featuredProperties.map((property) => (

              <div className="home-property-card" key={property.id}>

                {/* Property image */}
                <div className="home-property-image">

                  {property.image ? (
                    <img
                      src={property.image}
                      alt={property.title}
                    />
                  ) : (
                    <div className="property-image-placeholder">
                      🏠
                    </div>
                  )}

                  <span className="property-badge">
                    {property.purpose || "For Sale"}
                  </span>

                </div>


                {/* Property information */}
                <div className="home-property-content">

                  <h3>{property.title}</h3>

                  <p className="home-location">
                    📍 {property.location}
                  </p>

                  <div className="home-property-info">

                    <span>
                      🛏️ {property.bedrooms || 0} Beds
                    </span>

                    <span>
                      🏠 {property.type}
                    </span>

                  </div>

                  <div className="home-card-bottom">

                    <strong>
                      ₹{Number(property.price).toLocaleString("en-IN")}
                    </strong>

                    <Link
                      to={`/properties/${property.id}`}
                      className="home-view-btn"
                    >
                      View →
                    </Link>

                  </div>

                </div>

              </div>

            ))
          ) : (
            <div className="home-no-properties">
              <h3>No properties available yet</h3>
              <p>
                Add properties to your portal to display them here.
              </p>

              <Link to="/properties" className="hero-primary-btn">
                View Properties
              </Link>
            </div>
          )}

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-section">

        <div className="why-header">
          <span className="section-label">
            WHY ESTATEHUB?
          </span>

          <h2>
            Everything you need to find
            <br />
            your next home.
          </h2>
        </div>


        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">🔎</div>

            <h3>Easy Search</h3>

            <p>
              Quickly search and filter properties
              based on your requirements.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">🏡</div>

            <h3>Wide Selection</h3>

            <p>
              Explore apartments, villas, houses
              and other property types.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">❤️</div>

            <h3>Save Favorites</h3>

            <p>
              Add properties to your wishlist and
              access your favorites anytime.
            </p>
          </div>


          <div className="why-card">
            <div className="why-icon">⚡</div>

            <h3>Simple Experience</h3>

            <p>
              A clean and user-friendly interface
              makes property browsing easy.
            </p>
          </div>

        </div>

      </section>


      {/* ================= PROPERTY TYPES ================= */}
      <section className="categories-section">

        <div className="section-heading centered">

          <div>
            <span className="section-label">
              FIND YOUR SPACE
            </span>

            <h2>Explore Property Types</h2>

            <p>
              Choose the type of property that suits you.
            </p>
          </div>

        </div>


        <div className="category-grid">

          <Link to="/properties" className="category-card apartment">
            <div>
              <span>🏢</span>
              <h3>Apartments</h3>
              <p>Modern city living</p>
            </div>
          </Link>


          <Link to="/properties" className="category-card villa">
            <div>
              <span>🏡</span>
              <h3>Villas</h3>
              <p>Luxury & comfort</p>
            </div>
          </Link>


          <Link to="/properties" className="category-card house">
            <div>
              <span>🏠</span>
              <h3>Houses</h3>
              <p>Perfect family homes</p>
            </div>
          </Link>


          <Link to="/properties" className="category-card farm">
            <div>
              <span>🌳</span>
              <h3>Farm Houses</h3>
              <p>Peaceful surroundings</p>
            </div>
          </Link>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="home-cta">

        <div className="cta-content">

          <span className="section-label">
            START YOUR SEARCH
          </span>

          <h2>
            Ready to find your
            <br />
            perfect property?
          </h2>

          <p>
            Explore our property listings and find
            a place that feels like home.
          </p>

          <Link to="/properties" className="cta-button">
            Explore Properties →
          </Link>

        </div>

      </section>

    </div>
  );

}

export default Home;