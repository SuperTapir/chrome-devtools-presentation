import run from '../assets/run.gif';

export default function OtherPanels() {
  return (
    <div>
      <h1>Other Panels</h1>

      <ol>
        <li>Coverage panel</li>
        <li>Changes panel</li>
        <li>Animations panel</li>
        <li>Rendering panel</li>
      </ol>

      <div>
        <img src={run} height="50px" alt="" className="run-animation" />
      </div>
    </div>
  );
}
