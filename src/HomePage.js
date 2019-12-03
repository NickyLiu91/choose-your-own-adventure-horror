import React from "react";

let areaArray = [
  "cover", "bedroom", "gear", "bedroom"
]

// const story = {
//     "cover": ["Augmented Reality"]
//   ,
//     "bedroom": [
//     "You open your eyes and look around. You are in your nerded out room with your bed which looked like a spaceship and sci-fi figures everywhere. Star Wars, Star Trek, Aliens, every nerdy franchise you can think of.",
//     "But all of that pales in comparison to what arrives today...",
//     "Alien Invasion!"
//   ],
//   "gear": [
//     "Alien Invasion was the hottest and most anticipated release of the year.",
//     "It was an augmented reality game that cmae with a headset and 'gun', and would augment your vision to show aliens in random places.",
//     "Players had to shoot and kill these aliens, and the player who killed the most aliens would receive an invitiation to meet the developers themselves at Area 51."
//   ],
//   "bedroom": [
//     "Seeing what's inside Area 51 is every sci-fi nerd's dream!",
//     "'I will definitely being the greatest alien slayer!' you declare loudly as you hold up the gaming equipment."
//   ]
// }

const story = [
    {"cover": ["Augmented Reality"]}
  ,
    {"bedroom": [
    "You open your eyes and look around. You are in your nerded out room with your bed which looked like a spaceship and sci-fi figures everywhere. Star Wars, Star Trek, Aliens, every nerdy franchise you can think of.",
    "But all of that pales in comparison to what arrives today...",
    "Alien Invasion!"
  ]},
  {"gear": [
    "Alien Invasion was the hottest and most anticipated release of the year.",
    "It was an augmented reality game that cmae with a headset and 'gun', and would augment your vision to show aliens in random places.",
    "Players had to shoot and kill these aliens, and the player who killed the most aliens would receive an invitiation to meet the developers themselves at Area 51."
  ]},
  {"bedroom": [
    "Seeing what's inside Area 51 is every sci-fi nerd's dream!",
    "'I will definitely being the greatest alien slayer!' you declare loudly as you hold up the gaming equipment.",
    "You tear open the package and reveal the glorious alien slaying box set in front of you.",
    "You then remember that you and your best friend Dave made plans to start the game together.",
    "Dave is a video gaming diety.",
    "Any game he picks up he becomes great insantly, then gets bored and quits.",
    "He has even been scouted for pro teams for a variety of games already.",
    "In contrast you put in countless hours into all of the games and have never been top tier.",
    " 'Curse you Dave!' you mutter in your heart.",
    "Perhaps you can get a head start on him with Alien Invasion and finally surpass him?",
    {"choice": ["Wait for him.", "Get a head start."]}
  ]}
]

export default class HomePage extends React.Component {

  state = {
    area: 0,
    text: 0,
    choice: ''
  }

  next = () => {
    // if (this.state.text == story[areaArray[this.state.area]].length - 1) {
    //   this.setState({
    //     area: this.state.area + 1,
    //     text: 0
    //   })
    // } else {
    //   this.setState({
    //     text: this.state.text + 1
    //   })
    // }
    // console.log(this.state.text)
    console.log(Object.keys(story[this.state.area]))
    console.log(Object.values(story[this.state.area])[0])
    console.log(Object.values(story[this.state.area])[0][this.state.text])
    // console.log(Object.keys(story[this.state.area]))
    // console.log(Object.values(story[this.state.area])[0])
    if (this.state.text == Object.values(story[this.state.area])[0].length - 1) {
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

  makeChoice = (event) => {
    this.setState({
      choice: event
    })
  }

  generateChoices = () => {
    return Object.values(Object.values(story[this.state.area])[0][this.state.text])[0].map(
      choice => <p onClick={(event) => {this.makeChoice(choice)}}>{choice}</p>
    )
  }

  render() {
    if (this.state.area == 0) {
      return(
        <div id='homePage'>
          <img src="images/cover.jpg" />
          <p>{Object.values(story[this.state.area])[0][this.state.text]}</p>
          <p onClick={(event) => {this.next(event)}}>Begin</p>
        </div>
      )
    } else {
      if (Object.keys(Object.values(story[this.state.area])[0][this.state.text])[0] == "choice") {
        return(
          <div id='homePage'>
            <img src={"images/" + Object.keys(story[this.state.area])[0] + ".jpg"} />
            {this.generateChoices()}
          </div>
        )
      } else {
        return(
          <div id='homePage'>
            <img src={"images/" + Object.keys(story[this.state.area])[0] + ".jpg"} />
            <p>{Object.values(story[this.state.area])[0][this.state.text]}</p>
            <p onClick={(event) => {this.next(event)}}>Next</p>
          </div>
        )
      }
    }
  }
}
