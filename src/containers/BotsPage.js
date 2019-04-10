import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: []
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
        {<BotCollection bots={this.state.bots}/>}
      </div>
    );
  }

}

export default BotsPage;
