import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, red, purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';


let color = grey[500]
export default function App() {
  const [plus, setPlus] = React.useState(2)
  const [sum , setSum] = React.useState(1)
  console.log(plus);
  const [expanded, setExpanded] = React.useState(false);
  if (expanded) {
    color = red[500]
  }else{
    color = grey[500]
  }
  return (
    <div style={{height:"100vh",display:"flex",justifyContent:"center", alignItems:"center",gap:"100px", backgroundColor:grey[500]}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="294"
        image="https://th.bing.com/th/id/OIP.om3QKNYbLOSygabuihA34wHaE8?rs=1&pid=ImgDetMain"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h4" >
          The hotel
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{display:"flex" , justifyContent:"space-between"}}>
        <h1>180$</h1>
        <IconButton aria-label="add to favorites" onClick={()=>{setExpanded(!expanded)}}>
          <FavoriteIcon style={ {color}}/>
        </IconButton>
      </CardActions>
      
    </Card>


    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="294"
        image="https://th.bing.com/th/id/OIP.sORUCLQs6IFavbrcEWRPgAHaE8?rs=1&pid=ImgDetMain"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h4" >
          Cappuccino
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{display:"flex" , justifyContent:"space-between"}}>
        <h1>{plus}$</h1>
        
       <div style={{display:"flex"}}>

        <IconButton aria-label="add to favorites" onClick={()=>{
          if (plus>2) {
            setPlus(plus-2)
            setSum(sum-1)
          }
        }}>
        <RemoveCircleIcon style={{color:purple[500] , fontSize:"50px"}}/>
        </IconButton>
        <Typography variant="h3" >
          {sum}
        </Typography>
        <IconButton aria-label="add to favorites" onClick={()=>{
          if (plus<20) {
            setPlus(plus+2)
            setSum(sum+1)
          }
        }}>
          <AddCircleIcon style={{color:purple[500] , fontSize:"50px"}}/>
        </IconButton>
        </div>
      </CardActions>
      
    </Card>
    </div>
  );
}
