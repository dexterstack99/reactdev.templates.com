import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div className="user">
                <h4 className="username">{this.props.user}</h4>
                <img className="user-profile" src={this.props.googleProfile} alt="user"></img>
            </div>
        );
    }
}
export default User;