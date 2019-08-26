import React, { Component } from 'react'

export default class ClassChild extends Component {
  render() {
    const textColor = this.props.color ? this.props.color: "red";
    return (
      <div style={{ color: textColor }}>
        this is {this.props.name}
      </div>
    )
  }
}
