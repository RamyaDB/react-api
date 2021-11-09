import React from 'react';
import './Profile.scss'

const Profile = (props) => {
  // const { data } = props;
  const {name, email, location, dob, picture} = props.data
  return (
    <div className="profile">
      <img src={picture.large} alt="Large Picture" className="profilePic"/>
      <section className="bioData">
        <h1>Name: {name.title} {name.first} {name.last}</h1>
        <h1>DOB: {dob.date}</h1>
        <h1>Age: {dob.age}</h1>
        <h1>Email : {email}</h1>
        <h1>Location : {location.city}, {location.country}</h1>
        <h1>Street : {JSON.stringify(location.street)}</h1>
        <h1>Coordinates: {JSON.stringify(location.coordinates)}</h1>      
      </section>
      {/* <img src={picture.medium} alt="Medium Picture" />
      <img src={picture.thumbnail} alt="Thumbnail Picture" /> */}
      {/* <h1>Coordinates: {location.coordinates.latitude} {location.coordinates.longitude}</h1> */}
      
      {console.log("stop")}
      {/* <h1>{JSON.parse(location.street)}</h1> */}
      
    </div>
  )
}

export default Profile
