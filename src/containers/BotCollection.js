import React from "react";
import BotCard from "../components/BotCard";


class BotCollection extends React.Component {
	//your code here

  render(){
  	return (
  	  <div className="ui four column grid">
			Collection of all bots
    		<div className="row">
					{this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} selectedBot={this.props.selectedBot}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
