
import { useEffect, useState } from "react";

export const useFetch = (url, counter = 1) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async (count) => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url + count);
        const data = await resp.json()

        setState({
            data,
            isLoading: false,
            hasError: null
        });

    };

    useEffect(() => {
        getFetch(counter);
    }, [url]);

    useEffect(() => {
        getFetch(counter);
    }, [counter]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
