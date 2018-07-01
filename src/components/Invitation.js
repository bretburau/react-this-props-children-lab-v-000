// Code Invitation Component Here
import React from 'react';



export default class Invitation extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child)
    })
    return(
      <div>
        <h1>You've been invited!</h1>
        {childrenWithProps}
      </div>
    )
  }
}