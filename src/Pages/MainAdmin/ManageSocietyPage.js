import { Building2, Key, Layout, Mail, Map, MapPin, Phone } from 'lucide-react';

export default function ManageBlockPage({ page , setPage , totalPage , loading, societyList, handleSearch, handleDelete , ActivateSociety}) {


  return (
    <div className='mt-[10px]'>
      {loading ? (
        <div className='w-[100%]'>
          <img className='h-[100px] w-[100px] m-[auto]' src='/Assets/loading.gif'></img>
        </div>
      ) : (
        <div>
          <p className='text-[20px] text-center'>Manage Society</p>
          <input type='search' placeholder='Search society by name' onChange={handleSearch} className='rounded-[10px] border-2 border-gray-50 focus:outline-none focus:border-2 focus:border-blue-300 focus:transition-all focus:duration-300 focus:ease-in-out p-[10px] m-[auto] w-[400px] m-[auto] block'></input>
          <div className='flex flex-wrap w-[100%] mt-[10px] gap-[10px]'>
            {societyList.map((data, index) => (
              <div key={index}>
                <div className='p-[10px] border-2 ml-5 border-gray-50 p-2 rounded shadow w-[350px] h-[400px] mt-[2px]'>
                  <div className='bg-blue-600 text-white p-[10px] font-bold rounded'>

                    <p>{data.society_name}</p>
                    {data.is_active === 1 ? (
                      <p>Active</p>
                    ) : (
                      <p>Not Active</p>
                    )}
                  </div>
                  <div className='flex w-full flex-col p-5'>
                    <div className='flex  p-[5px] items-center'>
                      <Mail className='text-blue-500 h-5 w-5'></Mail>
                      <p className='ml-[5px]'>{data.email}</p>
                    </div>
                    <div className='flex p-[5px] items-center'>
                      <Phone className='text-blue-500 h-5 w-5'></Phone>
                      <p className='ml-[5px]'>{data.phone}</p>
                    </div>
                    <div className='flex p-[5px] items-center'>
                      <MapPin className='text-blue-500 h-5 w-5'></MapPin>
                      <p className='ml-[5px]'>{data.address}</p>
                    </div>
                    <div className='flex p-[5px] items-center'>
                      <Map className='text-blue-500 h-5 w-5'></Map>
                      <p className='ml-[5px]'>{data.state}</p>
                    </div>
                    <div className='flex'>
                      <div className='flex p-[5px] items-center'>
                        <Layout></Layout>
                        <p className='ml-[5px]'>Blocks {data.total_blocks}</p>
                      </div>
                      <div className='flex p-[5px] items-center'>
                        <Building2 className='text-blue-500 h-5 w-5'></Building2>
                        <p className='ml-[5px]'>Flats {data.total_flats}</p>
                      </div>
                    </div>
                    {data.is_active === 1 ? (
                      <div className='flex justify-between border-t-2 border-gray-50 w-full'>
                        <div className=''>
                          <img onClick={() => {
                            handleDelete(data.sid);
                          }} src='/Assets/delete.png' className='cursor-pointer text-blue-500 h-5 w-5'></img>
                        </div>
                        <div>
                          <img onClick={() => {

                          }} src='/Assets/edit.png' className='cursor-pointer text-blue-500 h-5 w-5'></img>
                        </div>
                        
                      </div>
                    ):(
                      <button onClick={()=>{
                        ActivateSociety(data.sid);
                      }} className='bg-blue-500 hover:bg-blue-700 p-3 w-90 m-[auto] rounded text-white'>Activate</button>
                    )}
                  </div>

                </div>

              </div>
            ))}

           
          </div>
           <div className='flex items-center justify-center mt-[10px]'>
              <button className='p-2 text-white bg-blue-500 text-center block rounded w-10' onClick={()=>{
                setPage(page - 1);
              }} disabled={page<=1}>&laquo;</button>

              <span className='ml-2'>{page} / {totalPage}</span>
              <button className='p-2 text-white ml-2 bg-blue-500 text-center block rounded w-10' onClick={()=>{
                setPage(page + 1);
              }} disabled={page>=totalPage}>&raquo;</button>
            </div>
        </div>
      )}
    </div>
  )
}
