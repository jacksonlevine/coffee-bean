import PropTypes from "prop-types";

function BagConfirmDelete(props)
{
  return (
    <div>
      <h1>Are you sure you want to delete {props.bag.name}?</h1>
      <h2>This cannot be undone.</h2>
      <button onClick={()=>{
        props.handle()("pageVisible")("viewall"); 
        props.delete(props.bag);}}>Delete permanently</button>
      <button onClick={()=>{
        props.handle()("pageVisible")("viewall");
      }}>Cancel and return to main list</button>
    </div>
  );
}

BagConfirmDelete.propTypes = 
{
  bag: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired,
  handle: PropTypes.func.isRequired
};

export default BagConfirmDelete;