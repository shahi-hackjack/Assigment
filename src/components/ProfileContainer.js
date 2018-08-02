import React, { Component } from 'react';
import ProfileComponent from './ProfileComponent';

import {fetchProfileAction} from '../actions'
import { connect } from 'react-redux';

class ProfileContainer extends Component {
    constructor(props){
        super(props);
        this.state = { profile: {} };
    }

    componentWillMount(){
             //dispatch action for fetching profile info
            this.props.fetchProfile();
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props.profile)!==JSON.stringify(nextProps.profile))
        {
            this.setState({
                profile:nextProps.profile
            })
        }
    }

  render() {
    return <ProfileComponent profile={this.state.profile} />;
    }
}

const mapStateToProps = (state) => {
    return ({
        profile: state.profileDataResponse.data
    })
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProfile: () => dispatch(fetchProfileAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
