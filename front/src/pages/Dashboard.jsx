import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import bondImg from '../images/bondImg.png';
import valide from '../images/valide.png';
import enCours from '../images/enCours.png';
import rejete from '../images/rejete.png';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
function Dashboard() {
  const [cover,setCover]=React.useState(null)
  const handelFileChange = (e) =>{
    if(e.target.files && e.target.files.length >0){
      setCover(e.target.files[0])
      console.log(e.target.files);
    }
  }
  const handelFile =async(e) =>{
    try{
      const formData = new FormData();
      formData.append("file", cover);

      const response = await axios.post(
        "http://localhost:4000/upload",
        formData
    )
  console.log(response);}
    catch(erorr){
      console.log(erorr);
    }

  }

  return (
    <div className='px-4'>
      
      <p style={{fontSize:28 }}>Dashboard</p>
      <div className='d-flex gap-4' >
    <div>
      
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className='d-flex gap-4 '>
        <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
          Total Bonde d'entée
        </Typography>
        
        <div>
        <img src={bondImg}  style={{width:40,height:40}} />
        </div>
        </div>
        <div className='text-center'>
        <p style={{fontSize:30}}>50</p>
        </div>
      </CardContent>
      
    </Card>
    </div>
    
    <div>

  
  <Card sx={{ minWidth: 275 }}>
  <CardContent>
    <div className='d-flex gap-4 '>
    <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
       Bonde d'entée valider
    </Typography>
    
    <div>
    <img src={valide}  style={{width:40,height:40}} />
    </div>
    </div>
    <div className='text-center'>
    <p style={{fontSize:30}}>10</p>
    </div>
  </CardContent>
  
</Card>
</div>
<div>
<Card sx={{ minWidth: 275 }}>
  <CardContent>
    <div className='d-flex gap-4 '>
    <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
       Bonde d'entée en cours
    </Typography>
    
    <div>
    <img src={enCours}  style={{width:40,height:40}} />
    </div>
    </div>
    <div className='text-center'>
    <p style={{fontSize:30}}>20</p>
    </div>
  </CardContent>
  
</Card>
</div>
<div>
<Card sx={{ minWidth: 275 }}>
  <CardContent>
    <div className='d-flex gap-4 '>
    <Typography  sx={{ fontSize: 20 ,fontWeight:"bold"}} color="text.dark" gutterBottom>
       Bonde d'entée a rejeter
    </Typography>
    
    <div>
    <img src={rejete}  style={{width:40,height:40}} />
    </div>
    </div>
    <div className='text-center'>
    <p style={{fontSize:30}}>4</p>
    </div>
  </CardContent>
  
</Card>
</div>
</div> 

<div>

<Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" onChange={handelFileChange}/>
      </Form.Group>
      <button onClick={handelFile}>post img</button>
</div>

</div>
    
    
  )
}

export default Dashboard
