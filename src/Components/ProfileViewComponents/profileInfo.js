import React, {Component} from 'react'
import Gravatar from 'react-gravatar'

const ProfileInfo = ({ userInfo}) => {
  return (
    <aside  className="account_information">
      <h1 id="account_information_title" >Welcome, {userInfo.userName}!</h1>
      <section id="account_information_gravatar_container">
        <Gravatar 
          id="account_information_gravatar" 
          email={userInfo.email.toLowerCase().trim()} 
          default="monsterid" size={200} rating="pg">
        </Gravatar>
      </section>
      <h4 id="full_name">{userInfo.firstName} {userInfo.lastName}</h4>
      <h4>{userInfo.email}</h4>
      <h4>{userInfo.companyName}</h4>
      <h4>{userInfo.website}</h4>
    </aside>
  );
}

export default ProfileInfo