import { Building2, Layout, Mail, Map, MapPin, Phone } from 'lucide-react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { Card, CardContent, CardActions } from '../../Component/UI/Card';
import { PageContainer, PageHeader } from '../../Component/UI/Container';

export default function ManageBlockPage({ page , setPage , totalPage , loading, societyList, handleSearch, handleDelete , ActivateSociety}) {

  return (
    <PageContainer>
      {loading ? (
        <div className="flex justify-center py-20">
          <img src='/Assets/loading.gif' alt='loading' className="h-20 w-20" />
        </div>
      ) : (
        <>
          <PageHeader 
            title="Manage Society" 
            subtitle="View and manage all registered societies"
          />
          
          <div className="flex justify-center mb-8">
            <input
              type="search"
              placeholder="Search society by name"
              onChange={handleSearch}
              className="w-full max-w-2xl px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {societyList.map((data, index) => (
              <Card key={index} hover={true} className="flex flex-col h-full">
                <div className={`p-4 ${data.is_active === 1 
                  ? 'bg-gradient-to-r from-green-500 to-green-400' 
                  : 'bg-gradient-to-r from-gray-500 to-gray-400'
                } text-white`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold truncate flex-1 mr-2">{data.society_name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      data.is_active === 1 
                        ? 'bg-white bg-opacity-20 text-white' 
                        : 'bg-white bg-opacity-20 text-white'
                    }`}>
                      {data.is_active === 1 ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>

                <CardContent className="flex-1">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-700">
                      <Mail size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                      <span className="break-all">{data.email}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-700">
                      <Phone size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                      <span>{data.phone}</span>
                    </div>
                    
                    <div className="flex items-start text-sm text-gray-700">
                      <MapPin size={16} className="text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{data.address}</span>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-700">
                      <Map size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                      <span>{data.state}</span>
                    </div>
                    
                    <div className="flex justify-between pt-3 border-t border-gray-200 text-sm text-gray-800">
                      <div className="flex items-center">
                        <Layout size={16} className="text-blue-500 mr-1" />
                        <span>Blocks {data.total_blocks}</span>
                      </div>
                      <div className="flex items-center">
                        <Building2 size={16} className="text-blue-500 mr-1" />
                        <span>Flats {data.total_flats}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardActions className="flex justify-between">
                  {data.is_active === 1 ? (
                    <>
                      <button 
                        onClick={() => handleDelete(data.sid)}
                        className="flex items-center text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-2 rounded-lg transition-all"
                      >
                        <FaTrash size={14} className="mr-1" />
                        Delete
                      </button>
                      <button className="flex items-center text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-2 rounded-lg transition-all">
                        <FaEdit size={14} className="mr-1" />
                        Edit
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => ActivateSociety(data.sid)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
                    >
                      Activate
                    </button>
                  )}
                </CardActions>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Previous
            </button>
            <span className="text-gray-700 font-medium">
              Page {page} of {totalPage}
            </span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page >= totalPage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Next
            </button>
          </div>
        </>
      )}
    </PageContainer>
  )
}
