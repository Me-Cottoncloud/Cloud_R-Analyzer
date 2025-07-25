import React from "react";   // Import React library
import "./styles.css";       // Import your CSS file

function App() {
  return (
    <>
      {/* Header Component */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <i className="material-icons logo-icon">psychology</i>
              <h1>Cloud R-Analyzer</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;          // Export this component so index.js can render it
