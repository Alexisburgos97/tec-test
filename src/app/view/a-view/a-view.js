import View from "../../../core/view/view";
import Utils from "../../../core/utils";
import html from "./a-view.html";
import "./a-view..scss";

export default class AView extends View {

    constructor() {
        super(html);
        this.htmlSource = html;
        this.init();
    }


    async init() {
        // viewElement está definido en View, y es el contenedor de la vista.
        this.viewElement.querySelector(".text-container").innerHTML = this.htmlSource;

        await this.buscar();
    }

    async buscar(){

        let value = '';

        document.getElementById('buttonVistaASiguiente').addEventListener('click', (e) => {

            value = document.getElementById('inputVistaA').value != '' ?
                    Number(document.getElementById('inputVistaA').value) :
                    0;

            if( isNaN(value) ) value = 0;

            this.end(  );

        });

    }

}