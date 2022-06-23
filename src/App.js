import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News.js';
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      <div style={{ 
        backgroundImage: `url("https://media.istockphoto.com/photos/light-blue-paper-texture-background-picture-id1303637923?b=1&k=20&m=1303637923&s=612x612&w=0&h=iwLb9ARrRFooPmT5Bp2Gq2iX22AbVGIVpRrJFd2Bvl4=")` 
      }}>
        <BrowserRouter>
        <Navbar/>

         <Routes>  
         <Route path="/"element = {<News key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route path="/general"element = {<News key="General" pageSize={this.pageSize} country="in" category="General"/>}/>
          <Route path="/business"element = {<News key="Business"   pageSize={this.pageSize} country="in" category="Business"/>}/>
          <Route path="/entertainment"element = {<News key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}/>
          <Route path="/health"element = {<News key="Health" pageSize={this.pageSize} country="in" category="Health"/>}/>
          <Route path="/science"element = {<News key="Science"  pageSize={this.pageSize} country="in" category="Science"/>}/>
          <Route path="/sports"element = {<News key="Sports" pageSize={this.pageSize} country="in" category="Sports"/>}/>
          <Route path="/technology"element = {<News key="Technology" pageSize={this.pageSize} country="in" category="Technology"/>}/>
         </Routes>
         </BrowserRouter>
      </div>
      
    )
  }
}

  

