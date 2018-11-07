import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./HomePage.css";
import { userActions } from '../_actions';
import Background from '../img/Flat design illustration your design icons for online.png';
import BodyClassName from 'react-body-classname';
const styles = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    height: '100%'};



class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <BodyClassName className='HomePageClass'>
            <section style={ styles }>
            
            <div className="col-md-6 col-md-offset-3 bakcolor">
                <h1>Hi {user.firstName}!</h1>
                
                    {/* <p>You're logged in with React!!</p>
                    <h3>All registered users:</h3>
                    {users.loading && <em>Loading users...</em>}
                    {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                    {users.items &&
                        <ul>
                            {users.items.map((user, index) =>
                                <li key={user.id}>
                                    {user.firstName + ' ' + user.lastName}
                                    {
                                        user.deleting ? <em> - Deleting...</em>
                                        : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                        : <span> - <a onClick={this.handleDeleteUser(.id)}>Delete</a></span>
                                    }
                                </li>
                            )}
                        </ul>
                     }*/}
                <p>
                    <Link to="/login">Logout</Link>    
                </p>
                <p>
                    <Link to="/projectMap" >My Project</Link>
                </p>
                <p>
                    <Link to="/project">Create new Project</Link>
                </p>
            </div></section>
            </BodyClassName>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };