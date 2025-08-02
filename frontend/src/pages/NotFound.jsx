import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='w-full min-h-[90vh text-center flex flex-col items-center'>
        <h1 className='text-6xl font-bold mb-5 mt-24'>404</h1>
        <h2 className='text-3xl font-semibold mb-2'>OOP! PAGE NOT FOUND</h2>
        <p>the page you are looking for is removed or not found</p>
        <Button variant="contained" className='bg-blue-300'> <Link to="/">Go to home Page</Link> </Button>
    </div>
  )
}

export default NotFound