import React from "react";

const story = [
  {
    section: 0,
    background: "cover",
    text: ["Augmented Reality"]
  }
  ,
  {
    section: 1,
    background: "bedroom",
    text: [
      "You open your eyes and look around. You are in your nerded out room with your bed which looked like a spaceship and sci-fi figures everywhere. Star Wars, Star Trek, Aliens, every nerdy franchise you can think of.",
      "But all of that pales in comparison to what arrives today...",
      "Alien Invasion!"
    ]
  },
  {
    section: 2,
    background: "gear",
    text: [
      "Alien Invasion was the hottest and most anticipated release of the year.",
      "It was an augmented reality game that cmae with a headset and 'gun', and would augment your vision to show aliens in random places.",
      "Players had to shoot and kill these aliens, and the player who killed the most aliens would receive an invitiation to meet the developers themselves at Area 51."
    ]
  },
  {
    section: 3,
    background: "bedroom",
    text: [
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
      {choices: [
        {choice: "Wait for him.", next: 4},
        {choice: "Get a head start.", next: 5}
      ]}
    ]
  },
  {
    section: 4,
    background: "bedroom",
    next: 6,
    text: [
      "You decide to wait for Dave to get started.",
      "You promised him after all.",
      "You put the box back down and continue to stare at the nerdy posters on your walls.",
      "About half an hour later, you hear your door bell ring.",
    ]
  },
  {
    section: 5,
    background: "bedroom",
    text: [
      "You decide to get a head start.",
      "Dave will finally be the one chasing after you this time!"
    ]
  }
  {
    section: 6,
    background: "entrance",
    text: [
      "You rush downstairs to find Dave at the door, in his hands is the same Alien Invasion game you had earlier.",
      " 'Ready to go destroy some aliens?!' you say with barley hidden excitement.",
      " 'You're really looking forward to this huh?' Dave replies.",
      " 'Of course!' ",
      " 'IF there is anything I love more than space and aliens, its hunting aliens!' you respond cheerfully."
    ]
  }
]

export default class HomePage extends React.Component {

  state = {
    section: 0,
    text: 0
  }

  next = () => {
    if (this.state.text == story[this.state.section].text.length - 1) {
      this.setState({
        section: this.state.section + 1,
        text: 0
      })
    } else {
      this.setState({
        text: this.state.text + 1
      })
    }
  }

  makeChoice = (event) => {
    console.log(event)
    this.setState({
      section: event,
      text: 0
    })
  }

  generateChoices = () => {
    return story[this.state.section].text[this.state.text].choices.map(
      choice => <p onClick={(event) => {this.makeChoice(choice.next)}}>{choice.choice}</p>
    )
  }

  render() {
    if (this.state.section == 0) {
      return(
        <div id='homePage'>
          <img src="images/cover.jpg" />
          <p>{story[this.state.section].text[this.state.text]}</p>
          <p onClick={(event) => {this.next(event)}}>Begin</p>
        </div>
      )
    } else {
      if (Object.values(story[this.state.section].text[this.state.text]).length == 1) {
        return(
          <div id='homePage'>
            <img src={"images/" + story[this.state.section].background + ".jpg"} />
            {this.generateChoices()}
          </div>
        )
      } else {
        return(
          <div id='homePage'>
            <img src={"images/" + story[this.state.section].background + ".jpg"}  />
            <p>{story[this.state.section].text[this.state.text]}</p>
            <p onClick={(event) => {this.next(event)}}>Next</p>
          </div>
        )
      }
    }
  }
}
