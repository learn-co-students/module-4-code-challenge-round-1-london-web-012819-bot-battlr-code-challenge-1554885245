import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import SearchBots from '../components/SearchBots'
import SortBots from '../components/SortBots'

const BOTS_URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botsInArmyIds: [],
    botSpecId: null,
    searchTerm: "",
    sortByName: false
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

  updateSearch = (event) => this.setState({searchTerm: event.target.value})

  filteredBots = () => this.state.bots.filter(bot => bot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

  resetBotSpec = () => this.setState({botSpecId: null})

  setBotSpec = (botId) => this.setState({botSpecId : botId})

  renderBotCollection = () => <BotCollection setBotSpec={this.setBotSpec} bots={this.botsSortedByName(this.filteredBots())}/>

  updateNameSort = () => this.setState({sortByName: !this.state.sortByName})

  botsSortedByName = (bots) => {
    if (this.state.sortByName) {
      return bots.sort((a,b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    }
    else {
      return bots
    }
  }

  componentDidMount() {
    this.getAllBots()
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.armyBots()}/>
        <SearchBots updateSearch={this.updateSearch}/>
        <SortBots updateNameSort={this.updateNameSort}/>
        <br/>
        {this.state.botSpecId ? this.renderBotSpecs() : this.renderBotCollection()}
      </div>
    );
  }

}

export default BotsPage;
