import { useCallback, useEffect, useState } from 'react'

const useAccessTime = () =>{
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getData = useCallback(async ()=>{
        try{
            setLoading(true);
            const url = "https://isip-mock-be.herokuapp.com/access_times"
            const res = await fetch(url, {method: 'GET', mode: 'cors', cache: 'no-cache'});
            if(res.status === 200){
                const r = await res.json()
                setData(r.data);
            }
            setLoading(false);
            setError(false);
        }
        catch{
            setLoading(false);
            setError(true);
        }
    },[]);

    useEffect(()=>{
        getData();
    },[getData]);
    
    return{
        data,
        loading,
        error
    };
}

export default useAccessTime;