import React from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "./YourBotArmy";

class BotCollection extends React.Component {
	//your code here

	state = {
		selectedId: null,
		selectedBot: []
	}
	
	selectedCard = (id) => {
		console.log("Hello ", id)
		this.setState({
			selectedId : id
		})		
	}

  render(){
		console.log("State: ", this.state)
		console.log("Props: ", this.props)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} selectedCard={this.selectedCard}/>)}
					<YourBotArmy bot={this.props.bots.find(bot=>bot.id===this.state.selectedId)}/>
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
