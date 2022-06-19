export default function InternalFunction() {
  return (
    <div>
      <h1>Console Panel</h1>
      <h2>Internal Functions</h2>

      <ol>
        <li>
          Query elements:
          <ul>
            <li>
              <code>$0 ~ $4</code>: Inspected DOM.
            </li>
            <li>
              <code>$ / $$</code>: Query by CSS selector.
            </li>
            <li>
              <code>$x</code>: Query by XPath.
            </li>
          </ul>
        </li>
      </ol>
      <ol>
        <li>
          Other useful functions:
          <ul>
            <li>
              <code>copy</code>: Inspected DOM.
            </li>
            <li>
              <code>inspect</code>: Query by CSS selector.
            </li>
            <li>
              <code>monitor / monitorEvents</code>: Monitor functions or events.
            </li>
            <li>
              <code>queryObjects</code>: Get objects by constructors.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}
