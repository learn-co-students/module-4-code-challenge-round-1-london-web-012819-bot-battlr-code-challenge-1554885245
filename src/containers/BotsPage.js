import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    selectedBot: []
  }
  
  selectedBot = (id) => {
    this.newBot = this.state.bots.find(bot => bot.id === id)
    if (!this.state.selectedBot.includes(this.newBot)){
      this.setState({
        selectedBot: [...this.state.selectedBot, this.newBot]
      })
    }
  }

  removeSelected = (id) => {
    this.setState({
      selectedBot: this.state.selectedBot.filter(bot => bot.id != id)
    })
  }

  componentDidMount = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then(data => this.setState({
      bots: data
    }))
  }

  render() {
    return (
      <div>   
        <YourBotArmy removeSelected={this.removeSelected} selectedBot={this.state.selectedBot}/>
        <BotCollection bots={this.state.bots} selectedBot={this.selectedBot} />
      </div>
    );
  }

}

export default BotsPage;
