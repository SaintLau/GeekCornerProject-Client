import React from 'react';
import { addProject, uploadFile } from '../../api/games';
import { toast } from 'react-toastify';

class AddProject extends React.Component {
    state = {
        name:'',
        summary: '',
        cover: 'http://some' //just to skip the error
    }
    handleChange = (event) => {
        let { name, value, type } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { name, summary } = this.state
        //to add img
        const uploadData = new FormData(); //where we upload the 'file' from backend
        uploadData.append('file', this.state.imageUrl);


        uploadFile(uploadData).then((response) => {
            const newGame = {
                name: name,
                summary: summary,
                cover: response.data.fileUrl
            }
            
            addProject(newGame).then(() => {
            toast.success('Game creacted!');
            this.props.history.push('/games')
        });

        
        })
    }

    handleFileChange = (event) => {
        this.setState({
            imageUrl: event.target.files[0]
        })
    }

    render() {
        const { name, summary } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange}/>

                <label>Summary</label>
                <input type="text" name="summary" value={summary} onChange={this.handleChange} />


                
                <label>Cover</label>
                <input type="file" onChange={this.handleFileChange} />



                <button type="submit">Create</button>
            </form>
        )
    }
}

export default AddProject;