import React from 'react'
import { Row, Col } from 'react-flexbox-grid/lib/'
import Button from 'react-toolbox/lib/button'
import Dialog from 'react-toolbox/lib/dialog'

import theme from './LegoWorld.scss'
import Container from '../../Shared/Container/Container.jsx'
import Content from './LegoWorld.md'

class LegoWorld extends React.Component {
  constructor (props) {
    super(props)
    // var scroll_top = $(window).scrollTop();
    this.state = { active: false }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState({active: !this.state.active})
  }

  render () {
    return (
      <div className={theme.legoworld}>
        <div className={theme.bg}>
          <Container>
            <Row className={theme.overview}>
              <Col xs={12} sm={7}>
                <h2 className="pb-0 mt-1">Lego World</h2>
                <h4>iOS Mixed Reality App</h4>

                <h3 className="mt-4">Overview</h3>
                <p className="mt-2">
                This semester (Fall 2018) I got the chance to take the undergraduate Image Processing course taught by Dr. Alan Bovik at UT Austin.
                One of the most interesting aspects of the course was the final project; we were given the freedom to build any application as long
                it used some of the image processing techniques we had learned in the course. I decided to build Lego World, a native Mixed-Reality
                iOS application built on top of ARKit which guides the user in augmented reality as they build a Lego Model.
                </p>
              </Col>
              <Col xs={12} sm={3} smOffset={1}>
                <img className={theme.iphone} src={require('../../../../img/legoworld_plane_white.png')}></img>
                <Button className={theme.center} label='Watch the Demo Video!' onClick={this.handleToggle} raised secondary/>
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row className={theme.content}>
            <Col xs={12} md={9}>
              <Content />
            </Col>
          </Row>
        </Container>

        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          type='normal'
          theme={theme}
        >
          <div className = {theme.vidcontainer}>
            <iframe src="https://www.youtube.com/embed/ET7gPgv2jhI" frameBorder="0" allowFullScreen></iframe>
          </div>
        </Dialog>
      </div>
    )
  }
}
export default LegoWorld
