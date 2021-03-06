import * as React from 'react'

function NonInstalledPackage({ show, expectFailure }) {
  // should catch and show Not found when shown
  // hack via https://github.com/webpack/webpack/issues/196#issuecomment-172775900
  // passing in the string alone doesn't work
  const LazyImportComponent = React.lazy(() => {
    if (!expectFailure) {
      // Module not found: Can't resolve 'non-installed-package' in '/Users/howardj/sites/learning/did-i-commit-this-file-or-nah/src'
      import('non-installed-package')
    }
  })

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