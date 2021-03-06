import React from "react";

const story = [
  {
    section: 0,
    background: "cover",
    text: ["Augmented Reality"]
  },
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
  {
    section: 10,
    background: "street",
    text: [
      "As you catch your breath, you hear a bell like ring, and something appears in the top right corner of your vision.",
      " 'Alien Soldier killed. + 100 points' ",
      "You forget all about your exhaustion.",
      " 'I killed my first Alien! Hell yes!' you exclaim loudly!",
      "You see movement to your left, and spin around, pointing your gun at the new target.",
      "There you see your friend Dave with his hands up.",
      "He gives you a wave, and you wave back at him.",
      "He was holding the helmet and gun in his hands.",
      "You wait for him to put everything on, but in the meantime, you see another green shape leave the right corner of your vision",
      "You spin to your right and immediately start moving after it.",
      "However, Dave isn't following you.",
      "You look back at him, and see him standing there with the helmet on looking uncertain.",
      "What do you do?"
      {choices: [
        {choice: "Head for the alien. You can ask him what's wrong after!", next: 11}
        {choice: "Ask him what is wrong.", next: 12},
      ]}
    ]
  },
  {
    section: 11,
    background: "park",
    text: [
      "First things first, that Alien!",
      "You can ask him what's wrong after!",
      " 'Come on! I saw one go that way!' you shout as you take off after it.",
      "You turn to see that Dave is following you with a serious looking expression.",
      "You catch sight of the Alien again once you enter the park.",
      "This one looked more like lanky green orangutan, and it moved slowly like it was trying to sneak into the city.",
      "You point your gun at it and squeeze the trigger.",
      "The Alien explodes just like before, and you hear another bell sound.",
      " 'Alien Iniltrator killed. + 50 points' ",
      " 'Only 50 this time huh? Well, I guess it was much less big and scary looking.' you mutter whiel turning to Dave.",
      " 'Did something happen earlier?' you ask him, referring back to his earleir hesitation.",
      "But Dave shakes his head.",
      " 'I think I just mis-saw something. Lets keep hunting!' he declares with a smile."
      "Now hes talking!"
    ]
  },
  {
    section: 12,
    background: "street",
    text: [
      "Dave was always a shoot irst ask questions kind of guy when you played shooters together, so his hesitation seems odd.",
      "You decide to ask what's bother him.",
      "You stop moving and turn to face him with a questioning look.",
      " 'Earlier, you said you saw an alien? To the right?' he asks slowly.",
      "You nod your head and wait for him to continue.",
      " 'The only thing I saw over there was an old man,' ",
      "You pause.",
      " 'Could it be that not everybody sees the same things?' he wonders aloud.",
      " 'Only one way to find out!' you declare, as you move to follow after that alien? that you saw earlier.",
      "Dave nods follows after you."
    ]
  },
  {
    section: 13,
    background: "park",
    text: [
      "You guys roam the park blasting many different types of Aliens and racking up the points.",
      "Alien Warriors, Alien Infiltrators, Alien Dogs which looked kind of like cute greeen puppies, even the occasional Alien Juggernaut, which looked like a cross between a Gorilla and the Rancor and was worth a whopping 500 points.",
      "As you were hunting you often walked by other groups of people hunting as well, and upon eye contacting you guys would nod and raise your guns at each other.",
      " 'This is awesome! This is just like the release of Pokemon GO!' you exclaim, excited about how many other nerds the game managed to make go outside.",
      "After hunting for 2 hours you decide to head back and have dinner.",
      "You say bye to Dave and put an end to the night's hunt."
    ]
  },
  {
    section: 14,
    background: "room",
    text: [
      "You arrive back in your room and stretch after you full day of alien hunting working out.",
      "You look to the upper right corner off your screen.".
      " 'Score: 2950' you read aloud as you take off the helmet and put down the gun.",
      "You wonder how many points Dave has managed to get.",
      "Thinking back on things, you are still unsure if everyone sees the same thing.",
      "Did those guys you saw at the park see the same aliens as you?",
      "Did you and Dave see the same aliens?",
      "You shrug and decide to worry about it tommorow while heading down to dinner."
    ]
  },
  {
    section: 15,
    background: "school",
    text: [
      "At school the next day everybody is talking about Alien Invader.",
      "People are talking about their scores.",
      "700s, 800s, even 1500 from one student, which makes everyone gasp in awe.",
      "You smirk, as just listening you can tell that they won't be able to compete with you.",
      "What scrubs!",
      "You turn over to look at Dave, who is the only one properly paying attention to the teacher.",
      " 'Screw this guy, he is proabbly the best video game player here, yet he's the one who seems the least excited...' you mutter.",
      "For that matter, you remember that you still haven't asked him for his score.",
      "You decide to save that for later, as letting these guys know how much further ahead you are would motivate them to try to catch up.",
      "That tour of Area 51 is yours!",
      "You whittle the day away talking with people about Alien Invader until the bell rings.",
      "You turn to Dave and he matches your gaze.",
      "You signal to meet at your house again and he gives you a nod.",
      "You walk passed the sighing teacher complaining about how nobody listened to a word he said and head home."
    ]
  },
  {
    section: 16,
    background: "park",
    text: [
      "After heading home, picking up the Alien Hunting gear and meeting up with Dave, you are once again at the park.",
      "There are even more people than yesterday day around all with visors and laser guns in their hands.",
      " 'Too bad none of these guys are going to get the prize.' you mutter with a smile on your face.",
      "You raise both guns and take off, shooting every alien in sight, with Dave barely able to keep up with you.",
      "After two hours you sit on a bench exhausted from all that exercise, and take a look at your points.",
      "7500.",
      "You remember that you didn't know Dave's score and turn to ask him.",
      " 'By the way, I forgot to ask you yesterday.' ",
      " 'How many points do you have?' ",
      " 'Around 3500.' he replies, and glances at you waiting for you to mention yours.",
      " 'Wow, I thought you would have much more.' you say, genuinely surprised.",
      " 'I just hit 7500.' you mention reluctantly, unsure of how Dave would react to the point gap between you two.",
      "But Dave simply laughs it of.",
      " 'Because you killed everything with such frenzy that there was nothing left for me.' ",
      " 'It's like Alien's killed your family and you are taking vengeance for them or something.' ",
      "You are relieved by his reaction, as whenever he beats you in video games you often found yourself getting salty, although you did your best not to show it.",
      " 'My bad, I'll try to leave some for you next time, you say with a sheepish smile.' ",
      "But dave just shrugs.",
      " 'You love aliens right?' ",
      "You nod."
      " 'And you are probably more excited about the Area 51 tour then getting a tour of Heaven itself.' ",
      " 'Definitely.' you say with another resolute nod."
      " 'Then don't worry about it.' ",
      " 'Win and get that tour' he says with a reassuring smile.",
      "You smile and give another nod.",
      " 'The tour is for the top 5 players.' ",
      " 'So you better make it as well!' you declare.",
      "Dave grins and puffs out his chest.",
      " 'Of course, who do you think you're talking to?' ",
      "That's right.",
      "Dave is a god at video games, so there is nothing to worry about.",
      "You will both get to enjoy that tour.",
      "Feeling renewed, you jump back to your feet and continue hunting."
    ]
  },
  {
    section: 17,
    background: "bedroom",
    text: [
      "Another productive day of hunting.",
      "You glace over at your points.",
      "9350",
      "You take off your gear and head down for dinner.",
    ]
  },
  {
    section: 18,
    background: "livingroom",
    text: [
      "You find your mom downstairs with her arms crossed and a stern look on her face.",
      " 'Both today and yesterday you have been staying outside really late.' ",
      " 'But moooooom' you being in a whiny voice, before she cuts you off with a annoyed glare.",
      "You sigh and start explaining Alien Invader to your mom, about how it is an augmented reality game that only works at night.",
      "She barely has any reaction.",
      "Man, trying to explain hip technology to your parents is a real pain.",
      " 'It doesn't matter what kind of reality it is, being out so late is dangerous.' she declares adamantly.",
      " 'Yeah yeah I got it' you say brushing her off while waving your hands.",
      "She sighs and passes you your dinner, which you thank her for and proceed to inhale.",
      "After you're done you head back to your room and prepare for the next day, counting exploding aliens to help you sleep."
    ]
  },
  {
    section: 19,
    background: "school",
    text: [
      "Once again the class is excitedly talking about Alien Invader.",
      "The highest score you hear mentioned is 3000.",
      "At this rate you could almost stop hunting now and win already.",
      "Of course, hunting aliens was awesome and you weren't about to stop anyway.",
      "Still, you wonder if their low scores is related to you slaughtering everything first?",
      "The teacher comes and tries to start teaching, but is promptly ignored again.",
      "You almost feel bad for him.",
      "He looks dejected for a little bit, but shortly after he raises his head with determined look in his eyes.",
      " 'ATTENTION CLASS' he bellows in a loud voice.",
      "The class is surprised by him suddenly raising his voice and stares silently at him.",
      " 'So, how many aliens did you kills last night?' ",
      "The class erupts into cheering, and the Alien Invader discussion continues, now with the teacher included.",
      "You excitedly join the conversation, although you continue to make sure your score is a secret.",
      "Time flies by and school ends almost instantly."
    ]
  },
  {
    section: 20,
    background: "livingroom",
    text: [
      "You arrive home and head straight to your room to pick up your alien hunting gear.",
      "But you see your mom watching TV with a serious expression on her face in the living room.",
      "Weird."
      "Your mom was never one to watch TV for entertainment.",
      "She notices you and beckons you over.",
      " 'Take a look at this' she says in a grave voice while pointing to the TV.",
      "A news channel is on.",
      " 'Three people have been found in a coma lying on the streets at _____ neighborhood.' ",
      " 'They were found at 7 am in the morning when a jogger reported seeing an unconscious person lying on the floor.' ",
      " 'When police arrived to investigate a call, it reveals that people have seen several people in a similar state.' ",
      " 'Three people were found so far, it is unknown if there were more.' ",
      " 'All of them so far were found wearing the equipment for popular new augmented reality game Alien Invader.' ",
      " 'Those found appear to be in stable condition with no injuries, but so far remain unconscious in the hospital.' ",
    ]
  },
  {
    section: 21,
    background: "livingroom",
    text: [
      "Your mom turns to look at as you.",
      " 'I don't think you should keep going out at night. It might be dangerous.' ",
      " 'But if I stop, other people will pass me!' you say in horror.",
      " 'Pass you?' your mom tilts her head in confusion.",
      " 'The winner gets a trip to Area 51 to talk to scientists about aliens. I told you ebfore didn't I? ",
      " 'Whatever, is that trip worth being attacked and getting sent to the hospital?' your mom demands.",
      " 'It'll be fine. It's just a coincidence, the news said that nobody was injured, so there's no proof that anyone was actually attacked.' ",
      " 'Besides, Alien Invader is being played by literally everyone right now, even my teacher. It's no surprise if there were some people who weren't watching where they were going and tripped and hit their heads on something.' '",
      "Your mom ponders your words for a moment and shurgs.",
      " 'I guess that makes sense. Just make sure you are careful when you're playing outside okay?' ",
      "That was easier than you thought.",
      "You flash her a smile and do your best to assuage her worries.",
      " 'Don't worry, I'll be careful mom, Besides, Dave will be with me, so nothing's gonna happen.' ",
      " 'Speaking of which, he is probably waiting for me at the park right now, so I gotta go.' ",
      "Your mom nods and you run passed her to your room and gather your things.",
      "Within a minute you are out the door and headed for the park.",
      "It's great that mom is so reasonable."
    ]
  },
  {
    section: 22,
    background: "park",
    text: [
      "When you get to the park you find Dave already there waiting.",
      " 'Sorry to keep you waiting!' you shout as you run up to him.",
      " 'Don't worry, I just got here a little bit too. Parents saw the news?' ",
      "You sigh and nod.",
      " 'Did you get lectured about it as well?' you ask.",
      "Dave nods.",
      " 'Apparently a bunch of people with Alien Invader gear on were found unconscious in the morning. What do you think of it?' Dave looks over to you.",
      " 'It's probably people who got to focused on chasing aliens and weren't watching where they were going and fell or something. It might even just be who have weak hearts and got scared to death by an alien popping out of nowhere.' you say dismissively.",
      " 'So many people are playing there is bound to be some dumb people or old people who do those things, ya know?' ",
      " '...' "
      "You look over at Dave, who hasn't responded yet.",
      "For a moment he looks deep in thought for a moment, but almost instantly he is back to his usual self.",
      " 'That makes sense.' he says with a nod.",
      "You stretch and change the topic.",
      " 'So, ready to hunt some alien scum?' you ask as you put on the visor.",
    ]
  },
  {
    section: 23,
    background: "firePark",
    text: [
      "Thes second you do, everything is different.",
      "The park is in shambles, benches and lamposts are bent and broken broken.",
      "Debris is scattered everywhere, and large regions of the park are on fire.",
      "It looks like a scene straight out of a war movie.",
      "As you take in the hellish scenery, a loud rumble turns your attention to the right.",
      "Out of the flaming tres emerges an beastial alien bigger than the size of a house.",
      "It lets a beastial roar that makes your heart stop, and it charges straight at you."
    ]
  },
  {
    section: 24,
    background: "destroyedPark",
    text: [
      "You immediately aim for its head and take a shot.",
      "A direct hit!",
      "Right between the eyes!",
      "But before you even have time to celebrate the creature is upon you and swipes its arm which looks more like a gigantic tree trunk at you.",
      "You throw youself back and barely avoid crashing into a bench.",
      "You look up and see that above the monsters head is an enormous green bar.",
      "To the right it a small red chip.",
      "You immediately register it as an hp bar.",
      "The red must be the damage your earlier shot inflicted.",
      "About 3% health missing.",
      "You unload shot after shot at the juggernaut in front of you as you desperately run away from it and try to avoid running into things.",
      "Each shot barely moves its hp bar.",
      "You have only took out about 30% when you cna feel your legs screaming at you to stop.",
      "You see his claws approaching your vision extremely fast.",
      "And the next second your vision explodes into a spray of red."
    ]
  },
  {
    section: 24,
    background: "bloodyVision",
    text: [
      "You scream and fall backwards, desperately trying to get away from the alien in front of you.",
      "Your vision is gone, all you see is black and red.",
      "A wave of fear courses through your entire body, but you feel a strong grip on your arm.",
      " 'It's just the AR! Calm down!' ",
      "Recognizing your friend's voice, you blindly reach towards your eyes and your arm crashes into your headset.",
      "You desperately tear it off your head, once again revealing the quiet scenery off the night park.",
      "You breathe out quick and heavy breaths, both for all the running you did earlier and as you try to calm yourself from what you just experienced.",
      " 'Was that... death?' you mutter, staring at the head gear in your hands.",
      " 'The game manual didn't mention anything about dying' Dave replies from next to you, having taken off his head gear as well.",
      " 'What happened?' ",
      " 'When I saw that thing claws about to reach me, I saw my life flashing before my eyes. Like when you are looking down at the top of a rollercoaster.' ",
      " 'Then all I saw was blood. I thought I had my eyes gouged out.' ",
      " 'That realistic?' ",
      " 'Yeah. I can definitely see people having a heart attack or something if this happened to them.' you say with your voice still unsteady.",
      " 'It almost happened to you right now after all.' Dave said with a chuckle.",
      "You leap back to your feet and wipe the dirt off of your pants.",
      " 'Okay that thing's doing down this time.' you declare and raise your headgear."
      " 'Ready?' ",
      "Dave shows his answer by putting by raising his headgear as well."
      " 'It's alien hunting time!' you shout as both of you return back to the game."
    ]
  },
  {
    section: 25,
    background: "destroyedPark",
    text: [
      "You and Dave spend the next hour running from the boss while steadily chipping its life down.",
      "Your determination to take revenge on this overgrown gorilla for makng you look dumb earlier outweighs the pain you feel in your legs from running.",
      "Eventually the monster finally falls.",
      "You hear fanfare and on the top right of your screen you see the point gain.",
      "3000 points.",
      "Your jaw drops at the enormous amount of points.",
      "That was almost half of your total points!",
      "All it akes is a couple of these bosses and someone would be able to pass you instantly!",
      "And if future bosses gave even more, then you would fall even further behind!",
      "If you wanted to stay a head, you would have to do your best to hunt down any future bosses that spawn.",
      "Luckily for you, you didn't see anyone else the entire time you and Dave were fighting this boss.",
      "This means you are now even further ahead of everyonee else now!",
      "And Dave should be up there with you as well!",
      "But were things that simple?"
    ]
  },
  {
    section: 26,
    background: "park",
    text: [
      "Each night you have been here you have seen tons of people.",
      "Based on their actions the aliens generated for each person were different, aside from you and Dave for some reason.",
      "That could mean that only you and Dave saw this boss.",
      "But it could mean that people saw a boss at a different time, since you are unsure of why this one spawned now, or whether or not it was even triggered based on a condition.",
      "But more importantly, tonight is the one night where you did not see other people at all, and you ran a lot.",
      "Could there be a correlation between the lack or people and the spawning of this boss?"
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
