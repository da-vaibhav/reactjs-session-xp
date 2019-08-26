import React, { Component } from 'react'

export default class ClassChild extends Component {
  render() {
    return (
      <div>
        this is {this.props.name}
      </div>
    )
  }
}
