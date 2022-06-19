import marioRun from '../assets/mario-run.gif';
import sonicRun from '../assets/sonic-run.gif';


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
        <img src={marioRun} height="100px" alt="" className="mario-run-animation" />
        <br />
        <img src={sonicRun} height="100px" alt="" className="sonic-run-animation" />
      </div>
    </div>
  );
}
