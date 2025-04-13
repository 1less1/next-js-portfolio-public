export async function fetchInstagramPosts() {
    try {
        const response = await fetch("http://node-backend:3001/api/instagram-posts", { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || (Array.isArray(data) && data.length === 0)) {
            throw new Error("Invalid response: Data is null or empty");
        }

        console.log("Instagram fetched via SSR!!!! Let's go baby!");
        return data;

    } catch (error) {
        
        throw new Error("Error fetching Instagram posts"); 
    }
}
