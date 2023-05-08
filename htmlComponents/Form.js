  
export class Form extends HTMLElement {
    constructor(){
        super()
        this.innerHTML = 
        `
        <form action="" id="student-form" class="row justify-content-center mb-4" autocomplete="off">
        <div class="col-2 mb-3">
            <label for="id">📝 ID</label>
            <input type="text" class="form-control" id="id">
        </div>
        <div class="col-8 mb-3">
            <label for="name">👤 Nombre Completo</label>
            <input type="text" class="form-control" id="name">
        </div>
        <div class="col-2 mb-3">
            <label for="edad">🔞 Edad</label>
            <input type="number" class="form-control" id="edad">
        </div>
        <div class="col-3 mb-3">
            <label for="telefono">📱 Telefono</label>
            <input type="number" class="form-control" id="telefono">
        </div>
        <div class="col-5 mb-3">
            <label for="email">💻 Email</label>
            <input type="email" class="form-control" id="email">
        </div>
        <div class="col-4 mb-3">
            <label for="fNacimiento">📅 F Nacimiento</label>
            <input type="date" class="form-control" id="fNacimiento">
        </div>
        <div class="col-12 mb-3">
            <label for="direccion">🌇 Direccion</label>
            <input type="text" class="form-control" id="direccion">
        </div>
        <div class="col-4 mb-3">
            <label for="cedula">🟣 Identificacion</label>
            <input type="number" class="form-control" id="cedula">
        </div>
        <div class="col-4 mb-3">
            <label for="fIngreso">📅 Fecha Ingreso</label>
            <input type="date" class="form-control" id="fIngreso">
        </div>
        <div class="col-4 mb-3">
            <label for="idTeam">🟡 ID Team</label>
            <input type="number" class="form-control" id="idTeam">
        </div>
        <div class="col-10">
            <input type="submit" value="Enviar" class="btn btn-success add-btn">
        </div>
    </form>
        `
    }
}

customElements.define("johan-form", Form)