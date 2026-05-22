import React from "react";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#020617",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          padding: "20px",
          background: "#0f172a",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <h1 style={{ margin: 0 }}>EdralpatGH</h1>

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <a href="#home" style={linkStyle}>
              Home
            </a>

            <a href="#about" style={linkStyle}>
              About
            </a>

            <a href="#products" style={linkStyle}>
              Products
            </a>

            <a href="#gallery" style={linkStyle}>
              Gallery
            </a>

            <a href="#contact" style={linkStyle}>
              Contact Us
            </a>
          </div>
        </nav>
      </header>

      {/* HOME */}
      <section
        id="home"
  style={{
    position: "relative",
    height: "90vh",
    overflow: "hidden",
  }}
>
  <div
    style={{
      display: "flex",
      width: "300%",
      height: "100%",
      animation: "slideShow 18s infinite",
    }}
  >
    {/* Mining Tools */}
    <div
      style={{
        width: "100%",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>

    {/* Heavy Machinery Tires */}
    <div
      style={{
        width: "100%",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>

    {/* Commodities */}
    <div
      style={{
        width: "100%",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  </div>

  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px",
    }}
  >
    <div>
      <h2
        style={{
          fontSize: "55px",
          marginBottom: "20px",
        }}
      >
        EdralpatGH Distribution & Sales
      </h2>

      <p
        style={{
          fontSize: "22px",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        Mining tools, heavy machinery tires, rice, oils, and essential
        commodities distribution across Ghana and beyond.
      </p>
    </div>
  </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={sectionStyle}>
        <h2 style={headingStyle}>About Us</h2>

        <p
          style={{
            maxWidth: "750px",
            margin: "20px auto",
            lineHeight: "1.7",
          }}
        >
          EdralpatGH specializes in tire distribution, rice supply, oils,
          commodities, and product advertising solutions for individuals,
          shops, companies, and bulk buyers.
        </p>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        style={{
          ...sectionStyle,
          background: "#0f172a",
        }}
      >
        <h2 style={headingStyle}>Products</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>Vehicle Tires</h3>
            <p>Quality tires for cars, trucks, and commercial vehicles.</p>
          </div>

          <div style={cardStyle}>
            <h3>Mining Tools</h3>
            <p>Wholesale and retail rice distribution.</p>
          </div>

          <div style={cardStyle}>
            <h3>Commodities</h3>
            <p>Food products and other essential commodities.</p>
          </div>

          <div style={cardStyle}>
            <h3>Advertising Space</h3>
            <p>Promote your products directly on EdralpatGH.</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={sectionStyle}>
        <h2 style={headingStyle}>Gallery</h2>

        <div style={gridStyle}>
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=80"
            alt="Vehicle tires"
            style={imageStyle}
          />

          <img
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=900&q=80"
            alt="Distribution truck"
            style={imageStyle}
          />

          <img
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80"
            alt="Rice supply"
            style={imageStyle}
          />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          ...sectionStyle,
          background: "#0f172a",
        }}
      >
        <h2 style={headingStyle}>Contact Us</h2>

        <p>Email: info@edralpatgh.com</p>
        <p>Phone: +233 24 286 7647</p>
        <p>Location: Accra, Ghana</p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "25px",
          background: "#020617",
        }}
      >
        <p>© 2026 EdralpatGH. All rights reserved.</p>
      </footer>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
};

const sectionStyle = {
  padding: "80px 20px",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "38px",
  marginBottom: "20px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "30px",
  maxWidth: "1100px",
  marginLeft: "auto",
  marginRight: "auto",
};

const cardStyle = {
  background: "#111827",
  padding: "25px",
  borderRadius: "20px",
};

const imageStyle = {
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "20px",
};

const styleSheet = document.styleSheets[0];

const keyframes = `
@keyframes slideShow {
  0% { transform: translateX(0%); }
  30% { transform: translateX(0%); }

  33% { transform: translateX(-100%); }
  63% { transform: translateX(-100%); }

  66% { transform: translateX(-200%); }
  96% { transform: translateX(-200%); }

  100% { transform: translateX(0%); }
}
`;

styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
