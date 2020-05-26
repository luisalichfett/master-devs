import { useCallback, useEffect } from 'react';
import { postLogin } from '../../core/providers/login';

export const useLogin = () => {
    
    const loadLogin = useCallback((login) => {
        postLogin(login)
    }, [postLogin])
    
    return {loadLogin}
};

export default useLogin;