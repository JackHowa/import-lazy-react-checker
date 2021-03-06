import * as React from 'react';
import LazyCodeSplitter from './LazyCodeSplitter';
// via https://epicreact.dev/importing-react-through-the-ages/
import LegitConfettiSuspense from './LegitConfettiSupsense';

function App() {
  const [targetPackageName, setTargetPackage] = React.useState('')
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
      <form>
        <label>
          Target package name:
          <input type="text" value={targetPackageName} onChange={(e) => setTargetPackage(e.target.value)} name="file-name" />
        </label>
      </form>
      <button onClick={changeConfettiStatus}>Toggle confetti</button>
      <button onClick={changeTargetPackage}>Toggle package that isn't installed</button>
      {
        loadPackageLoader === "show" ? (
          <LazyCodeSplitter packageName={targetPackageName} />
        ) : (
          <p>
            {targetPackageName} not shown
          </p>
        )
      }
      {
        showConfetti === "show" ? (
          <LegitConfettiSuspense />
        ) : (
          <p>
            No confetti shown
          </p>
        )
      }
    </div >
  );
}

export default App;
