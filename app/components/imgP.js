import { LitElement, html, css } from 'lit';

export class ImgApp extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            img{
                width:100%;
            }

            .img_col{
                width: 600px;
                padding:1rem;
                background-color:red;
            }
        `
    ];

    static get properties() {
        return {
            color: { type: String },
            widht:{type:String},
            border:{type:String},
            padding :{type:String}
        };
    }

    constructor(){
        super();
        this.color="";
        this.widht="";
        this.border="";
        this.padding="";
    }

    render() {
        return html`
        <div class="main">
            <div class="card_main">
                <div class="color">
                    <p>Base color </p>
                    <input type="color" value="#ff0000" id="colorTxt" @change=${this.getColor}/>
                </div>

                <div class="widht">
                    <p>widht </p>
                    <input type="range"  value="0" id="widhtTxt" @change=${this.getWidht} max="1000"/>
                </div>

                <div class="border">
                    <p>border </p>
                    <input type="range"  value="0" id="border" @change=${this.getBorder} max="1000"/>
                </div>


                <div class="padding">
                    <p>padding </p>
                    <input type="range"  value="0" id="padding"  @change=${this.getPaddig}  max="1000"/>
                </div>

                <div class="img_col"> 
                      <img src="https://i.natgeofe.com/n/996e2bfe-842d-4e41-8bf0-a7f87fc4e43d/00000153-bebc-d742-a553-bffd3c270000_16x9.jpg?wp=1&w=897.5&h=505" alt="">
                </div>
              

            </div>
        </div>
        `;
    }

    changImg(){
        let img=this.shadowRoot.querySelector(".img_col");
        img.style.backgroundColor =  this.color;
        img.style.width   =  this.widht+"px";
        img.style.borderRadius    =  this.border+"px";
        img.style.padding     =  this.padding+"px";
    }

    getPaddig(e){
       this.padding=e.target.value;
       this.changImg();
    }

    getBorder(e){
        this.border=e.target.value;
        this.changImg();
    }

    getWidht(e){
        this.widht=e.target.value;
        this.changImg();
    }

    getColor(e){
        this.color=e.target.value;
        this.changImg();
    }
    
}
customElements.define('img-app', ImgApp);
