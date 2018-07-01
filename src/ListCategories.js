import React, { Component } from 'react'
import ListBooks from './ListBooks'

class ListCategories extends Component {

  render() {
    console.log('ListCategories',this.props)
    return (
      <div>
        {this.props.categories.map((category) => (
            <div className="bookshelf" key={category.id}>
              <h2 className="bookshelf-title">{category.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.filter(book => book.category === category.id).map((book) => (
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

export default ListCategories
