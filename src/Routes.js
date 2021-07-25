import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/home">
                <Home/>
            </Route>
            {/* Finally, catch all unmatched routes */}
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
}
