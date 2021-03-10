import React from 'react';
import { getAnime, updateAnime } from '../../api/anime';

class EditAnime extends React.Component {
    state = {
        title:'',
        synopsis: '',
        image: '' 
    }

    componentDidMount() {
        const animeId = this.props.match.params.id;
        getAnime(animeId).then((response) => {
            this.setState({
                id: response.data._id,
                titles: response.data.titles,
                synopsis: response.data.synopsis
            })
        })
    }


    handleChange = (event) => {
        let { name, value, type } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        const { id } = this.state;
        event.preventDefault();
        updateAnime(this.state).then(() => {
            this.props.history.push(`/animes/${id}`);
        })
    }

    render() {
        const { title, synopsis } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Titles</label>
                <input type="text" name="name" value={title} onChange={this.handleChange}/>

                <label>Synopsis</label>
                <input type="text" name="synopsis" value={synopsis} onChange={this.handleChange} />

                <button type="submit">Update</button>
            </form>
        )
    }
}


export default EditAnime;