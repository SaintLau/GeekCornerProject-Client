import React from 'react';
import { getAllAnimes } from '../../api/anime';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup'


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
            <div className="list-anime">
                {animes.map((anime, index) => {
                    return (
                        <ListGroup horizontal className="anime-name" key={index}>
                            <ListGroup.Item ><Link to={`/animes/${anime.id}`}>{anime.slug}</Link></ListGroup.Item>
                            <ListGroup.Item><img src={anime.posterImage.tiny} /> </ListGroup.Item>
                            {/* <ListGroup.Item>renders</ListGroup.Item>
                            <ListGroup.Item>horizontally!</ListGroup.Item> */}
                        </ListGroup>
                    )
                })}
            </div>
                 

             


/* 
         <ul>
                {animes.map((anime, index) => {
                return (<li key={index}>
                       <Link to={`/animes/${anime.id}`}>{anime.slug} 
                       <img src={anime.posterImage.tiny} /> 
                       </Link>
                        
                    </li>)
                    
                })}
               </ul> 
            */
        )
    }
}

export default ListAnimes;