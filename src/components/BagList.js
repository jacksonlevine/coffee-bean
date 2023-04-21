import BagEntry from "./BagEntry"

function BagList(props)
{
  const openCreateForm = () => {
    props.handle()("pageVisible")("form");
  }

  return (
    <div className="bagList">
      {props.bags.map(
          (bag, index) =>
              <BagEntry
                  name = {bag.name}
                  origin = {bag.origin}
                  price = {bag.price}
                  roast = {bag.roast}
                  handle = {props.handle}
                  poundsLeft = {bag.poundsLeft}
                  key = {index} 
                  id = {bag.id}/>
      )}
      <button onClick={openCreateForm}>Click to create a new Bag</button>
    </div>
  );
}

export default BagList;