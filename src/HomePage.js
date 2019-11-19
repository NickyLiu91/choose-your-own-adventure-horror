import React from "react";

export default class HomePage extends React.Component {

  state = {
    show: 'home'
  }

  render() {
    if (this.state.show == 'home') {
      return(
        <div id='homePage'>
        <img src="images/cover.jpg" />
        <p>Augmented Reality</p>
        <p onClick={() => {console.log("hi")}}>Begin</p>
        </div>
      )
    }
  }
}
