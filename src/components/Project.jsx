import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./Project.css"
import Card from 'react-bootstrap/Card';
import projectIMG1 from './Assets/AnalogClockImg.jpg'
import projectIMG2 from './Assets/MusicPlayerImg.jpg'
import projectIMG3 from './Assets/CalcImg.avif'
import projectIMG4 from './Assets/TodolistImg.jpg'
import projectIMG5 from './Assets/UserdataImg.jpg'
import projectIMG6 from './Assets/ChatAppImg.png'
import projectIMG7 from './Assets/VideoPlayerImg.jpg'

const Project = () => {
  return (
    <div>
      <Navbar />
      <div className="heading">My Works..</div>
      <div className="projects">
        <Card className='card'>
          <Card.Img variant="top" src={projectIMG6} height="300px" width="300px" />
          <Card.Body>
            <Card.Title>Live Chat App</Card.Title>
            <Card.Text>
            A chat app where u can create the rooms and chat with your friends.
            </Card.Text>
            <a href="https://live-chat-app-7np2.onrender.com/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>
        <Card className='card'>
          <Card.Img variant="top" src={projectIMG7} height="300px" width="300px" />
          <Card.Body>
            <Card.Title>Video Player</Card.Title>
            <Card.Text>
            A multi-resolution video player whre u can upload and play video on diffrent resolutions.
            </Card.Text>
            <a href="https://multi-resolution-video-player.onrender.com/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>
        <Card className='card'>
          <Card.Img variant="top" src={projectIMG1} height="300px" width="300px" />
          <Card.Body>
            <Card.Title>Analog Clock</Card.Title>
            <Card.Text>
            An analog clock is a traditional timekeeping device featuring a circular dial.
            </Card.Text>
            <a href="https://mohd-mustajab.github.io/Analog_Clock-Project/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>


        <Card className='card'>
          <Card.Img variant="top" src={projectIMG2} height="300px" width="300px" />
          <Card.Body>
            <Card.Title>Music Player</Card.Title>
            <Card.Text>      
             A music player software application designed to play audio files. 
            </Card.Text>
            <a href="https://mohd-mustajab.github.io/Music_player_Project/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>


        <Card className='card'>
          <Card.Img variant="top" src={projectIMG3} height="300px" width="300px" />
          <Card.Body>
            <Card.Title>Calculator</Card.Title>
            <Card.Text>
            It used for performing mathematical calculations.
            </Card.Text>
            <a href="https://mohd-mustajab.github.io/Calculator/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Img variant="top" src={projectIMG5} height="300px" width="300px" />
          <Card.Body>
            <Card.Title>User Data</Card.Title>
            <Card.Text>
             It fetch the user's data from external API.You can either search the user by name.
            </Card.Text>
            <a href="https://userdata-mj.netlify.app/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>


      </div>
      <Footer />
    </div>
  )
}

export default Project

