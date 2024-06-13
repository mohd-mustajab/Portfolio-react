import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./Project.css"
import Card from 'react-bootstrap/Card';
import projectIMG1 from './Assets/project1_clock.jpeg'
import projectIMG2 from './Assets/project2_player.jpeg'
import projectIMG3 from './Assets/project3_calc.jpg'
import projectIMG4 from './Assets/project4_todo.jpeg'
import projectIMG5 from './Assets/project5_userdata.png'

const Project = () => {
  return (
    <div>
      <Navbar />
      <div className="heading">My Works..</div>
      <div className="projects">
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
          <Card.Img variant="top" src={projectIMG4} height="300px" width="300px" />
          <Card.Body>
            <Card.Title>Todo List</Card.Title>
            <Card.Text>
            This to-do list is a simple, organized tool used to keep track of tasks and responsibilities.
            </Card.Text>
            <a href="https://todo-list-by-mj.netlify.app/" target='_blank'><button className="btn">Visit</button></a>
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

