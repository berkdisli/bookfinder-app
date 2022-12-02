import React from "react";
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'

const Search = ({ query }) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="search-books">
            <Form className='search-books--form' onSubmit={handleOnSubmit}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Harry Potter, Food and Love" value={query} />
                    <Form.Text className='text-muted'>
                        Search the world's most comprehensive index of full-text books.
                    </Form.Text>
                </Form.Group>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        query: state.books.query
    }
}

export default connect(
    mapStateToProps,
    null
)(Search);