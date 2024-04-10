import { Outlet } from 'react-router-dom';
import { createContext, useMemo } from 'react';
import { Header } from './shared/components/Header/Header';
import { Sidebar } from './shared/components/Sidebar/Sidebar';

export const ApiContext = createContext({});

export const ApiProvider = () => {
    // const [token, setToken] = eseState("");
    // if (!token) {
        //return <Navigate to="/403" replace />;
    // }

    const value = useMemo(() => ({}), []);

    return (
        <ApiContext.Provider value={value}>
            <Header />
            <div className="main">
                <Outlet />
            </div>
            <Sidebar />
        </ApiContext.Provider>
    );
};