/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//import { deleteCampus } from "../../store/actions/actionCreators";

const AllCampusesView = (props) => {
  //const {allCampuses, deleteCampus} = props;
  
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }
  // <img src={campus.imageUrl} alt="No image available" width="300" height="300" /> taken from line 30
  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>campus id: {campus.id}</h4>
          
          <p>{campus.address}</p>
          <p>{campus.description}</p>
          <button onClick={() => props.deleteCampus(campus.id)}> Delete </button>
          <Link to={`/campus/${campus.id}/edit`}>
          <button>Edit</button>
          </Link>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br/><br/>
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;