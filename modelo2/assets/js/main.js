function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaClicks();
        this.capturaEnter();
    };

    
    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
            
        });
    };
    
    this.capturaClicks = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if(element.classList.contains('btn-num')) this.addNumdisplay(element); 
            if(element.classList.contains('btn-clear')) this.clear(element); 
            if(element.classList.contains('btn-del')) this.del(element); 
            if(element.classList.contains('btn-eq')) this.realizaConta(element); 
        });
    };

    this.realizaConta = () => {
        try {
          const conta = eval(this.display.value);
    
          if(!conta) {
            alert('Invalid');
            return;
          }
    
          this.display.value = conta;
        } catch(e) {
          alert('Invalid');
          return;
        }
      };

    this.addNumdisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    };

    this.clear = () => {
        this.display.value = '';
    };

    this.del = function() {
        this.display.value = this.display.value.slice(0, -1);
    };

}
const calculadora = new Calculadora();
calculadora.inicia();