import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	
	renderBotCards = () => this.props.bots.map(bot => <BotCard setBotSpec={this.props.setBotSpec} bot={bot}/>)

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
