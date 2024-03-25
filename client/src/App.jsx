import Navigation from "./component/navbar/Navbar.jsx";
import Hero from "./component/home/hero/Hero.jsx";
import InfoOne from "./component/home/hero/info/info-section-one/InfoOne.jsx";
import InfoTwo from "./component/home/hero/info/info-section-two/InfoTwo.jsx";
import InfoThree from "./component/home/hero/info/info-section-three/InfoThree.jsx";


function App() {

  return (
    <div>
      <Navigation />
      <Hero />
      <InfoOne />
      <InfoTwo />
      <InfoThree />

    </div>
  )
}

export default App
