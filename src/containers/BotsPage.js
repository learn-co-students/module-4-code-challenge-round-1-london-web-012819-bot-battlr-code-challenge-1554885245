import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const BOTS_URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botsInArmyIds: [],
    botSpecId: null
  }

  getAllBots = () => {
    fetch(BOTS_URL)
      .then(resp => resp.json())
      .then(bots => this.setState({bots: bots}))
  }

  addBotToArmy = (botId) => this.setState({botsInArmyIds: [...this.state.botsInArmyIds, botId]}) 

  armyBots = () => this.state.bots.filter(bot => this.state.botsInArmyIds.includes(bot.id))

  renderBotSpecs = () => {
    const {bots, botSpecId} = this.state
    const bot = bots.find(bot => bot.id === botSpecId)
    
    return <BotSpecs resetBotSpec={this.resetBotSpec} addBotToArmy={this.addBotToArmy} bot={bot}/>
  }

  resetBotSpec = () => this.setState({botSpecId: null})

  setBotSpec = (botId) => this.setState({botSpecId : botId})

  renderBotCollection = () => <BotCollection setBotSpec={this.setBotSpec} bots={this.state.bots}/>

  componentDidMount() {
    this.getAllBots()
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.armyBots()}/>
        {this.state.botSpecId ? this.renderBotSpecs() : this.renderBotCollection()}
      </div>
    );
  }

}

export default BotsPage;
