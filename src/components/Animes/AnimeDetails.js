import React from 'react';
import { deleteAnime, getAnime, toggleFavorite, getUserFavorites } from '../../api/anime';
import { Link } from 'react-router-dom';

class AnimeDetails extends React.Component {
    state = {
        id: '',
        title: '',
        synopsis: '',
        image: '',
        favorites: []
    }

    componentDidMount() {
         //id is because of the route on app.js
        const animeId = this.props.match ? this.props.match.params.id : this.props.id
        getAnime(animeId).then((response) => {
            this.setState({
                id: response.data.id,
                title: response.data.titles.en,
                synopsis: response.data.synopsis,
                image: response.data.coverImage.tiny
            })
            getUserFavorites().then((response) => {
                this.setState({
                    favorites: response.data
                })
            });
        });
    }

    handleDeleteAnime = (id) => {
        deleteAnime(id).then(() => {
            //redirect the user to /projects
            this.props.history.push('/animes');
        })
    }

    handleToggleFavorite = (id) => {
        toggleFavorite(id).then((response) => {
            this.setState({
                favorites: response.data
            })
        }) 
        if (this.props.handleRemoveFavorite)  {
            this.props.handleRemoveFavorite();
        } 
    }

    isFavorite = (id) => {
        return this.state.favorites.indexOf(id) > -1;
    }

    render() {
        const { id, title, synopsis, image } = this.state;
        return(
            <>
                <h2>{title}</h2>
                <h3>{synopsis}</h3>
                <img src={image} />
                <button variant="outline-info" onClick={() => this.handleToggleFavorite(id)}>
                    { 
                    this.isFavorite(id) 
                    ? "remove favorite"
                    : "add favorite"
                    }
                </button>
                <div>
                    <Link to="/animes">back</Link>
                </div>
                
            </>

        )
    }
}

export default AnimeDetails;