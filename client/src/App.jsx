import React from 'react';
import Navigation from './component/navbar/Navbar.jsx';
import ScrollingText from './component/text/Text.jsx'; // Import the ScrollingText component

function App() {
  return (
    <div>
      <Navigation />
      <ScrollingText /> {/* Add the ScrollingText component here */}
    </div>
  );
}

export default App;

