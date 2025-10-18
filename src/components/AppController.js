import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './home/HomePage'
import LoginPage from './login/LoginPage'
import CollectionPage from './collection/CollectionPage'

const AppController = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/purrlescentcollections' element={<CollectionPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppController