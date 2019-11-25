import React from "react";

let areaArray = [
  "cover", "bedroom", "gear", "bedroom"
]

const story = {
    "cover": ["Augmented Reality"]
  ,
    "bedroom": [
    "You open your eyes and look around. You are in your nerded out room with your bed which looked like a spaceship and sci-fi figures everywhere. Star Wars, Star Trek, Aliens, every nerdy franchise you can think of.",
    "But all of that pales in comparison to what arrives today...",
    "Alien Invasion!"
  ],
  "gear": [
    "Alien Invasion was the hottest and most anticipated release of the year.",
    "It was an augmented reality game that cmae with a headset and 'gun', and would augment your vision to show aliens in random places.",
    "Players had to shoot and kill these aliens, and the player who killed the most aliens would receive an invitiation to meet the developers themselves at Area 51."
  ],
  "bedroom": [
    "Seeing what's inside Area 51 is every sci-fi nerd's dream!",
    "'I will definitely being the greatest alien slayer!' you declare loudly as you hold up the gaming equipment."
  ]
}

export default class HomePage extends React.Component {

  state = {
    area: 0,
    text: 0
  }

  next = () => {
    if (this.state.text == story[areaArray[this.state.area]].length - 1) {
      this.setState({
        area: this.state.area + 1,
        text: 0
      })
    } else {
      this.setState({
        text: this.state.text + 1
      })
    }
  }

  render() {
    if (this.state.area == 0) {
      return(
        <div id='homePage'>
          <img src="images/cover.jpg" />
          <p>{story[areaArray[this.state.area]][this.state.text]}</p>
          <p onClick={(event) => {this.next(event)}}>Begin</p>
        </div>
      )
    } else {
      return(
        <div id='homePage'>
          <img src={"images/" + areaArray[this.state.area] + ".jpg"} />
          <p>{story[areaArray[this.state.area]][this.state.text]}</p>
          <p onClick={(event) => {this.next(event)}}>Next</p>
        </div>
      )
    }
  }
}
