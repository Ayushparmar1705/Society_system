import { Mail, Phone } from 'lucide-react';
import React from 'react'
import { Card, CardContent } from '../../Component/UI/Card';
import { PageContainer, PageHeader } from '../../Component/UI/Container';

export default function ManageBlockPage({ isLoading, blockList }) {

    return (
        <PageContainer>
            {isLoading ? (
                <div className="flex justify-center py-20">
                    <img src='/Assets/loading.gif' alt='loading' className="h-20 w-20" />
                </div>
            ) : (
                <>
                    <PageHeader 
                        title="Manage Blocks" 
                        subtitle="View and manage all registered blocks"
                    />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {blockList.map((data, index) => (
                            <Card key={index} hover={true}>
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                                    <h3 className="text-lg font-bold">{data.block_name}</h3>
                                    <p className="text-blue-100 text-sm">{data.society_name}</p>
                                </div>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex items-center text-sm text-gray-700">
                                            <Mail size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                                            <span className="break-all">{data.email}</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-700">
                                            <Phone size={16} className="text-blue-500 mr-2 flex-shrink-0" />
                                            <span>{data.phone}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </>
            )}
        </PageContainer>
    )
}
