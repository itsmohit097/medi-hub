import { useState, useEffect } from "react";

const useLoading = (delay = 1000) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return loading;
};

export default useLoading;
