/**
 * Main.js.js
 * @author kisnows
 * Created 2015-12-21
 */
import React, { PropTypes, Component } from 'react'
  
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Hellow World!",
      count : 0,
    }
  }

  handleClick(e) {
    if (e.target.tagName.toLowerCase() === 'span') {
      if (this.className === 'tab_current') {
        return false;
      }
    }
   
    this.state.count++;
  }

  render() {
    return (
      <div className="main box">
	{this.state.msg};
        <div className="cell tabs" id="Tabs" onClick={this.handleClick.bind(this)}>
          <span className="tab">技术</span>
          <span className="tab_current">最热</span>
        </div>
      </div>
    )
  }
}
