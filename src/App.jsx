import React from "react";

export default function App() {
  return (
    <div style={pageStyle}>
      <style>{`
        .slider {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          animation: fadeSlider 30s infinite;
        }

        .slide:nth-child(1) { animation-delay: 0s; }
        .slide:nth-child(2) { animation-delay: 10s; }
        .slide:nth-child(3) { animation-delay: 20s; }

        @keyframes fadeSlider {
          0% { opacity: 0; }
          8% { opacity: 1; }
          30% { opacity: 1; }
          38% { opacity: 0; }
          100% { opacity: 0; }
        }

        a:hover {
          color: #1684ff !important;
        }

        @media(max-width: 768px) {
          .navLinks {
            justify-content: center;
            width: 100%;
          }

          .hero {
            height: 55vh !important;
          }

          .aboutGrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <header style={headerStyle}>
        <nav style={navStyle}>
          <h1 style={logoStyle}>
            Edralpat<span style={{ color: "#1684ff" }}>GH</span>
          </h1>

          <div className="navLinks" style={navLinksStyle}>
            <a href="#home" style={linkStyle}>Home</a>
            <a href="#about" style={linkStyle}>About Us</a>
            <a href="#products" style={linkStyle}>Products</a>
            <a href="#gallery" style={linkStyle}>Gallery</a>
            <a href="#contact" style={linkStyle}>Contact Us</a>
          </div>
        </nav>
      </header>

      <section id="home" className="hero" style={heroStyle}>
        <div className="slider">
          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1523660778745-247ed0bcce31?q=80&w=2070&auto=format&fit=crop)",
            }}
          ></div>

          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80)",
            }}
          ></div>

          <div
            className="slide"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=80)",
            }}
          ></div>
        </div>

        <button style={{ ...arrowStyle, left: "25px" }}>‹</button>
        <button style={{ ...arrowStyle, right: "25px" }}>›</button>

        <div style={dotsStyle}>
          <span style={activeDotStyle}></span>
          <span style={dotStyle}></span>
          <span style={dotStyle}></span>
        </div>
      </section>

      <main style={mainStyle}>
        <section id="products">
          <div style={productTitleBox}>
            <div style={titleLine}></div>
            <h2 style={productTitle}>PRODUCTS</h2>
            <div style={titleLine}></div>
          </div>

          <div style={productGrid}>
            <div style={productCard}>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
                alt="Heavy Machinery Tires"
                style={productImage}
              />
              <div style={productBody}>
                <h3 style={cardTitle}>Heavy Machinery Tires</h3>
                <div style={smallBlueLine}></div>
                <p style={cardText}>
                  Durable and high-performance tires for mining, construction,
                  trucks, and industrial vehicles.
                </p>
              </div>
            </div>

            <div style={productCard}>
              <img
                src="https://images.unsplash.com/photo-1523660778745-247ed0bcce31?q=80&w=1200&auto=format&fit=crop"
                alt="Mining Tools"
                style={productImage}
              />
              <div style={productBody}>
                <h3 style={cardTitle}>Mining Tools</h3>
                <div style={smallBlueLine}></div>
                <p style={cardText}>
                  Quality tools and equipment designed for mining and field
                  operations.
                </p>
              </div>
            </div>

            <div style={productCard}>
              <img
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=80"
                alt="Commodities"
                style={productImage}
              />
              <div style={productBody}>
                <h3 style={cardTitle}>Commodities</h3>
                <div style={smallBlueLine}></div>
                <p style={cardText}>
                  Rice, oils, and essential commodities for wholesale and retail
                  supply.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" style={aboutSection}>
          <div className="aboutGrid" style={aboutGrid}>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Edralpat Office"
                style={aboutImage}
              />
            </div>

            <div style={aboutTextBox}>
              <h2 style={aboutTitle}>
                ABOUT <span style={{ color: "#1684ff" }}>US</span>
              </h2>
              <div style={aboutUnderline}></div>

              <p style={aboutParagraph}>
                Edralpat is a Ghanaian owned business established in the year
                2025 with a clear vision to become a leading force in the supply
                and distribution of quality industrial and agricultural products
                across Ghana and beyond.
              </p>

              <p style={aboutParagraph}>
                We specialize in heavy machinery tires, mining tools, and a wide
                range of commodities including rice, oils, and other essential
                products that power businesses and support communities.
              </p>

              <p style={aboutParagraph}>
                The company is owned and led by{" "}
                <strong style={{ color: "#1684ff" }}>Ebenezer Nii Laryea</strong>,
                an astute business mogul with a strong passion for enterprise
                development, excellence, and creating lasting value for clients
                and partners.
              </p>

              <p style={aboutParagraph}>
                At Edralpat, we are committed to quality, reliability, timely
                delivery, and building long-term relationships that drive mutual
                growth.
              </p>
            </div>
          </div>
        </section>

        <section style={valuesGrid}>
          <div style={valueCard}>
            <h3>Quality Products</h3>
            <p>We deliver only the best to our clients.</p>
          </div>

          <div style={valueCard}>
            <h3>Trusted Partnership</h3>
            <p>Building strong, long-term relationships.</p>
          </div>

          <div style={valueCard}>
            <h3>Timely Delivery</h3>
            <p>On time, every time, everywhere.</p>
          </div>

          <div style={valueCard}>
            <h3>Customer Satisfaction</h3>
            <p>Your satisfaction is our top priority.</p>
          </div>
        </section>

        <section id="gallery" style={gallerySection}>
          <h2 style={sectionTitle}>Gallery</h2>
          <div style={productGrid}>
            <img
              src="https://images.unsplash.com/photo-1523660778745-247ed0bcce31?q=80&w=1200&auto=format&fit=crop"
              alt="Mining"
              style={galleryImage}
            />
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
              alt="Heavy tires"
              style={galleryImage}
            />
            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=80"
              alt="Commodities"
              style={galleryImage}
            />
          </div>
        </section>

        <section id="contact" style={contactBar}>
          <div>
            <strong>📞 +233 00 000 0000</strong>
          </div>
          <div>
            <strong>✉️ info@edralpat.com</strong>
          </div>
          <div>
            <strong>📍 Accra, Ghana</strong>
          </div>
        </section>
      </main>

      <footer style={footerStyle}>
        <p>© 2025 EdralpatGH. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const pageStyle = {
  fontFamily: "Arial, sans-serif",
  background: "linear-gradient(180deg, #020617 0%, #03111f 100%)",
  color: "white",
  minHeight: "100vh",
};

const headerStyle = {
  background: "#020617",
  padding: "18px 30px",
  position: "sticky",
  top: 0,
  zIndex: 1000,
};

const navStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "20px",
};

const logoStyle = {
  fontSize: "34px",
  margin: 0,
  fontWeight: "900",
};

const navLinksStyle = {
  display: "flex",
  gap: "28px",
  flexWrap: "wrap",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "16px",
};

const heroStyle = {
  position: "relative",
  height: "420px",
  overflow: "hidden",
  maxWidth: "1200px",
  margin: "0 auto",
  borderRadius: "0 0 22px 22px",
};

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  border: "none",
  background: "rgba(0,0,0,0.45)",
  color: "white",
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  fontSize: "38px",
  cursor: "pointer",
};

const dotsStyle = {
  position: "absolute",
  bottom: "22px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "10px",
};

const dotStyle = {
  width: "13px",
  height: "13px",
  background: "white",
  borderRadius: "50%",
  display: "block",
};

const activeDotStyle = {
  ...dotStyle,
  background: "#1684ff",
};

const mainStyle = {
  maxWidth: "1120px",
  margin: "0 auto",
  padding: "18px 25px 0",
};

const productTitleBox = {
  background: "white",
  borderRadius: "15px",
  height: "72px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "28px",
  margin: "0 0 18px",
};

const productTitle = {
  color: "#1684ff",
  margin: 0,
  fontSize: "42px",
  fontWeight: "900",
  letterSpacing: "1px",
};

const titleLine = {
  height: "3px",
  width: "33%",
  background: "#1684ff",
  borderRadius: "20px",
};

const productGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "18px",
};

const productCard = {
  background: "#061325",
  border: "1px solid #1684ff",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0 18px 35px rgba(0,0,0,0.25)",
};

const productImage = {
  width: "100%",
  height: "230px",
  objectFit: "cover",
  display: "block",
};

const productBody = {
  padding: "24px",
  textAlign: "center",
};

const cardTitle = {
  fontSize: "26px",
  margin: "0 0 10px",
};

const smallBlueLine = {
  width: "55px",
  height: "3px",
  background: "#1684ff",
  margin: "0 auto 16px",
};

const cardText = {
  lineHeight: "1.7",
  margin: 0,
  fontSize: "16px",
};

const aboutSection = {
  marginTop: "20px",
  background: "#061325",
  border: "1px solid #1684ff",
  borderRadius: "14px",
  overflow: "hidden",
};

const aboutGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
};

const aboutImage = {
  width: "100%",
  height: "100%",
  minHeight: "390px",
  objectFit: "cover",
  display: "block",
};

const aboutTextBox = {
  padding: "30px",
};

const aboutTitle = {
  fontSize: "36px",
  margin: "0 0 8px",
};

const aboutUnderline = {
  width: "70px",
  height: "3px",
  background: "#1684ff",
  marginBottom: "22px",
};

const aboutParagraph = {
  lineHeight: "1.7",
  fontSize: "16px",
  color: "#e5e7eb",
};

const valuesGrid = {
  marginTop: "20px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  border: "1px solid #1684ff",
  borderRadius: "14px",
  overflow: "hidden",
};

const valueCard = {
  padding: "24px",
  textAlign: "center",
  background: "#061325",
  borderRight: "1px solid #1684ff",
};

const gallerySection = {
  padding: "60px 0 30px",
};

const sectionTitle = {
  fontSize: "34px",
  color: "#1684ff",
  textAlign: "center",
};

const galleryImage = {
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "14px",
  border: "1px solid #1684ff",
};

const contactBar = {
  margin: "25px 0",
  padding: "24px",
  border: "1px solid #1684ff",
  borderRadius: "14px",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
  textAlign: "center",
  background: "#061325",
};

const footerStyle = {
  textAlign: "center",
  padding: "20px",
  borderTop: "1px solid #1684ff",
};
