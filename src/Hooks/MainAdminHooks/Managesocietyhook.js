import React, { useEffect, useState } from 'react'
import ManageSociety from '../../Api/MainAdmin/ManageSociety'
import ManageSocietyPage from '../../Pages/MainAdmin/ManageSocietyPage';

export default function Managesocietyhook() {
    const [societyList, setSocietyList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [duplicateList , setDuplicateList] = useState([]);
    useEffect(() => {
        // set loading is true when the data is fetching
        setLoading(true);
        // get the society details from the api
        try {
            const getSociety = async () => {
                const result = await ManageSociety.societyDetails();
                // set the result into the society list
                if (result.code === 200) {
                    setSocietyList(result.message);
                    setDuplicateList(result.message);
                }
            }

            getSociety();
        }
        catch (error) {

            console.log(error);
        }
        finally {
            // set loading to false if data is fetched properly
            setLoading(false);
        }
    }, [])


    const handleSearch = async (e) => {
        const name = e.target.value;
        if (name.length > 0) {
           
            try {
                const result = await ManageSociety.searchSociety(name);
                if (result.code === 200) {
                    setSocietyList(result.message);
               
                }
                else {
                    setSocietyList([]);
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        else
        {
            setSocietyList(duplicateList);
        }
    }

    return <ManageSocietyPage loading={loading} societyList={societyList} handleSearch={handleSearch}></ManageSocietyPage>
}
