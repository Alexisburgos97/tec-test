import View from "../../../core/view/view";
import AView from "../a-view/a-view";
import Utils from "../../../core/utils";
import html from "./c-view.html";
import cView from "../../app";
import "./c-view..scss";

export default class CView extends View {

    /**
     * Esta vista muestra un texto por 1 segundos y termina.
     */

    constructor(value) {
        super(html);
        this.htmlSource = html;
        this.value = value;
        this.init();
    }


    async init() {

        this.viewElement.querySelector(".text-container").innerHTML = this.htmlSource;

        this.viewElement.querySelector("#inputVistaC").innerHTML = this.value;

        let box = this.viewElement.querySelector(".box-vista-c");

        if( this.value < 10 ){
            box.classList.add('box-vista-c1');
        }else{
            box.classList.add('box-vista-c2');
        }

        await this.buscar();
    }

    async buscar(){

        let box = this.viewElement.querySelector(".box-vista-c");

        document.getElementById('buttonVistaCSwap').addEventListener('click', (e) => {

            if( this.value < 10 ){

                if( box.classList.contains( 'box-vista-c1' ) ){
                    box.classList.remove('box-vista-c1');
                    box.classList.add('box-vista-c2');
                }else if( box.classList.contains( 'box-vista-c2' ) ){
                    box.classList.remove('box-vista-c2');
                    box.classList.add('box-vista-c1');
                }

            }
            else{

                if( box.classList.contains( 'box-vista-c2' ) ){
                    box.classList.remove('box-vista-c2');
                    box.classList.add('box-vista-c1');
                }else if( box.classList.contains( 'box-vista-c1' ) ){
                    box.classList.remove('box-vista-c1');
                    box.classList.add('box-vista-c2');
                }

            }

        });

        document.getElementById('buttonVistaCReiniciar').addEventListener('click', (e) => {
            this.end( new AView().start() );
        });

        document.getElementById('buttonVistaCSiguiente').addEventListener('click', (e) => {
            this.end( );
        });

    }

}