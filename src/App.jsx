import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#020617", color: "white", minHeight: "100vh" }}>
      <style>{`
        .slider { position: relative; width: 100%; height: 100%; }
        .slide {
          position: absolute; width: 100%; height: 100%;
          background-size: cover; background-position: center;
          opacity: 0; animation: fadeSlider 30s infinite;
        }
        .slide:nth-child(1){ animation-delay: 0s; }
        .slide:nth-child(2){ animation-delay: 10s; }
        .slide:nth-child(3){ animation-delay: 20s; }
        @keyframes fadeSlider {
          0%{opacity:0;} 8%{opacity:1;} 30%{opacity:1;} 38%{opacity:0;} 100%{opacity:0;}
        }
        a:hover { color:#1d4ed8 !important; }
      `}</style>

      <header style={{ padding: "20px", background: "#0f172a", position: "sticky", top: 0, zIndex: 1000 }}>
        <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto", flexWrap: "wrap", gap: "15px" }}>
          <h1 style={{ margin: 0 }}>EdralpatGH</h1>
          <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            <a href="#home" style={linkStyle}>Home</a>
            <a href="#about" style={linkStyle}>About Us</a>
            <a href="#products" style={linkStyle}>Products</a>
            <a href="#gallery" style={linkStyle}>Gallery</a>
            <a href="#contact" style={linkStyle}>Contact Us</a>
          </div>
        </nav>
      </header>

      <section id="home" style={{ position: "relative", height: "90vh", overflow: "hidden" }}>
        <div className="slider">
          <div className="slide" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1523660778745-247ed0bcce31?q=80&w=2070&auto=format&fit=crop)" }}></div>
          <div className="slide" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80)" }}></div>
          <div className="slide" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=80)" }}></div>
        </div>
      </section>

      <div style={{ width: "100%", background: "white", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h2 style={{ color: "#1d4ed8", margin: 0, fontSize: "30px", fontWeight: "bold" }}>Products</h2>
      </div>

      <section id="products" style={{ ...sectionStyle, background: "#0f172a" }}>
        <div style={gridStyle}>
          <div style={productCard}>
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80" style={imageStyle} />
            <h3>Heavy Machinery Tires</h3>
            <p>Durable tires for trucks, mining, construction, and industrial vehicles.</p>
          </div>

          <div style={productCard}>
            <img src="https://images.unsplash.com/photo-1523660778745-247ed0bcce31?q=80&w=1200&auto=format&fit=crop" style={imageStyle} />
            <h3>Mining Tools</h3>
            <p>Reliable tools and equipment support for mining and field operations.</p>
          </div>

          <div style={productCard}>
            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=80" style={imageStyle} />
            <h3>Commodities</h3>
            <p>Rice, oils, food products, and essential commodities for wholesale and retail supply.</p>
          </div>
        </div>
      </section>

      <section id="about" style={sectionStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p style={paragraphStyle}>
          Edralpat is a Ghanaian-owned business established in 2025 with a clear vision to become a trusted name in distribution, supply, and product sourcing across Ghana and beyond.
        </p>
        <p style={paragraphStyle}>
          The company focuses on heavy machinery tires, mining tools, commodities, oils, rice, and other essential products needed by businesses, industries, and households.
        </p>
        <p style={paragraphStyle}>
          Edralpat is led by Ebenezer Nii Laryea, an astute business mogul with a strong passion for enterprise, reliability, and long-term business growth. Under his leadership, the company is committed to quality service, trusted partnerships, and timely delivery.
        </p>
      </section>

      <section id="gallery" style={{ ...sectionStyle, background: "#0f172a" }}>
        <h2 style={headingStyle}>Gallery</h2>
        <div style={gridStyle}>
          <img src="https://images.unsplash.com/photo-1523660778745-247ed0bcce31?q=80&w=1200&auto=format&fit=crop" style={imageStyle} />
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80" style={imageStyle} />
          <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=80" style={imageStyle} />
        </div>
      </section>

      <section id="contact" style={sectionStyle}>
        <h2 style={headingStyle}>Contact Us</h2>
        <p>Email: info@edralpat.com</p>
        <p>Phone: +233 00 000 0000</p>
        <p>Location: Accra, Ghana</p>
      </section>

      <footer style={{ textAlign: "center", padding: "25px", background: "#020617" }}>
        <p>© 2026 Edralpat. All rights reserved.</p>
      </footer>
    </div>
  );
}

const linkStyle = { color: "white", textDecoration: "none", fontWeight: "bold" };
const sectionStyle = { padding: "80px 20px", textAlign: "center" };
const headingStyle = { fontSize: "38px", marginBottom: "20px" };
const paragraphStyle = { maxWidth: "850px", margin: "20px auto", lineHeight: "1.8", fontSize: "18px" };
const gridStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", maxWidth: "1100px", margin: "30px auto 0" };
const productCard = { background: "#111827", padding: "20px", borderRadius: "20px", textAlign: "center" };
const imageStyle = { width: "100%", height: "250px", objectFit: "cover", borderRadius: "16px" };
