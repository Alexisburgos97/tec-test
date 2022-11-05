import View from "../../../core/view/view";
import html from "./b-view.html";
import "./b-view..scss";

export default class BView extends View {

    /**
     * Esta vista muestra un texto por 1 segundos y termina.
     */

    constructor(value) {
        super(html);
        this.htmlSource = html;
        this.value = value;
        this.valueDefault = 5;
        this.init();
    }


    async init() {

        // viewElement está definido en View, y es el contenedor de la vista.
        this.viewElement.querySelector(".text-container").innerHTML = this.htmlSource;

        this.viewElement.querySelector("#inputVistaB").innerHTML = this.valueDefault;

        await this.buscar();

    }

    async buscar(){

        let value = '';

        document.getElementById('buttonVistaBSiguiente').addEventListener('click', (e) => {

            value = document.getElementById('inputVistaB').innerHTML != '' ?
                Number(document.getElementById('inputVistaB').innerHTML) :
                0;

            if( isNaN(value) ) value = 0;

            value = this.value + this.valueDefault;

            this.end();
        });

    }

}