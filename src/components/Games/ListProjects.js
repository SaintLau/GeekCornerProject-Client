import React from 'react';
import { getAllGames } from '../../api/games';
import { Link } from 'react-router-dom';
import { Ul, Image } from '../../styles/list';

class ListProjects extends React.Component {
    state = {
        games: []
    }

    componentDidMount() {
        getAllGames().then((response) => {
   
            this.setState({
                games: response.data
            })
        })
    }

    render() {
        const { games } = this.state;
        return (
            <Ul primary>
                {games.map((game) => {
                return (<li key={game._id}>
                       <Link to={`/games/${game._id}`}>{game.name} 
                        <Image src={game.cover} />
                       </Link>

                    </li>)
                    
                })}
            </Ul>
        )
    }
}

export default ListProjects;