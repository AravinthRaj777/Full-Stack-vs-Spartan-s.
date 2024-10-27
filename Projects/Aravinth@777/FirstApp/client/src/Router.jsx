// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./SignIn"


export const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
