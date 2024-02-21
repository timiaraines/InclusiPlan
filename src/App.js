import "./App.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Login from "./components/loginSign/login";
import Signup from "./components/loginSign/signup";
import Editor from "./components/iepWriter/Editor";

function App() {
  return (
    <Router>
      <Switch>
        {/* Routes for Login and Signup without Header and Footer */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        {/* Route for Other Pages with Header and Footer */}
        <Route path="/">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/courses' component={CourseHome} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/journal' component={Blog} />
            <Route path='/contact' component={Contact} />
            <Route path='/iepWriter' component={Editor} />
          </Switch>
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

