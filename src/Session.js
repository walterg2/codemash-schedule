import React, { Component } from 'react';

class Speaker extends Component {
  render() {
    const { firstName, lastName } = this.props
    return (
      <div>{firstName} {lastName}</div>
    )
  }
}

class Room extends Component {
  render() {
    const { room } = this.props
    return (
      <div>{room}</div>
    )
  }
}

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  };

  toggleState(e) {
    e.preventDefault();
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  render() {
    const { Title, Abstract, Speakers, Rooms, SessionStartTime, SessionEndTime, SessionType } = this.props
    const {showDetails} = this.state;
    console.log(this.props);
    return(
      <div className="session">
        <div>
          <a href='' onClick={this.toggleState.bind(this)}>{Title}</a>
        </div>
        { showDetails && <div>{Abstract}</div> }

        <Speaker {...Speakers[0]} />
        <Room {...Rooms[0]} />
        <div>{SessionStartTime}</div>
        <div>{SessionEndTime}</div>
        <div>{SessionType}</div>
      </div>
    )
  }
}

Session.propTypes = {
  Title: React.PropTypes.string.isRequired,
  Abstract: React.PropTypes.string.isRequired,
  Speakers: React.PropTypes.array.isRequired,
  Rooms: React.PropTypes.array.isRequired,
  SessionStartTime: React.PropTypes.string.isRequired,
  SessionEndTime: React.PropTypes.string.isRequired,
  SessionType: React.PropTypes.string.isRequired
}

export default Session;
