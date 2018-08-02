import React, { Component } from 'react';
import userGlyphIcon from '../static/images/user.png';
import locationGlyphIcon from '../static/images/location.png';

import '../static/style/ProfileComponent.css';

class ProfileComponent extends Component {
  render() {
    return (
             <div className="profileComponent">
                    <div className="profile">
                        <img src={this.props.profile.avatar_url} className="profileImage" alt="" />
                        <h3 className="profileName"><span>{this.props.profile.name}</span></h3>
                        <h4 className="profileLogin"><span>{this.props.profile.login}</span></h4>
                        <h4 className="profileBio"><span>{this.props.profile.bio}</span></h4>
                        <button className="button button1">Edit Bio</button>
                    </div>
                    <div className="profile2">
                        <span><img src={userGlyphIcon} alt="" className="userGlyphIcon"  /><h4 className="profileCompany">{this.props.profile.company}</h4></span>
                        <span ><img src={locationGlyphIcon} alt="" className="locationGlyphIcon"/><h4 className="profileLocation">{this.props.profile.location}</h4></span>
                    </div>
            </div>
        )
  }
}
export default ProfileComponent;
