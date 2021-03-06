import * as React from 'react'
function LegitConfettiSuspense() {

  // still gets warning 
  //   ./src/LazyCodeSplitter.js
  // Critical dependency: the request of a dependency is an expression
  const LazyImportComponent = React.lazy(() => import('react-confetti').catch(() => ({ default: () => <p>Not Found</p> })))

  return (
    <React.Suspense fallback="Loading package">
      <LazyImportComponent />
    </React.Suspense>
  )
}

export default LegitConfettiSuspense;