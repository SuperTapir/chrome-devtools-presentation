export default function DebugJavaScript() {
  function hiMom() {
    let a = Math.random();
    debugger
    let b = 42;
    let c = a + b;
    console.log('Hi, mom!');
    console.log(c);
  }
  return (
    <div>
      <h1>Sources Panel</h1>
      <h2>Debug JavaScript</h2>
      <iframe src="https://googlechrome.github.io/devtools-samples/debug-js/get-started" frameBorder="0"></iframe>
      <button onClick={hiMom}>Click Me!</button>
      <ol>
        <li>Code folding.</li>
        <li>Add logger. </li>
        <li>Black box script.</li>
      </ol>
    </div>
  );
}
