export class Table extends HTMLElement {
    constructor(){
        super()
        this,this.innerHTML = 
        `
        <table class="table table-striped table-dark">
            <thead>
                <th>id</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Direccion</th>
                <th>Fecha Nacimiento</th>
                <th>Cedula</th>
                <th>Fecha Ingreso</th>
                <th>id Team</th>
                <th>Opciones</th>
            </thead>
            <tbody id="student-list">
                <td>1</td>
                <td>Johan</td>
                <td>25</td>
                <td>3043729992</td>
                <td>johanbc144@gmail.com</td>
                <td>Calle 30# 15B - 58 Villa Sara</td>
                <td>12-05-1999</td>
                <td>1098816599</td>
                <td>27-02-2023</td>
                <td>1</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit" id="edit">Edit</a>
                    <a href="#"class="btn btn-danger btn-sm delete">Delete</a>
                </td>
            </tbody>
        </table>
        `
    }
}

customElements.define("johan-table", Table)