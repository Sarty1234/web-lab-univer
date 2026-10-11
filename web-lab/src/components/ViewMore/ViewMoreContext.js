import { createContext, useContext, useState } from 'react';

const ViewMoreContext = createContext();

export function ViewMoreProvider({ children }) {
    const [viewingMore, setViewingMore] = useState(false);
    return (
        <ViewMoreContext.Provider value={{ viewingMore, setViewingMore }}>
            {children}
        </ViewMoreContext.Provider>
    );
}

export const useViewingMore = () => useContext(ViewMoreContext);