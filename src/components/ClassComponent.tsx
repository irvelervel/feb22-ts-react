import { Component } from 'react'

// we're trying to pass a mainTitle prop to ClassComponent,
// but ClassComponent is not expecting it, because by default
// the shape of every props object in a React Component is: {}

// we need to overwrite the default interface for ClassComponents props

interface ClassComponentProps {
  mainTitle: string
  subTitle?: string
}

interface ClassComponentState {
  counter: number
}

// in order to give a Class Component the right interface for its props,
// pass its props interface as its first Type Argument

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state = {
    counter: 0,
  }

  render() {
    return (
      <div>
        <h2>{this.props.mainTitle}</h2>
        <h3>{this.props.subTitle || 'Default Value!'}</h3>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <p>The counter value is: {this.state.counter}</p>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </div>
    )
  }
}

export default ClassComponent
