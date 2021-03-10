import React from 'react';
import { getAllAnimes } from '../../api/anime';
import { Link } from 'react-router-dom';
//import { Ul, Image } from '../styles/list';

class ListAnimes extends React.Component {
    state = {
        animes: []
    }

    componentDidMount() {
        getAllAnimes().then((response) => {
            this.setState({
                animes: response.data
            })
        })
    }

    render() {
        const { animes } = this.state;
        return (
           // <Ul primary>
           <ul>
                {animes.map((anime, index) => {
                return (<li key={index}>
                       <Link to={`/animes/${anime.id}`}>{anime.slug} 
                       <img src={anime.posterImage.tiny} /> 
                       </Link>
                        
                    </li>)
                    
                })}
               </ul> 
            //</Ul>
        )
    }
}

export default ListAnimes;