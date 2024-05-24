'use client';
import { makeStore } from '@/lib/store';
import { setInitialLocalStorage } from '@/utils/data-utils';
import { useRef } from 'react';
import { Provider } from 'react-redux';

export default function StoreProvider({ children }) {
    const storeRef = useRef();
    if (!storeRef.current) {
        setInitialLocalStorage();
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
}
