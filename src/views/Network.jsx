export default function Network() {
  return (
    <div>
      <h1>Network Panel</h1>

      <ol>
        <li>Filter requests by type.</li>
        <li>
          Filter requests by properties.
          <ul>
            <li>
              <code>larger-than</code> : Show resources that are larger than the specified size, in
              bytes. Setting a value of 1000 is equivalent to setting a value of 1k.
            </li>
            <li>
              <code>method</code> : Show resources that were retrieved over a specified HTTP method.
            </li>
            <li>
              <code>mime-type</code> : Show resources of a specified MIME type.
            </li>
          </ul>
        </li>
        <li>View initiators and dependencies.</li>
        <li>Sort by waterfall.</li>
      </ol>
    </div>
  );
}
