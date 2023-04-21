import { useState } from "react";

function BagForm(props) {
  const [name, setName] = useState(props.name);
  const [origin, setOrigin] = useState(props.origin);
  const [price, setPrice] = useState(props.price);
  const [roast, setRoast] = useState(props.roast);
  const id = props.id;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBag(
      {
        name: name,
        origin: origin,
        price: price,
        roast: roast,
        id: id
      }
    )
    props.handle()("pageVisible")("viewall");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          value={name}
          onChange={event => setName(event.target.value)}
      />
      <input 
          type="text" 
          value={origin}
          onChange={event => setOrigin(event.target.value)}
      />
      <input 
          type="text" 
          value={price}
          onChange={event => setPrice(event.target.value)}
      />
      <input 
          type="text" 
          value={roast}
          onChange={event => setRoast(event.target.value)}
      />
      <button type="submit">Click to submit!</button>
    </form>
  )
}

export default BagForm;