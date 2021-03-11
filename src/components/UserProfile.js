import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getUserFavorites } from '../api/anime';
import AnimeDetails from '../components/Animes/AnimeDetails';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap';

class UserProfile extends React.Component {
    state = {
        favorites: []
    }

    componentDidMount() {
        getUserFavorites().then((response) => {
            this.setState({
                favorites: response.data
            })
        })
    }

    handleRemoveFavorite = (id) => {
        this.setState((state) => {
            return {
                favorites: state.favorites.filter(favorite => favorite !== id)
            }
        })
    }

    render() {
        return (
            <div>
      
                <Card border="info" style={{ width: '18rem' }}>
                    <Card.Header>USERNAME</Card.Header>
                    <Card.Img variant="top" src="/profile.jpg" />
                    <Card.Body>
                         <Card.Title>About Me</Card.Title>
                            <Card.Text>
                            “Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!” – Izuku Midoriya
                             </Card.Text>
                            </Card.Body>
                        </Card>


                
                <p>Favorite Anime:</p>
                    <div className="animes-fav">
                        {this.state.favorites.map((favorite) => {
                            return (
                              ['md'].map((breakpoint, idx) =>(
                                  <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
                                      <ListGroup.Item variant="info">
                                      <AnimeDetails key={favorite} handleRemoveFavorite={() => this.handleRemoveFavorite(favorite)} id={favorite} />
                                      </ListGroup.Item>
                                  </ListGroup>
                              ))  
                                
                            )
                        })}
                        
                    </div>
            </div>
        )
    }

}

 
{/*}  <p>Favorite Anime:</p>
<div>
    <ul>
    {this.state.favorites.map((favorite) => {
        return (
            <AnimeDetails key={favorite} handleRemoveFavorite={() => this.handleRemoveFavorite(favorite)} id={favorite} />
        )
    })}
    </ul>
</div> 


    )
})}
</div>
*/}

export default UserProfile;