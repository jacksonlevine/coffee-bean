import BagEntry from "./BagEntry"

function BagList(props)
{
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
                  key = {index} 
                  id = {bag.id}/>
      )}
    </div>
  );
}

export default BagList;