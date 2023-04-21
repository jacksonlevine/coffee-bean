import { useState } from "react";

function BagForm(props) {
  const [name, setName] = useState(props.name || "");
  const [origin, setOrigin] = useState(props.origin || "");
  const [price, setPrice] = useState(props.price || "");
  const [roast, setRoast] = useState(props.roast || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addOrUpdateBag(
      {
        name: name,
        origin: origin,
        price: price,
        roast: roast,
        id: props.id
      }
    );
    props.handle()("pageVisible")("viewall");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter coffee name:
        <input 
            type="text" 
            value={name}
            onChange={event => setName(event.target.value)}
        />
      </label>
      <label>
        Enter origin:
        <input 
            type="text" 
            value={origin}
            onChange={event => setOrigin(event.target.value)}
        />
      </label>
      <label>
        Enter coffee price per pound:
        <input 
            type="text" 
            value={price}
            onChange={event => setPrice(event.target.value)}
        />
      </label>
      <label>
        Enter coffee's roast (light, medium or dark):
        <input 
            type="text" 
            value={roast}
            onChange={event => setRoast(event.target.value)}
        />
      </label>
      <button type="submit">Click to submit!</button>
    </form>
  )
}

export default BagForm;