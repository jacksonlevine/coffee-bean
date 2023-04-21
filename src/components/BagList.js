import BagEntry from "./BagEntry"

function BagList(props)
{
  <div className="bagList">
            {this.state.bags.map(
                (bag, index) =>
                    <BagEntry
                        name = {bag.name}
                        origin = {bag.origin}
                        price = {bag.price}
                        roast = {bag.roast}
                        key = {index}/>
            )}
  </div>
}

export default BagList;