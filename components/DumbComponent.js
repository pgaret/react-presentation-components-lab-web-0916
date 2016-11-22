const React = require('react')

class DumbComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {mood: 'happy'}
    this.toggleMood = this.toggleMood.bind(this)
  }

  toggleMood(){
    this.setState({mood: 'sad'})
    // this.state.mood === "happy" ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
  }

  render(){
    return <div onClick={this.toggleMood}>{this.state.mood}</div>
  }
}

module.exports = DumbComponent
