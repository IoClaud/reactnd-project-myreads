import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListCategories from './ListCategories'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    books : [],
    categories: [
        {
          "title": "Currently Reading",
          "id": "currentlyReading"
        },
        {
          "title": "Want to Read",
          "id": "wantToRead"
        },
        {
          "title": "Read",
          "id": "read"
        }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeCategory = (book, category) => {
    if (this.state.books) {
      BooksAPI.update(book,category).then(() => {
        book.shelf = category;
        this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat([book])
        }))
      })
    }
  }

  render() {
    const {books, categories} = this.state

    return (
      <div className="app">

          <Route exact path='/' render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <ListCategories
                    onChangeCategory={this.changeCategory}
                    categories = {categories}
                    books = {books}
                  />
                </div>
              </div>
            )}
          />

          <Route path="/search" render={(history) => (
              <div>
                <SearchBooks

                  onChangeCategory = {this.changeCategory}
                />
              </div>
            )}
          />

        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>

      </div>

    )
  }
}

export default BooksApp
