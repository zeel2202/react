import React, { Component } from 'react'
import { PureComponent } from 'react';

export class ClassComp extends PureComponent {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
  render() {
    console.log('render');
    return (
      <div>PureComponent {this.state.count}
      <button onClick={()=>this.setState({count:10})}>count</button>
      </div>
    )
  }
}

export default ClassComp