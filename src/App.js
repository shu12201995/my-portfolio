import React from 'react';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from'./container';
import { Navbar } from './components';
import SchoolFinderDemo from './components/SchoolFinder/SchoolFinderDemo';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <SchoolFinderDemo />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);r />
  </div>
);

export default App;