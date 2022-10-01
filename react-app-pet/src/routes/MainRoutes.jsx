import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import ListaPets from '../components/ListaPets'


export default function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/lp' element={<ListaPets/>}/>
            </Routes>
        </>
    )
}
