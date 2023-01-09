function createCalculadora()
{
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        inicia(){

            this.cliqueBotoes();
            this.pressEnter();
        },
        pressEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },
        deleteOne()
        {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta()
        {
            let conta = this.display.value;
            try{
                conta = eval(conta);
                if(!conta){
                    alert('invalid input');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('invalid input');
            }
        },
    


        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear'))
                {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del'))
                {
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq'))
                {
                    this.realizaConta();
                }
                this.display.focus();
            });

        },
        btnParaDisplay(valor)
        {
            this.display.value += valor;
        }

    };
}
const calculadora = createCalculadora();
calculadora.inicia();
