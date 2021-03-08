import React from 'react';
import { deleteAnime, getAnime } from '../../api/anime';

class AnimeDetails extends React.Component {
    state = {
        id: '',
        titles: '',
        synopsis: ''
    }

    componentDidMount() {
        const animeId = this.props.match.params.id; //id is because of the route on app.js
        getAnime(animeId).then((response) => {
            this.setState({
                id: response.data._id,
                titles: response.data.titles,
                synopsis: response.data.synopsis
            })
        });
    }

    handleDeleteAnime = (id) => {
        deleteAnime(id).then(() => {
            //redirect the user to /projects
            this.props.history.push('/animes');
        })
    }

    render() {
        const { id, titles, synopsis } = this.state;
        return(
            <>
                <h2>{titles}</h2>
                <h3>{synopsis}</h3>
                <button onClick={() => this.handleDeleteAnime(id)}>Delete</button>
                <button onClick={() => {
                    this.props.history.push(`/animes/${id}/edit`);
                }}>Edit Project</button>
            </>
        )
    }
}

export default AnimeDetails;