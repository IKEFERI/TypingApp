import { useEffect } from "react";

export default function useInterval(callback, delay) {
    useEffect(() => {
        if (delay !== null) {
            let id = setInterval(callback, delay);
            return () => clearInterval(id);
        }

    }, [delay, callback]);
}