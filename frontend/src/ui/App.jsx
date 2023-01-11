import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour.jsx'
import {Provider} from "react-redux";



export function App({store}) {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route  path='/' element={<Home />} />
                        <Route path={"*"} element={<FourOhFour />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>

    );
}