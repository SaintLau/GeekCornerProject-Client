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
                {animes.map((anime) => {
                return (<li key={anime._id}>
                       <Link to={`/animes/${anime._id}`}>{anime.titles} 
                     {/*   <Image src={anime.posterImage} /> */} 
                       </Link>

                    </li>)
                    
                })}
               </ul> 
            //</Ul>
        )
    }
}

export default ListAnimes;