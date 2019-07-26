import React, { Suspense, useState, useEffect } from 'react'

import { ErrorBoundary } from '../ErrorBoundary'

export class MySuspense extends React.Component {
  render() {
    const { fallback, ...props } = this.props

    return (
      <ErrorBoundary errorFallback={this.props.errorFallback}>
        <Suspense
          fallback={<Timeout timeout={1000}>{fallback}</Timeout>}
          {...props}
        />
      </ErrorBoundary>
    )
  }
}

function Timeout({ timeout, children }) {
  const [shouldRender, setShouldRender] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShouldRender(true)
    }, timeout)
  })

  if (!shouldRender) {
    return null
  }

  return children
}
