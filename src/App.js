import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <main>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
