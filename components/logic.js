export default function logic(){

    let ws = new Worker("./worker.js")
    let selectedRow = null;
    ws.postMessage({message: 'obtener'})


    function showAlert(message, className){
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const main = document.querySelector(".main");
        container.insertBefore(div, main);

        setTimeout( () => document.querySelector(".alert").remove(), 3000);

    }
    //limpiar campos
    function clearFields(){
        document.querySelector("#id").value = "";
        document.querySelector("#name").value = "";
        document.querySelector("#edad").value = "";
        document.querySelector("#telefono").value;
        document.querySelector("#email").value;
        document.querySelector("#direccion").value;
        document.querySelector("#fNacimiento").value;
        document.querySelector("#cedula").value;
        document.querySelector("#fIngreso").value;
        document.querySelector("#idTeam").value
    }

    //agregar Datoss
    document.querySelector("#student-form").addEventListener("submit", (e) =>{
        e.preventDefault();

        const id = document.querySelector("#id").value
        const name = document.querySelector("#name").value;
        const edad = document.querySelector("#edad").value
        const telefono = document.querySelector("#telefono").value;
        const email = document.querySelector("#email").value;
        const direccion = document.querySelector("#direccion").value;
        const fNacimiento = document.querySelector("#fNacimiento").value;
        const cedula = document.querySelector("#cedula").value;
        const fIngreso = document.querySelector("#fIngreso").value;
        const idTeam = document.querySelector("#idTeam").value;

        let data = {
            name,
            edad,
            telefono,
            email,
            direccion,
            fNacimiento,
            cedula,
            fIngreso,
            idTeam
        }
        
        
        if(id == "" || name == "" || edad == ""  ||telefono == "" || email == "" || direccion == "" || fNacimiento == "" || cedula == "" || fIngreso == "" ||  idTeam == ""){
            showAlert("Por favor llene los campos", "danger")
        } else {
            ws.postMessage({message: 'enviar', data: data})

            if(selectedRow == null){
                const list = document.querySelector("#student-list");
                const row = document.createElement("tr")
                row.innerHTML = `
                <td>${id}</td>
                <td>${name}</td>
                <td>${edad}</td>
                <td>${telefono}</td>
                <td>${email}</td>
                <td>${direccion}</td>
                <td>${fNacimiento}</td>
                <td>${cedula}</td>
                <td>${fIngreso}</td>
                <td>${idTeam}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#"class="btn btn-danger btn-sm delete">Delete</a>
                
                `;
                list.appendChild(row);
                selectedRow = null
                showAlert("Student Added", "success")
            }else{
                selectedRow.children[0].textContent = id
                selectedRow.children[1].textContent = name
                selectedRow.children[2].textContent = edad
                selectedRow.children[3].textContent = telefono
                selectedRow.children[4].textContent = email
                selectedRow.children[5].textContent = direccion
                selectedRow.children[6].textContent = fNacimiento
                selectedRow.children[7].textContent = cedula
                selectedRow.children[8].textContent = fIngreso
                selectedRow.children[9].textContent = idTeam
                showAlert("Informacion Editada", "info")
            }
            clearFields()
        }
    })

    
    ws.onmessage = (e) =>{
        
        let {message, data} = e.data;

        if(message === 'users'){
            const list = document.querySelector("#student-list");
            const row = document.createElement("tr")
            row.innerHTML = data;
            list.appendChild(row);
            selectedRow = null
        }
    }

    //Editar Datos
    document.querySelector("#student-list").addEventListener("click", (e) =>{
        if (e.target.classList.contains('edit')) {
            e.preventDefault()
            let target = e.target;
            selectedRow = target.parentElement.parentElement;
            let name = document.querySelector("#name").value 
            let edad = document.querySelector("#edad").value
            let telefono = document.querySelector("#telefono").value
            let email = document.querySelector("#email").value
            let direccion = document.querySelector("#direccion").value
            let fNacimiento = document.querySelector("#fNacimiento").value
            let cedula = document.querySelector("#cedula").value
            let fIngreso = document.querySelector("#fIngreso").value
            let idTeam = document.querySelector("#idTeam").value
            let data = {
                name,
                edad,                
                telefono,
                email,
                direccion,                
                fNacimiento,
                cedula,
                fIngreso,
                idTeam
            }
            let userId = e.target.closest('tr').querySelector('td[data-id]').getAttribute('data-id');
            ws.postMessage({message : 'put', data : {userId, data}});
        }})

        //Borrar datos

        document.querySelector("#student-list").addEventListener("click", (e) =>{
            if (e.target.classList.contains('delete')) {
                e.preventDefault()
                let userId = e.target.closest('tr').querySelector('td[data-id]').getAttribute('data-id');
                ws.postMessage({message : 'delete', data : userId});
            }})
}