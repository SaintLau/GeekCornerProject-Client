import React from 'react';
import { addAnime, uploadFile } from '../../api/anime';
import { toast } from 'react-toastify';

class AddAnime extends React.Component {
    state = {
        title:'',
        synopsis: '',
        image: '' 
    }
    handleChange = (event) => {
        let { name, value, type } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { titles, synopsis } = this.state
        //to add img
        const uploadData = new FormData(); //where we upload the 'file' from backend
        uploadData.append('file', this.state.posterImage);


        uploadFile(uploadData).then((response) => {
            const newAnime = {
                titles: titles,
                synopsis: synopsis,
                image: response.data.fileUrl
            }
            
            addAnime(newAnime).then(() => {
            toast.success('Anime creacted!');
            this.props.history.push('/animes')
        });

        
        })
    }

    handleFileChange = (event) => {
        this.setState({
            posterIamge: event.target.files[0]
        })
    }

    render() {
        const { title, synopsis } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                <label>Title</label>
                <input type="text" name="name" value={title} onChange={this.handleChange}/>

                <label>Synopsis</label>
                <input type="text" name="synopsis" value={synopsis} onChange={this.handleChange} />


                
                <label>Image</label>
                <input type="file" onChange={this.handleFileChange} />



                <button type="submit">Create</button>
            </form>
        )
    }
}

export default AddAnime;