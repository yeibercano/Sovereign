import React, { Component } from 'react'
import axios from 'axios'
import { hashHistory } from 'react-router'


class UploadVideo extends Component {
  _saveUpload(e) {
    e.preventDefault();
    hashHistory.push('NewVideo')   
  }
  
  render() {
    return (
      <section className="upload_video_button">
        <form onSubmit={this._saveUpload}>
          <input 
            type="submit" 
            name="submit"
            value="Upload Video"
            className="upload-button" />
        </form>
      </section>
    );
  }
}

export default UploadVideo