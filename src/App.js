import * as React from 'react';
// via https://epicreact.dev/importing-react-through-the-ages/

import LegitConfettiSuspense from './InstalledConfettiComponent';
import NonInstalledPackage from './NonInstalledPackage'

function App() {
  const [showConfetti, setConfettiStatus] = React.useState('hide');
  const [loadPackageLoader, toggleShowPackageLoader] = React.useState('hide')
  const changeConfettiStatus = () => setConfettiStatus(prevStatus => {
    if (prevStatus === 'hide') {
      return 'show'
    } else {
      return 'hide'
    }
  })

  const changeTargetPackage = () => toggleShowPackageLoader(prevStatus => {
    if (prevStatus === 'hide') {
      return 'show'
    } else {
      return 'hide'
    }
  })

  return (
    <div className="App">
      <p>Type to see if the file exists in the in the app</p>
      <p>Watch the network tab for the chunks imported dynamically.</p>
      <p>But ... if the file does exist, it will render.</p>

      <button onClick={changeConfettiStatus}>Toggle confetti</button>
      <button onClick={changeTargetPackage}>Toggle package that isn't installed</button>

      <NonInstalledPackage show={loadPackageLoader === 'show'} expectFailure={true} />
      <LegitConfettiSuspense show={showConfetti === "show"} expectFailure={false} />
    </div >
  );
}

export default App;
