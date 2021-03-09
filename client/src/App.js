import React, { useEffect, useContext, useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import JobsPage from "./pages/JobsPage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactModal from "./components/modals/ContactModal";
import PostModal from "./components/modals/postModal";
import ScrollToTop from "./components/ScrollToTop";
import ReactGa from "react-ga";
//Bring in sttates
import JobState from "./context/jobs/JobState";
import ContactState from "./context/contact/ContactState";

//Bring in context
import ModalContext from "./context/modals/modalContext";
import JobContext from "./context/contact/contactContext";

function App(props) {
  const [contactModalShow, setContactModalShow] = useState(false);
  const [postModalShow, setPostModalShow] = useState(false);

  useEffect(() => {
    ReactGa.initialize("UA-136909061-2");
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Fragment>
      <ContactState>
        <JobState>
          <Router>
            <ScrollToTop />
            <div className="App ">
              <Navbar
                setContactModalShow={setContactModalShow}
                setPostModalShow={setPostModalShow}
              />
              <div className="container-fluid w-100 px-0 py-0">
                <Switch>
                  <Route
                    exact
                    path={"/"}
                    render={(props) => (
                      <Home
                        {...props}
                        setContactModalShow={setContactModalShow}
                      />
                    )}
                  />
                  <Route
                    exact
                    path={"/job"}
                    render={(props) => <JobsPage {...props} />}
                  />
                </Switch>

                <ContactModal
                  show={contactModalShow}
                  onHide={() => setContactModalShow(false)}
                />
                <PostModal
                  show={postModalShow}
                  onHide={() => setPostModalShow(false)}
                />
              </div>
            </div>
          </Router>
        </JobState>
      </ContactState>
    </Fragment>
  );
}

export default App;
