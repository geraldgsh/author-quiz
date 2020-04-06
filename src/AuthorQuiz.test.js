import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Author Quiz", () => {
  it ("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AuthorQuiz />, div)
  })
})