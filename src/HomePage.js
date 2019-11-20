import React from "react";

let areaArray = [
  "cover", "bedroom"
]

const story = {
    "cover": ["Augmented Reality"]
  ,
    "bedroom": [
    "You open your eyes and look around. You are in your nerded out room with your bed which looked like a spaceship and sci-fi figures everywhere. Star Wars, Star Trek, Aliens, every nerdy franchise you cna think of.",
    "But all of that pales in comparison to what arrives today..."
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
    return(
      <div id='homePage'>
        <img src={"images/" + areaArray[this.state.area] + ".jpg"} />
        <p>{story[areaArray[this.state.area]][this.state.text]}</p>
        <p onClick={(event) => {this.next(event)}}>Begin</p>
      </div>
    )
    // if (this.state.show == 'home') {
    //   return(
    //     <div id='homePage'>
    //       <img src="images/cover.jpg" />
    //       <p>{story[areaArray[area]][text]}</p>
    //       <p onClick={(event) => {this.next(event)}}>Begin</p>
    //     </div>
    //   )
    // } else if (this.state.show == "begin") {
    //   return(
    //     <div id='homePage'>
    //       <img src="images/bedroom.jpg" />
    //       <p></p>
    //     </div>
    //   )
    // }
  }
}
