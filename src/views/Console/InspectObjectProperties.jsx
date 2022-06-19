export default function InspectObjectProperties() {
  function logCat() {
    function Cat(age) {
      this.age = age;
    }
    Cat.prototype = {
      type: 'Cat',
      avatar: '🐱',
      get fullName() {
        return `${this.type}·${this.name}·${this.avatar}`;
      },
    };
    const cat = new Cat(20);
    Object.defineProperty(cat, 'name', { value: 'Tom', enumerable: true });
    Object.defineProperty(cat, 'friend', { value: 'Jerry', enumerable: false });

    console.log(cat);
  }

  function logMemoryObject() {
    var memory = new WebAssembly.Memory({ initial: 10, maximum: 1000 });
    console.log(memory)
  }
  return (
    <div>
      <h1>Console Panel</h1>
      <h2>Inspect Object Properties</h2>

      <button onClick={logCat}>Log Cat Object</button>
      <br />
      <button onClick={logMemoryObject}>Log Memory Object</button>
      <ol>
        <li>Bold: Own properties</li>
        <li>Normal: Inherited properties</li>
        <li>Muted: Non-enumerable properties</li>
      </ol>
    </div>
  );
}
