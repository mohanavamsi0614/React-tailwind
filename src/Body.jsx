import { Card, CardContent, CardMedia, Stack, Typography, colors } from '@mui/material';
import Alert from '@mui/material/Alert';

function Body() {
    return(
        <div className="m-8 flex flex-col justify-between">
            <div><button className= " bg-blue-500 text-white h-12 w-40 rounded-xl m-10">Button-1</button></div>
            <div><Alert severity='error' sx={{width:"99%"}}>Alert! This is amazing</Alert></div>
            <Card sx={{width:"300px",display:"flex",justifyContent:"center"}} className=' absolute left-1/3 top-80'>
            <div className='flex p-8'>
                <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className='w-20'/>
                <div className=' relative left-3'>
                    <h1 className=' font-bold'>Kalvium Store</h1>
                    <h2>You have new courses</h2>
                </div>
            </div>
            </Card>
        </div>
    )
    
}
export default Body;