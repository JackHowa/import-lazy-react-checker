import * as React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }


  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
function LazyCodeSplitter(props) {
  const { packageName } = props;

  // still gets warning 
  //   ./src/LazyCodeSplitter.js
  // Critical dependency: the request of a dependency is an expression
  const LazyImportComponent = React.lazy(() => import(packageName).catch(() => ({ default: () => <p>Not Found</p> })))

  return (
    <ErrorBoundary>
      <React.Suspense fallback="Loading package">
        <LazyImportComponent />
      </React.Suspense>
    </ErrorBoundary>

  )
}

export default LazyCodeSplitter;