import View from "../../../core/view/view";
import BView from "../b-view/b-view";
import html from "./d-view.html";
import "./d-view..scss";

export default class DView extends View {

    /**
     * Esta vista muestra un texto por 1 segundos y termina.
     */

    constructor() {
        super(html);
        this.htmlSource = html;
        this.valueDefault = 8;
        this.init();
    }


    async init() {

        this.viewElement.querySelector(".text-container").innerHTML = this.htmlSource;

        await this.buscar();
    }

    async buscar(){

        document.getElementById('buttonVistaDClick').addEventListener('click', (e) => {
            this.waitForClick();
            this.buttonVistaD3Click();
            this.buttonVistaD5Click();
        });

        document.getElementById('buttonVistaDAtras').addEventListener('click', (e) => {
            this.end( new BView(this.valueDefault).start());
        });

    }

    async buttonVistaD5Click(){

            await this.waitfor5(5000);

            document.getElementById('buttonVistaD5Click').addEventListener('click', () => {
                this.waitfor5(0);
            });

    }

    async buttonVistaD3Click(){

        this.viewElement.querySelector("#buttonVistaD3Click").addEventListener('click', () => {
            this.waitfor3(true);
        })

    }

    async waitForClick() {

        let value = '';

        new Promise((resolve, reject) => {
            value = this.viewElement.querySelector("#divVistaD5Click");
            value !== '' ?
                resolve(
                    this.viewElement.querySelector("#divVistaD5Click").innerHTML =  '<button type="button" class="buttonVistaD5Click" id="buttonVistaD5Click">5 o Click</button>'
                ) :
                reject( alert('Error, intente de nuevo más tarde') );
        });

        value = '';

        new Promise((resolve, reject) => {
            value = this.viewElement.querySelector("#divVistaD3Click");
            value !== '' ?
                resolve(
                    this.viewElement.querySelector("#divVistaD3Click").innerHTML =  '<button type="button" class="buttonVistaD3Click" id="buttonVistaD3Click">3 o Click</button>'
                ) :
                reject( alert('Error, intente de nuevo más tarde') );
        });

    }

    async waitfor3(bool = false){

        new Promise((resolve, reject) => {
            setTimeout(() => {
                bool === true ? resolve( alert('3 o click') ) : reject( alert('Error, intente de nuevo más tarde') );
            }, 3000);
        });

    }

    async waitfor5(time = 0){

        let value = '';

        new Promise((resolve, reject) => {
            setTimeout(() => {
                value = this.viewElement.querySelector("#buttonVistaD5Click");
                value !== '' ?
                    resolve( alert('5 o click') ) :
                    reject( alert('Error, intente de nuevo más tarde') );

            }, time);
        });

    }



}