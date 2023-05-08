export default function logic(){

    let selectedRow = null;

    //show alerts
    function showAlert(message, className){
        const div = document.createElement("div");
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector(".container");
        const main = document.querySelector(".main");
        container.insertBefore(div, main);

        setTimeout( () => document.querySelector(".alert").remove(), 3000);

    }

    //Clear All
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

    //Add Data
    document.querySelector("#student-form").addEventListener("submit", (e) =>{
        e.preventDefault();
        //Get form values
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

        //validate
        if(id == "" || name == "" || edad == ""  ||telefono == "" || email == "" || direccion == "" || fNacimiento == "" || cedula == "" || fIngreso == "" ||  idTeam == ""){
            showAlert("Por favor llene los campos", "danger")
        } else {
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

    //Edit
    document.querySelector("#student-list").addEventListener("click", (e) => {
        let target = e.target;
        if(target.classList.contains("edit")){
            selectedRow = target.parentElement.parentElement;
            document.querySelector("#id").value = selectedRow.children[0].textContent;
            document.querySelector("#name").value = selectedRow.children[1].textContent;
            document.querySelector("#edad").value = selectedRow.children[2].textContent;
            document.querySelector("#telefono").value = selectedRow.children[3].textContent;
            document.querySelector("#email").value = selectedRow.children[4].textContent;
            document.querySelector("#direccion").value = selectedRow.children[5].textContent;
            document.querySelector("#fNacimiento").value = selectedRow.children[6].textContent;
            document.querySelector("#cedula").value = selectedRow.children[7].textContent;
            document.querySelector("#fIngreso").value = selectedRow.children[8].textContent;
            document.querySelector("#idTeam").value = selectedRow.children[9].textContent;
        }
    })

    //Delete Data

    document.querySelector("#student-list").addEventListener("click", (e) =>{
        let target = e.target;
        if(target.classList.contains("delete")){
            target.parentElement.parentElement.remove();
            showAlert("Los datos del recluta fueron borrados", "danger")
        }
    })





}