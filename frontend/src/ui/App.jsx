import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour.jsx'
import {Provider} from "react-redux";
import { Dashboard } from './Dashboard.jsx'
import { SignInPage } from './SignInPage.jsx'
import { SignUpPage } from './SignUpPage.jsx'
import './App.css'


export function App({store}) {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path={"*"} element={<FourOhFour />} />
                        <Route path={"/sign-up"} element={<SignUpPage />} />
                        <Route path={"/sign-in"} element={<SignInPage />} />
                        <Route path={"/dashboard"} element={<Dashboard />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>

    );
}