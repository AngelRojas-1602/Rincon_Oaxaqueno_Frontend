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
import Saludador from './pages/Saludador'
import Productos from './pages/Productos'
import Typography from './components/Typography'



function App() {
  return (
    <Typography>
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
    </Typography>
  );
}

export default App;
