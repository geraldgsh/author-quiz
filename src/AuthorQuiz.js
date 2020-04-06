import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'

const Hero = () => {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  ) 
}

const Turn = ({author, books}) => {
  return (
  <div className="row turn" style={{backgroubd: "white"}}>
    <div className="col-4 offset-1">
      <img src={author.umageURL} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {books.map((title) => <p>{title}</p>)}
    </div>
  </div>
  )
}

const Continue = () => {
  return (<div/>)
}

const Footer = () => {
  return (
    <div id="footer" className="row"></div>
  )
}

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
        <Footer />
      </div>   
    );
  }  
}

export default AuthorQuiz;
