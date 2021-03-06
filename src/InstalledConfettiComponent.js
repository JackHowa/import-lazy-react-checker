import * as React from 'react'

function LegitConfettiSuspense({ show, expectFailure }) {
  // should show confetti when shown as this is installed in package.json
  const LazyImportComponent = React.lazy(() => {
    if (!expectFailure) {
      import('react-confetti').catch(() => ({ default: () => <p>Not Found</p> }))
    }
  })



  return (
    <React.Suspense fallback="Loading package">
      {
        show ? (
          <LazyImportComponent />
        ) :
          (
            <p>react-confetti not loaded yet</p>
          )
      }
    </React.Suspense>
  )
}

export default LegitConfettiSuspense;