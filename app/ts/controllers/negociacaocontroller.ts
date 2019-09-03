class NegociacaoController {

    private _inputData:HTMLInputElement;
    private _inputQuantidade:HTMLInputElement;
    private _inputValor:HTMLInputElement;

    constructor(){

        this._inputData =<HTMLInputElement>document.querySelector('#data');//casting conversão.
        this._inputQuantidade =<HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor =<HTMLInputElement> document.querySelector('#valor');
    }


    adiciona(event:Event){

        event.preventDefault();
    
const negociacao = new Negociacao(
    new Date(this._inputData.value.replace(/-/g,','))
    this._inputData.value,
    this._inputQuantidade.value,
    this._inputValor.value
);

console.log(negociacao.quantidade + 20);
   }
}