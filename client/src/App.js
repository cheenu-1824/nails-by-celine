// src/App.js
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>✨ Nails by Celine ✨</h1>
        <p>Your destination for beautiful, creative nail designs!</p>
        <button className="cta-button">Book an Appointment</button>
      </header>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-card">
            <h3>Classic Manicure</h3>
            <p>Elegant and timeless nails, perfectly polished.</p>
          </div>
          <div className="service-card">
            <h3>Gel Nails</h3>
            <p>Long-lasting gel finishes for stunning nails.</p>
          </div>
          <div className="service-card">
            <h3>Nail Art</h3>
            <p>Creative designs that show off your style.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Nails by Celine | <a href="mailto:contact@nailsbyceline.com">Contact Us</a></p>
      </footer>
    </div>
  );
}

export default App;