import React from 'react'
import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider}from "react-router-dom"


import './index.css'
import App from './App.jsx'
import Home from "./templates/Home.jsx"
import About from "./templates/About.jsx"
import Contact from "./templates/Contact.jsx"
import Blog from "./templates/Blog.jsx"
import NotFound from "./templates/NotFound.jsx"


import CarrerLayout from "./components/CarrerLayout"

import Carrers,{carrersLoader} from "./templates/Carrers.jsx"

import CarrersDetails,{carrersDetailsLoader} from "./templates/CarrersDetails.jsx"




const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="blog" element={<Blog/>}/>
    
    
    <Route path="carrers" element={<CarrerLayout/>}>
        <Route 
          index
          element={<Carrers/>}
          loader={carrersLoader}
        />
        
        <Route
          path=":id"
          element={<CarrersDetails
           />}
          loader={carrersDetailsLoader}
        />
    </Route>
    
    
    <Route path="*" element={<NotFound/>}/>
    
  </Route>
  ));


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
