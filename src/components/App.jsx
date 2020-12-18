import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import NotFound from './pages/NotFound'
import PrimaryLayout from './layouts/PrimaryLayout'
//import LayoutMasMejor from './layouts/LayoutNuevoDePaquete'
import Saludador from './pages/Saludador'
import Productos from './pages/Productos'



function App() {
  return (
    <Router className="router">
    <PrimaryLayout>
      <Switch>
        <Route exact path="/"  component={HomePage}/>
        <Route path="/about"  component={AboutPage}/>
        <Route path="/contact"  component={ContactPage}/>
        <Route path="/productos" component={Productos}/>
        <Route path="/saludador" component={Saludador}/>
        <Route path="/saludador/:name" component={Saludador}/>
        <Route path="/*"  component={NotFound}/>
      </Switch>
    </PrimaryLayout>
    </Router>
  );
}

export default App;
