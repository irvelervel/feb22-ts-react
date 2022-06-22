import { Component } from 'react'

// we're trying to pass a mainTitle prop to ClassComponent,
// but ClassComponent is not expecting it, because by default
// the shape of every props object in a React Component is: {}

// we need to overwrite the default interface for ClassComponents props

interface ClassComponentProps {
  mainTitle: string
}

// in order to give a Class Component the right interface for its props,
// pass its props interface as its first Type Argument

class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <div>
        <h2>{this.props.mainTitle}</h2>
      </div>
    )
  }
}

export default ClassComponent
