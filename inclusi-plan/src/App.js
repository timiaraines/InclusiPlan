import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Signup from "./components/loginSign/signup";
import Login from "./components/loginSign/login"; // Corrected import for Login
import Layout from "./components/layout"; 

function App() {
  return (
    <Router>
      <Switch>
        {/* Separate Routes for Login and Signup */}
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />

        {/* Layout Wrapped Routes */}
        <Route>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/courses' component={CourseHome} />
              <Route exact path='/pricing' component={Pricing} />
              <Route exact path='/journal' component={Blog} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
