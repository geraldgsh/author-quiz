import React from 'react';
import './AddAuthorForm.css'

const AddAuthorForm = ({match}) => {
  return <div className="AddAuthorForm">
    <h1>Add Author</h1>
    <form>
      <div className="AddAuthorForm__input">
        <label htmlFor="name">Name</label>
        <input type="text" name="name"></input>
      </div>
      <div className="AddAuthorForm__input">
        <label htmlFor="imageUrl">Image Url</label>
        <input type="text" name="imageUrl"></input>
      </div>
    </form>
  </div>
}

export default AddAuthorForm;
