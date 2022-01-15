import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import BlogDetail from "./BlogDetail";
import PageNotFound from "./PageNotFound";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  const title = "Application Content ";
  const likes = 50;
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/create'>
        <Create></Create>
        </Route>
        <Route path='/blog/:id'>
          <BlogDetail></BlogDetail>
        </Route>
        <Route path='*'>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
