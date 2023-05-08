export class Music extends HTMLElement {
    constructor(){
        super()
        this.innerHTML =
        `
        <div>
            <h2>Diviertete!</h2>
            <audio src="music/music.mp3"></audio>
            <button id="playBtn" class="btn btn-success">Reproducir</button>
            <button id="stopBtn" class="btn btn-danger">Parar</button>
            <button id="restartBtn" class="btn btn-info">Reiniciar</button>
        </div>
        `
    }
}

customElements.define("johan-music", Music)