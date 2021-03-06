import * as React from 'react'

function NonInstalledPackage({ show }) {
  // should catch and show Not found when shown
  // hack via https://github.com/webpack/webpack/issues/196#issuecomment-172775900
  // passing in the string alone doesn't work
  const nonInstalledPackageString = 'non-installed-package'
  const LazyImportComponent = React.lazy(() => import(`${nonInstalledPackageString}`).catch(() => ({ default: () => <p>Not Found</p> })))

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