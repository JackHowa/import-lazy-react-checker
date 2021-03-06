import * as React from 'react';
// via https://epicreact.dev/importing-react-through-the-ages/

function App() {
  const [targetFileName, setTargetFileName] = React.useState('')

  // check if something is importable 
  // import a function that says it's importable 
  // make sure that function or element 
  // https://stackoverflow.com/questions/53326353/dynamically-import-a-react-component-if-that-file-exists-otherwise-show-a-defau/53326847
  const DynamicFileRendered = React.lazy(() => import(`./${targetFileName}.js`).catch(() => ({ default: () => <p>Not Found</p> })))

  return (
    <div className="App">
      <p>Type to see if the file exists in the in the app</p>
      <p>Try NewYa, Ya, or Kramer. Watch the network tab for the chunks imported dynamically.</p>
      <p>You will see not found if the file you're typing exists in the `src` folder.</p>
      <p>But ... if the file does exist, it will render.</p>
      <form>
        <label>
          Target file name:
          <input type="text" value={targetFileName} onChange={(e) => setTargetFileName(e.target.value)} name="file-name" />
        </label>
      </form>
      {/* just basic label, mostly to show that it's looking for a js file */}
      {targetFileName && <p>Testing if file {targetFileName}.js exists</p>}

      {/* show loading state while the file is looking up after changing the input */}
      <React.Suspense fallback={<p>Checking that file for ya...</p>}>
        {
          <DynamicFileRendered />
        }
      </React.Suspense>
    </div >
  );
}

export default App;
