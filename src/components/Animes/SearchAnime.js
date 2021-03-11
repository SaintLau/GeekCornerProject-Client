import React from 'react';
import { getAllAnimes } from '../../api/anime';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';

class SearchAnime extends React.Component {

    state = {
        animes: [],
        search: ''
    }

    //function to search the anime

    handleFormSearch = (event) => {
        this.setState({
            search: event.target.value,
        })
    }

    componentDidMount() {
        getAllAnimes().then((response) => {
            this.setState({
                search: response.data
            })
        })
    }

    render() {
        return(
            <form>
                <label>Search for an Anime</label>
                <input type="text" name="search" onChange={this.handleFormSearch} />
                <button class="btn btn-info" type="submit">Search</button>
            </form>
        )
    }
    
}

export default SearchAnime;