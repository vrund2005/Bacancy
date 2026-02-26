/*          Async Data Aggregation Using Promises

You are required to fetch related data from multiple APls and create a summary.
Steps:
Fetch a user
Fetch posts for that user
Fetch comments for one of the posts
Combine the results into a single summary object
Example:
summary: {
    user: "Leanne Graham", 
    postCount: 10, 
    commentCount: 5
}
Contraints:
Use Promise.all
Use async/await
Handle errors properly
Return or log a summary object

*/


async function userData(){
    try{
        const userAPI = await fetch("user/API");
        if (!userAPI.ok) throw new Error("User not fetched");
        const user = await userAPI.json();

        const postAPI = await fetch("post/API");
        if(!postAPI.ok) throw new Error("Unable to fetch post");
        const posts = await postAPI.json();

        if(posts.length === 0){
            return {
                username : user.name,
                postCount : 0,
                commentCount : 0
            }
        }

        const commentAPI = await fetch("comment/API");
        if(!commentAPI.ok) throw new Error("Comment data not fetched");
        const comment = await commentAPI.json();

        const summary = {
            username : user.name,
            postCount : posts.length,
            commentCount : comment.length
        }
        return summary;
    }
    catch(error){
        console.log("Error found in :" , error.message)
        throw error;
    }
}

userData()