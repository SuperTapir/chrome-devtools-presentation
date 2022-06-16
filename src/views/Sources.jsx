export default function Sources() {
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
      <h1>Sources</h1>
      <button onClick={hiMom}>Click Me!</button>
      <ol>
        <li>Code folding.</li>
        <li>Add logger. </li>
        <li>Black box script.</li>
      </ol>
    </div>
  );
}
