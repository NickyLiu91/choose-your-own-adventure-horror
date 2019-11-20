import React from "react";
let area = 0
let text = 0

const story = [
  {
    "home": ["Augmented Reality"]
  },
  {
    "begin": [
    "You open your eyes and look around. You are in your nerded out room with your bed which looked like a spaceship and sci-fi figures everywhere. Star Wars, Star Trek, Aliens, every nerdy franchise you cna think of.",
    "But all of that pales in comparison to what arrives today..."
  ]
}
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

  next = () => {
    if (text == story[area].length - 1) {
      area += 1
      text = 0
    }
  }

  render() {
    if (this.state.show == 'home') {
      return(
        <div id='homePage'>
          <img src="images/cover.jpg" />
          <p>{story[area][text]}</p>
          <p onClick={(event) => {this.text(event)}}>Begin</p>
        </div>
      )
    } else if (this.state.show == "begin") {
      return(
        <div id='homePage'>
          <img src="images/bedroom.jpg" />
          <p></p>
        </div>
      )
    }
  }
}
