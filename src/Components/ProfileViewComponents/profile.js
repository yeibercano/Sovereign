import React, { Component } from 'react'
import { connect } from 'react-redux'

//import child components of profile
import ProfileVideoPlayer from './profileVideoPlayer'
import ProfileInfo from './profileInfo'
import UploadVideos from './uploadVideo'
import VoteMovies from './profileVoting.js'
import UploadNewVideo from './uploadNewVideo'

// shows userInfo - ProfilePlayer - ProfileVideos - ProfileUpload
class Profile extends Component {

  render() {
    const { userInfo } = this.props
    return (
      <section>
        <section className="profile_container">
          <ProfileInfo userInfo = {userInfo} />
          <ProfileVideoPlayer userInfo = {userInfo} />
          <UploadVideos />
        </section>
        <VoteMovies userInfo = {userInfo} />
      </section>
    );
  }
}

function mapStateToProps(state) {
   return { userInfo: state.signedUser.signedUser }
}

export default connect(mapStateToProps, null)(Profile)
         