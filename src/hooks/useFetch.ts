import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

export interface UseFetchResult<T> {
    data: T[];
    isLoading: boolean;
    error: string | null;
}

export const useFetch = <T>(
    url: string,
    limit?: number,
    reloadTrigger?: string | null
): UseFetchResult<T> => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(true);
                    }, 1000);
                });

                const requestUrl = limit ? `${url}?_limit=${limit}` : url;

                const response = await axios.get(requestUrl, {
                    validateStatus: (status) =>
                        (status >= 200 && status < 300) || status === 404,
                });

                console.log("Reload Trigger", reloadTrigger);

                if (response.status === 404) {
                    setData([]);
                    return;
                }

                setData(response.data as T[]);
            } catch (err) {
                console.error("Error fetching data:", err);

                const axiosError = err as AxiosError;
                setError(
                    axiosError.message || "Unexpected error while fetching data"
                );
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, limit, reloadTrigger]);

    return { data, isLoading, error };
};
