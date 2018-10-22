import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Dribbble from '../../assets/icons/Dribbble@2x.png'
import Instagram from '../../assets/icons/Instagram@2x.png'
import Twitter from '../../assets/icons/Twitter@2x.png'
import LinkedIn from '../../assets/icons/LinkedIn@2x.png'
import Medium from '../../assets/icons/Medium@2x.png'
import Behance from '../../assets/icons/Behance@2x.png'
import Dani from '../../assets/images/user-image@2x.jpg'
// import purpleOval from '../../assets/ovals/purple-oval@2x.png'
// import pinkOval from '../../assets/ovals/pink-oval@2x.png'


import './Profile.css'

class Profile extends Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <div className='profile'>
            <Col xs={12} md={4}>
              <div className='profile-image'>
                <div className='user-image'>
                  <img src={Dani} alt='Dani' />
                </div>
              </div>
              </Col>
              <Col xs={12} md={8}>
                <div className='profile-info'>
                  <h1>Dani Andor</h1>
                  <span className='job-title'>Freelance Product Designer</span>
                  <span className='location'>Oradea, Romania</span>
                  <div className='social-media'>
                    <ul>
                      <li><a href='https://dribbble.com/daniandor' target='_blank' rel='noreferrer noopener' title='New Page'><img src={Dribbble} alt='Dribbble Logo'/></a></li>
                      <li><a href='https://www.linkedin.com/in/daniandor' target='_blank' rel='noreferrer noopener' title='New Page'><img src={LinkedIn} alt='LinkedIn Logo'/></a></li>
                      <li><a href='https://twitter.com/daniandor' target='_blank' rel='noreferrer noopener' title='New Page'><img src={Twitter} alt='Twitter Logo'/></a></li>
                      <li><a href='https://medium.com/@daniandor' target='_blank' rel='noreferrer noopener' title='New Page'><img src={Medium} alt='Medium Logo'/></a></li>
                      <li><a href='https://www.instagram.com/daniandor_uiuxdesigner/' target='_blank' rel='noreferrer noopener' title='New Page'><img src={Instagram} alt='Instagram Logo'/></a></li>
                      <li><a href='https://www.behance.net/daniandor' target='_blank' rel='noreferrer noopener' title='New Page'><img src={Behance} alt='Behance Logo'/></a></li>
                    </ul>
                  </div>
                  <a href='https://daniandor.com/' target='_blank' rel='noreferrer noopener' title='New Page' className='website-name'>www.daniandor.com</a>
                  <a href='/' target='_blank' rel='noreferrer noopener' title='New Page' className='purple-btn'>VIEW PROFILE</a>
                </div>
              </Col>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Profile
