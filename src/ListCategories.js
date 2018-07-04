import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import ListBooks from './ListBooks'

class ListCategories extends Component {

  render() {
    //console.log('ListCategories',this.props)
    return (
      <div>
        {this.props.categories.map((category) => (
            <div className="bookshelf" key={category.id}>
              <h2 className="bookshelf-title">{category.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.sort(sortBy('title')).filter(book => book.shelf === category.id).map((book) => (
                    <li key = {book.id}>
                      <ListBooks
                        book = {book}
                        onChangeCategory={this.props.onChangeCategory}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
        ))}
      </div>
    )
  }
}

ListCategories.propTypes = {
  books: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onChangeCategory: PropTypes.func.isRequired
}
export default ListCategories
