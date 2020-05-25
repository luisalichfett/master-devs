import { useCallback, useEffect, useState } from 'react';
import { loadLogin } from '../../core/providers/login';

export const useLogin = () => {

    const getLogin = useCallback(() => {
        loadLogin()
    })
}