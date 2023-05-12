export class Table extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = 
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
            <tbody id="student-list"></tbody>
        </table>
        `
    }
}

customElements.define("johan-table", Table);