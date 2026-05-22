import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:'Arial', background:'#020617', color:'white', minHeight:'100vh'}}>
      <header style={{padding:'20px', background:'#0f172a'}}>
        <h1>EdralpatGH</h1>
        <p>Tires • Rice • Commodities • Advertising</p>
      </header>

      <section style={{
        height:'80vh',
        backgroundImage:'url(https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1600&q=80)',
        backgroundSize:'cover',
        backgroundPosition:'center',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
      }}>
        <div style={{background:'rgba(0,0,0,0.6)', padding:'40px', borderRadius:'20px'}}>
          <h2 style={{fontSize:'48px'}}>EdralpatGH Distribution & Sales</h2>
          <p>Trusted supplier of tires, rice, and essential commodities.</p>
        </div>
      </section>

      <section style={{padding:'60px 20px'}}>
        <h2>Our Services</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:'20px', marginTop:'20px'}}>
          <div style={{background:'#111827', padding:'20px', borderRadius:'20px'}}>
            <h3>Tire Distribution</h3>
            <p>Quality tires for all vehicle types.</p>
          </div>

          <div style={{background:'#111827', padding:'20px', borderRadius:'20px'}}>
            <h3>Rice & Commodities</h3>
            <p>Wholesale and retail supply available.</p>
          </div>

          <div style={{background:'#111827', padding:'20px', borderRadius:'20px'}}>
            <h3>Advertising</h3>
            <p>Promote your products with EdralpatGH.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
