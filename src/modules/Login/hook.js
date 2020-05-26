import { useCallback, useEffect, useState } from 'react';
import { postLogin } from '../../core/providers/login';

export const useLogin = () => {
    const [responseData, setResponseData] = useState()
    
    const loadLogin = useCallback((login) => {
        setResponseData(undefined)
        postLogin(login).then(data => setResponseData(data))
    }, [postLogin])
    
    return {loadLogin, responseData}
};

export default useLogin;