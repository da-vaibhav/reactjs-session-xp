import React, { Component } from 'react'

export default class ChildrenProps extends Component {
  render() {
    return (
      <div>
        following child is passed from parent component
        <br/>
        {this.props.children}
      </div>
    )
  }
}
