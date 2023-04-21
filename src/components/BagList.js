import BagEntry from "./BagEntry"
import PropTypes, { object } from "prop-types";
function BagList(props)
{
  const openCreateForm = () => {
    props.handle()("pageVisible")("form");
  }

  return (
    <div className="bagList">
      <h2>List of coffee beans:</h2>
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
                  dispIndex = {index}
                  id = {bag.id}/>
      )}
      <button onClick={openCreateForm}>Click to create a new Bag</button>
    </div>
  );
}

BagList.propTypes = {
  bags: PropTypes.arrayOf(object).isRequired,
  handle: PropTypes.func.isRequired
}

export default BagList;