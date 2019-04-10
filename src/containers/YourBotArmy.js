import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

selectedBot = (id) => {
  this.props.removeSelected(id)
}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
        Your Bot Army 
          <div className="row bot-army-row">
            {this.props.selectedBot.map(bot=> <BotCard key={bot.id} bot={bot} selectedBot={this.selectedBot}/>)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
