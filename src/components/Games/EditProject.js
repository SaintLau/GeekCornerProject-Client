import React from 'react';
import { getProject, updateProject } from '../../api/games';

class EditProject extends React.Component {
    state = {
        name:'',
        summary: '',
        cover: 'http://some' //just to skip the error
    }

    componentDidMount() {
        const gameId = this.props.match.params.id;
        getProject(gameId).then((response) => {
            this.setState({
                id: response.data._id,
                name: response.data.name,
                summary: response.data.summary
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
        updateProject(this.state).then(() => {
            this.props.history.push(`/games/${id}`);
        })
    }

    render() {
        const { name, summary } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange}/>

                <label>Description</label>
                <input type="text" name="summary" value={summary} onChange={this.handleChange} />

                <button type="submit">Update</button>
            </form>
        )
    }
}


export default EditProject;