import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
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

const Book = ({title, onClick}) => {
  return (
  <div className="answer" onClick={() => {onClick(title);}}>
    <h4>{title}</h4>
  </div>
  )
}

const highlightToBgColor = highlight => {
  const mapping = {
    'none': '',
    'correct': 'green',
    'wrong': 'red'
  }
  return mapping[highlight];
};

const Turn = ({author, books, highlight, onAnswerSelected}) => {
  return (
    <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
    <div className="col-4 offset-1">
      <img src={author.imageUrl} className="authorimage" alt="Author"/>
    </div>
    <div className="col-6">
      {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
    </div>
  </div>
  )
}
Turn.prototype = {
  author: Proptypes.shape({
    name: Proptypes.string.isRequired,
    imageUrl: Proptypes.string.isRequired,
    imageSource: Proptypes.string.isRequired,
    books: Proptypes.arrayOf(Proptypes.string).isRequired,
  }),
  books: Proptypes.arrayOf(Proptypes.string).isRequired,
  onAnswerSelected: Proptypes.func.isRequired,
  highlight: Proptypes.string.isRequired
};

function Continue({ show, onContinue }) {
  return (
    <div className="row continue">
      {show
        ? <div className="col-11">
          <button className="btn btn-primary btn-lg float-right" onClick={onContinue}>Continue</button>
        </div>
        : null}
    </div>
  );
}

const Footer = () => {
  return (
    <div id="footer" className="row">
      <p className="text-muted credit">
        All images are from 
        <a href="https://commons.wikimedia.org/wiki/Main_Page">
        Wikimedia Commons</a> 
        and are in the public domain
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    turnData: state.turnData,
    highlight: state.highlight,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerSelected: (answer) => {
      dispatch({ type: 'ANSWER_SELECTED', answer })
    },
    onContinue: () => {
      dispatch({ type: 'CONTINUE' })
    }
  }
}

const AuthorQuiz = connect(mapStateToProps, mapDispatchToProps)(
  function({turnData, highlight, onAnswerSelected}) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
      <Continue />
      <p><Link to="/add">Add an Author</Link></p>
      <Footer />
    </div>   
  ); 
});

export default AuthorQuiz;
