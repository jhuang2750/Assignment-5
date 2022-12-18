/*==================================================
EditCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { link } from 'react-router-dom';

// Create styling for the input form
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditStudentView = (props) => {
  const {handleChange, handleSubmit, studentInfo } = props;
  const student = studentInfo.student;
  const classes = useStyles();

  // Render a New Student view with an input form
  return (
    <div>
      <h1>Edit Student</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Edit Student
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstname" required="required" onChange ={(e) => handleChange(e)} defaultValue={student.firstname} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastname" required="required" onChange={(e) => handleChange(e)} defaultValue={student.lastname}/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>CampusId: </label>
            <input type="text" name="campusId" required="required" onChange={(e) => handleChange(e)} defaultValue={student.campusId}/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
            <input type="number" name="gpa" required="required" onChange={(e) => handleChange(e)} defaultValue={student.gpa} step="0.1"/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
            <input type="text" name="email" required="required" onChange={(e) => handleChange(e)} defaultValue={student.email}/>
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>ImageUrl: </label>
            <input type="text" name="imageUrl" required="required" onChange={(e) => handleChange(e)} defaultValue={student.imageUrl}/>
            <br/>
            <br/>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
            <br/>
            <link to={'/students'}>Back</link>
          </div>
      </div>
    </div>    
  )
}

export default EditStudentView;