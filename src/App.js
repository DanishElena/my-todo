import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "../src/pages/Home";
import {About} from "../src/pages/About";
import {Navbar} from "./components/Navbar";
import {Loader} from "./components/Loader";
import {connect} from "react-redux";
import {initializeApp} from "./reducers/appReducer";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (

            <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">
                    <Switch>
                        <Route path={"/"} exact component={Home}/>
                        <Route path={"/about"} component={About}/>
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.appRed.initialized
})
export default connect(mapStateToProps, {initializeApp})(App)