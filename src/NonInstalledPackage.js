import * as React from 'react'

function NonInstalledPackage({ show }) {
  // should catch and show Not found when shown
  const LazyImportComponent = React.lazy(() => import('non-installed-package').catch(() => ({ default: () => <p>Not Found</p> })))

  return (
    <React.Suspense fallback="Loading package">
      {
        show ? (
          <LazyImportComponent />
        ) :
          (
            <p>non-installed-package not loaded yet</p>
          )
      }
    </React.Suspense>
  )
}

export default NonInstalledPackage;