import React from "react";

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
          <img src="images/cover.jpg" />
          <p>Text</p>
          <p>Text</p>
          <p>Text</p>
        </div>
      )
    }
  }
}
