import { Component } from 'react'
import PropTypes from 'prop-types'

export class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node,
    errorFallback: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
  }

  state = {
    errorElement: null
  }

  componentDidCatch(error, info) {
    console.log('component did catch')
    if (typeof this.props.errorFallback === 'function') {
      this.setState({
        errorElement: this.props.errorFallback(error, info)
      })
    } else if (this.props.errorFallback) {
      this.setState({
        errorElement: this.props.errorFallback
      })
    }
  }

  render() {
    console.log('wow yeah', this.props.errorFallback)
    return this.state.errorElement || this.props.children
  }
}
