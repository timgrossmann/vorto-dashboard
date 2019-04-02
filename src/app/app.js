import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react"

import io from 'socket.io-client';

import indexRoutes from "routes/index.jsx";

export class App extends Component {
    componentDidMount() {
        // TODO setup store dispatch with new device data over WS

        const options = {
            secure: false,
            rememberUpgrade:true,
            rejectUnauthorized: false,
            transportOptions: {
                polling: {
                    extraHeaders: {
                        "Access-Control-Allow-Origin": "http://www.localhost:8080"
                    }
                }   
            }
        }
        const socket = io('http://www.localhost:8080', options);

        socket.on('connect', () => {
            console.log("Connected")
        });

        socket.on('event', (data) => {
            console.log("Event", data)
        });

        socket.on('disconnect', () => {
            console.log("Disconnected")
        });
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <HashRouter>
                        <Switch>
                            {indexRoutes.map((prop, key) => {
                                return <Route to={prop.path} component={prop.component} key={key} />;
                            })}
                        </Switch>
                    </HashRouter>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;