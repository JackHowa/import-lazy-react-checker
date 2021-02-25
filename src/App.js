import * as React from 'react';
// via https://epicreact.dev/importing-react-through-the-ages/

function App() {
  const [targetFileName, setTargetFileName] = React.useState('')

  // check if something is importable 
  // import a function that says it's importable 
  // make sure that function or element 
  // https://stackoverflow.com/questions/53326353/dynamically-import-a-react-component-if-that-file-exists-otherwise-show-a-defau/53326847
  const FileExistsChecker = React.lazy(() => import(`./${targetFileName}.js`).catch(() => ({ default: () => <div>Not Found</div> })))

  return (
    <div className="App">
      <p>Try NewYa, Ya, or Kramer. Watch the network tab for the chunks.</p>
      <form>
        <label>
          Target file name:
          <input type="text" value={targetFileName} onChange={(e) => setTargetFileName(e.target.value)} name="file-name" />
        </label>
      </form>
      {targetFileName && <p>Test if file {targetFileName} exists</p>}
      <React.Suspense fallback={<p>Checking that file for ya...</p>}>
        {
          <FileExistsChecker />
        }
      </React.Suspense>
    </div >
  );
}

export default App;
