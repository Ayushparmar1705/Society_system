import React, { useEffect, useState } from 'react'
import ManageBlockPage from '../../Pages/MainAdmin/ManageBlockPage'
import ManageBlock from '../../Api/MainAdmin/ManageBlock';

export default function Manageblockhook() {
    const [blockList, setBlockList] = useState([]);
    const [duplicateBlock, setduplicateBlock] = useState([]);
    const [societyList , setSocietyList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getBlocks = (async () => {
        try {

            const result = await ManageBlock.getBlock();
            setBlockList(result);

            setduplicateBlock(duplicateBlock);
        }
        catch (error) {
            setIsLoading(false);
        } finally {
            setIsLoading(false);
        }
    })
        useEffect(() => {
        getBlocks()
        
    }, []);
   console.log(blockList);


    

    return <ManageBlockPage isLoading={isLoading} blockList={blockList} ></ManageBlockPage>
}
