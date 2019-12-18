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
    next: 7,
    text: [
      "You decide to get a head start.",
      "Dave will finally be the one chasing after you this time!",
      "You open the box and pull out the equipment.",
      "A helmet with a visor and headset attached, and something that looks like a classic laser gun.",
      "You search the box, but find no instructions.",
      "You decide to try on the helmet to figure things out for yourself.",
      "As soon as you put on the visor, your vision fades to black.",
    ]
  },
  {
    section: 6,
    background: "entrance",
    text: [
      "You rush downstairs to find Dave at the door, in his hands is the same Alien Invasion game you had earlier.",
      " 'Ready to go destroy some aliens?!' you say with barley hidden excitement.",
      " 'You're really looking forward to this huh?' Dave replies.",
      " 'Of course!' ",
      " 'If there is anything I love more than space and aliens, its hunting aliens!' you respond cheerfully."
    ]
  },
  {
    section: 7,
    background: "virtual",
    text: [
      "After a couple of seconds, words start to materialize in front of you.",
      " 'Welcome to Alien Invader!' ",
      " 'The goal of the game is to hunt the most Aliens!' ",
      " 'Aliens can be killed by pointing the attached laser gun at them, blowing them into pieces.' ",
      " 'Each of your alien kills will be tracked, and the person who successfully hunted the most Aliens will be declared the winner!' ",
      " 'The winner will be invited to meet with the developers and given a tour of Area 51, as a reward for your dedication to Aliens!' ",
      " 'Note: The augmented reality effects will only take place after 6:00 pm night time.' ",
      " 'This is to make the experience as epic as possible.' ",
      " 'If used during the day they will simply be a heavy pair of glasses.' ",
      "Your vision then fades to black again."
    ]
  },
  {
    section: 8,
    background: "bedroom",
    text: [
      "Color starts slowly going back into your vision, and the sight of your awesome room appear again.",
      " 'I can barely tell I'm looking through a lens.' you mutter to yourself as you look around the room. ",
      "Your eyes land on the Star Wars clockby your bedside.",
      "6:30 pm",
      " 'Time for a test run!' you declare while sprinting downstairs."
    ]
  },
  {
    section: 9,
    background: "street",
    text: [
      "You leave your house and walk down the mostly empty street.",
      "A large, green, form appears in front of you.",
      "You jump back in surprise, before realizing what this thing is.",
      "An alien!",
      "It has a humanoid shape, but much taller and more muscular.",
      "It looked like a cross between a fantasy Orc and Predator from that famous movie.",
      "As you stare at it in fascination, you get pulled back to reality when it lets out a loud roar and charges at you.",
      "You instinctively turn and sprint the other way.",
      "You turn to see it barreling down the street hot on your heels.",
      "At this rate, it's going to catch you and eat you, or whatever aliens do to people they catch!",
      "Your breath starts to catch in your throat, probably a result of sitting in your room and reading and watching movies about Aliens all day.",
      "It is almost within grabbing range, and your fist hurts from how hard you are gripping onto something.",
      "Then it hits you, you spin around as the Alien reaches for your face, and throw up right arm which holds the gun part of the kit.",
      " 'DIE ALIEN SCUM!' you shout as you press the button, sending a red laser at the alien in front of you.",
      "The alien explodes into an unrecognizable chunk of blood and flesh.",
    ]
  },
]

export default class HomePage extends React.Component {

  state = {
    section: 0,
    text: 0
  }

  next = (event) => {
    if (this.state.text == story[this.state.section].text.length - 1) {
      if (event.next != null){
        this.setState({
          section: event.next,
          text: 0
        })
      } else {
        this.setState({
          section: this.state.section + 1,
          text: 0
        })
      }
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
          <p onClick={(event) => {this.next(story[this.state.section])}}>Begin</p>
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
            <p onClick={(event) => {this.next(story[this.state.section])}}>Next</p>
          </div>
        )
      }
    }
  }
}
