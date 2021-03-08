import React from 'react';
import { deleteProject, getProject } from '../../api/games';

class ProjectDetails extends React.Component {
    state = {
        id: '',
        name: '',
        summary: ''
    }

    componentDidMount() {
        const gameId = this.props.match.params.id; //id is because of the route on app.js
        getProject(gameId).then((response) => {
            this.setState({
                id: response.data._id,
                name: response.data.name,
                summary: response.data.summary
            })
        });
    }

    handleDeleteProject = (id) => {
        deleteProject(id).then(() => {
            //redirect the user to /projects
            this.props.history.push('/games');
        })
    }

    render() {
        const { id, name, summary } = this.state;
        return(
            <>
                <h2>{name}</h2>
                <h3>{summary}</h3>
                <button onClick={() => this.handleDeleteProject(id)}>Delete</button>
                <button onClick={() => {
                    this.props.history.push(`/games/${id}/edit`);
                }}>Edit Project</button>
            </>
        )
    }
}

export default ProjectDetails;