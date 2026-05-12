import { useEffect, useState } from "react";

export default function useCachedFetch(key, url, options = {}) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    async function doFetch(url, options) {
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error("Error " + response.status);
            }

            let result = null;

            if (response.headers.get("content-type").includes("application/json")) {
                result = await response.json();

            } else if (response.headers.get("content-type").includes("text/plain")) {
                result = await response.text();

            }

            setData(result);
            if (key) {
                sessionStorage.setItem(key, JSON.stringify(result))
                sessionStorage.setItem(key + "_expires", Date.now() + 1000 * 60 * 15)
            }

        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(function () {
        let cachedData = null;
        let cacheExpires = null;

        if (key) {
            cachedData = sessionStorage.getItem(key)
            cacheExpires = sessionStorage.getItem(key + "_expires")
        }

        // null === false
        if (cachedData && cacheExpires && Date.now() < parseInt(cacheExpires)) {
            console.log("Den der cache noget")
            setData(JSON.parse(cachedData))
            setLoading(false)
            return;
        }

        doFetch(url, options);
    }, [url, key]);

    return { data, loading, error };
}