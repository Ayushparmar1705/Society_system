import React from 'react'
import { StaffManagement } from '../Api/RolebasedAuth/Chairman/StaffManagement';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

export default function confirmationMessage({ fun, fetchStaff , staffAction}) {


    return (
        confirmAlert({
            title: "confirmation messsage",
            message: `Are you sure ${fun} staff`,
            buttons: [
                {
                    label: "Yes",
                    className: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600',

                    onClick: async () => {
                        try {
                            const data = await staffAction;
                  
                            toast.success(data.message);
                            fetchStaff();

                        } catch (err) {
                            console.log(err);
                        }
                    }
                },
                {
                    label: "No",
                    className: 'bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400',

                    onClick: async () => {
                        return null;
                    }
                }

            ]
        })

    )




}
