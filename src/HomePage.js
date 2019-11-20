import React from "react";
let i = 0

const story = [
  {"begin": [
    "You open your eyes and look around. You are in your nerded out room with your bed which looked like a spaceship and sci-fi figures everywhere. Star Wars, Star Trek, Aliens, every nerdy franchise you cna think of.",
    "But all of that pales in comparison to what arrives today..."
  ]}
]

export default class HomePage extends React.Component {

  state = {
    show: 'home'
  }

  changePage = (event) => {
    this.setState({
      show: event
    })
  }

  render() {
    if (this.state.show == 'home') {
      return(
        <div id='homePage'>
          <img src="images/cover.jpg" />
          <p>Augmented Reality</p>
          <p onClick={() => {this.changePage("begin")}}>Begin</p>
        </div>
      )
    } else if (this.state.show == "begin") {
      return(
        <div id='homePage'>
          <img src="images/bedroom.jpg" />
          <p>"You open your eyes and look around. You are in your nerded out room with your bed which looked like a spaceship and sci-fi figures everywhere. Star Wars, Star Trek, Aliens, every nerdy franchise you cna think of."</p>
        </div>
      )
    }
  }
}
