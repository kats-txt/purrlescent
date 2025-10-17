import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import ProductPage from './product/ProductPage'

const AppController = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<ProductPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppController