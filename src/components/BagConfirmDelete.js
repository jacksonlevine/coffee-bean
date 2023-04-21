import PropTypes from "prop-types";

function BagConfirmDelete(props)
{
  return (
    <div>
      <h1>Are you sure you want to delete {props.bag.name}?</h1>
      <h2>This cannot be undone.</h2>
      <button onClick={()=>{props.delete(props.bag)}}>Delete permanently</button>
    </div>
  );
}

BagConfirmDelete.propTypes = 
{
  bag: PropTypes.object.isRequired,
  delete: PropTypes.func.isRequired
};

export default BagConfirmDelete;