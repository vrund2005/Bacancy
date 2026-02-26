//              Implement API Retry Logic
// Write a function that takes a url and retry count, calls the APl, and retries 
// the request up to the given number of times if the API call fails.


async function retryLogic(url, retries) {

    while (retries >= 0) {
        try {
            const dataURL = await fetch(url);
            if (!dataURL.ok) throw new Error("Data not fetched");
            const data = await dataURL.json();
            return data;
        }
        catch(error) {
            if (retries === 0) {
                throw error;
            }
            console.log("Retrying...")
        }
        retries--;
    }
}