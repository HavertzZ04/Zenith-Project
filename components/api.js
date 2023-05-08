const url = "http://localhost:4040"

export const addUser = async (e) =>{
    try {
        await fetch(`${url}`,{
            method: "POST",
            body: JSON.stringify(e),
            headers: {
                "Content-Type": "aplication/json" 
            }
        })
    } catch (error) {
        console.log(error);
    }
}