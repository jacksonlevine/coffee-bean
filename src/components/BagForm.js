import { useState } from "react";

function BagForm(props) {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [price, setPrice] = useState("");
  const [roast, setRoast] = useState("");

  const handleSubmit = () => {
    props.addBag(
      {
        name: name,
        origin: origin,
        price: price,
        roast: roast,
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