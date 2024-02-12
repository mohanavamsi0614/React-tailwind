import { Card, CardContent, CardMedia, Stack, Typography, colors } from '@mui/material';
import Alert from '@mui/material/Alert';

function Body() {
    return(
        <div className=" flex justify-center m-8">
        <Stack spacing={2}>
            <button className= " bg-blue-500 text-white h-12 w-40 rounded-xl ">Button-1</button>
            <Alert severity='error' sx={{width:"250px"}}>Alert! This is amazing</Alert>
            <Card>
            <div className='flex p-8'>
                <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" className='w-20'/>
                <div className=' relative left-3'>
                    <h1 className=' font-bold'>Kalvium Store</h1>
                    <h2>You have new courses</h2>
                </div>
            </div>
            </Card>
            </Stack>
        </div>
    )
    
}
export default Body;