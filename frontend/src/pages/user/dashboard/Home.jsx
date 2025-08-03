import { useState } from 'react'
import DashboardLayout from '../../../components/layouts/DashboardLayout'
import InfoCards from '../../../components/cards/InfoCards';
import { Upload, Recycle  } from 'lucide-react';

const Home = () => {
  const [ dashboards, setDashboards ] = useState({
    totalImagesUploaded: 0,
    totalBiodegradable: 0,
    totalNonBiodegradable: 0
  });

  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(null)
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className='overflow-y-auto py-5 px-4'>
        <div className='mx-auto max-w-screen-2xl'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
            <InfoCards 
            icon={ <Upload /> }
            label="Total Images Uploaded"
            value={dashboards?.totalImagesUploaded || 0}
            color="bg-blue-700"
            />
            <InfoCards 
            icon={ <Recycle  /> }
            label="Total Biodegrable waste"
            value={dashboards?.totalBiodegradable || 0}
            color="bg-red-700"
            />
            <InfoCards 
            icon={ <Upload /> }
            label={"Total Non Biodegradable"}
            value={dashboards?.totalNonBiodegradable || 0}
            color="bg-green-700"
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
            
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Home