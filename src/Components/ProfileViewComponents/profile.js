import React, { Component } from 'react'
import { connect } from 'react-redux'

//import child components of profile
import ProfileVideoPlayer from './profileVideoPlayer'
import ProfileInfo from './profileInfo'
import UploadVideos from './uploadVideo'
import VoteMovies from './profileVoting.js'

// shows userInfo - ProfilePlayer - ProfileVideos - ProfileUpload
class Profile extends Component {

  render() {
    const { userInfo } = this.props
    return (
      <section className="profileView">
        <section className="profile_container">
          <ProfileInfo userInfo = {userInfo} />
          <ProfileVideoPlayer userInfo = {userInfo} />
        </section>
        <VoteMovies userInfo = {userInfo} />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ userInfo: state.authUser.authUser })
export default connect(mapStateToProps, null)(Profile)
         