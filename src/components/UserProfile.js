import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getUserFavorites } from '../api/anime';
import AnimeDetails from '../components/Animes/AnimeDetails';

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
                <p>Change/update your profile pic</p>
                <p>Favorite Anime:</p>
                    <div>
                        <ul>
                        {this.state.favorites.map((favorite) => {
                            return (
                                <AnimeDetails key={favorite} handleRemoveFavorite={() => this.handleRemoveFavorite(favorite)} id={favorite} />
                            )
                        })}
                        </ul>
                    </div>
            </div>
        )
    }

}


export default UserProfile;