const url = "http://localhost:4040/recluta"

const addUser = async (data) =>{
    try {
        await fetch(`${url}`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json" 
            }
        });
        self.postMessage({message: 'enviar'})
    } catch (error) {
        console.log(error);
    }
}

const getUser = async () =>{
    try {
        let response = await fetch(`${url}`,{
            method: "GET",
        });

        let data = await response.json();

        let users = data.forEach(user => {
            let plantilla = `
            <td data-id = ${user.id}>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.edad}</td>
            <td>${user.telefono}</td>
            <td>${user.email}</td>
            <td>${user.direccion}</td>
            <td>${user.fNacimiento}</td>
            <td>${user.cedula}</td>
            <td>${user.fIngreso}</td>
            <td>${user.idTeam}</td>
            <td>
                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href="#"class="btn btn-danger btn-sm delete">Delete</a>
            
            `;
            
            self.postMessage({message: 'users', data: [plantilla]});
        });

    
    } catch (error) {
        console.log(error);
    }
}

const putUser = async(id, data) =>{
    try {
        console.log(`${url}/ ${id}`);
        let response = await fetch(`${url}/${id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });
    } catch (error) {
        console.log("error")
    }

}

const deleteUser = async(id) =>{
    try {
        let response = await fetch(`${url}/${id}`,{
            method: "DELETE",
        });
    } catch (error) {
        console.log("error")
    }
};

onmessage = (e)=>{
    let {message, data} = e.data;
    if (message === 'enviar'){
        addUser(data);
    }else if(message === 'obtener'){
        getUser();
    }else if(message === 'put'){
        let id = data.userId;
        let dato = data.data;
        putUser(id, dato);
    }else if(message === 'delete'){
        deleteUser(data);
    }
}