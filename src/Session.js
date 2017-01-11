import React, { Component } from 'react';

class Speaker extends Component {
  render() {
    const { firstName, lastName } = this.props
    return (
      <div>{firstName} {lastName}</div>
    )
  }
}

class Session extends Component {
  render() {
    const { title, abstract, speakers } = this.props
    return(
      <div className="session">
        <div>{title}</div>
        <Speaker {...speakers[0]} />
        <div>{abstract}</div>
      </div>
    )
  }
}

Session.propTypes = {
  title: React.PropTypes.string.isRequired,
  abstract: React.PropTypes.string.isRequired
}

export default Session;
