let numericOne = '';
let numericTwo = '';
let arithmaticOp;
let sum = '';
let displayEl = document.querySelector('.display')
let tableEl = document.getElementById('table')
tableEl.onclick = function(event) {
    event.preventDefault();
    let td = event.target.closest('td'); // (1)
    let inputId = event.target.id;    
  
    if (!td) return;
  
    if (!table.contains(td)) return; // (3)
  
    
    inputNum(inputId); // (4)
    
  };

function reset(){
        numericOne = '';
        numericTwo = '';
        arithmaticOp = '';
        sum = '';
        displayEl.textContent='';
  }

function inputNum(inputId){
    let userInput = inputId;
    // console.log(userInput);
    if( userInput == 'add' || userInput == 'multiply' || userInput == 'devide' || userInput == 'minus'){
        arithmaticOp = userInput;  
        if( arithmaticOp == 'add'){
            displayEl.textContent='';
            displayEl.textContent= '+'; 
            return;
        }
        if( arithmaticOp == 'minus'){
            displayEl.textContent='';
            displayEl.textContent= '-'; 
            return;
        }
        if( arithmaticOp == 'devide'){
            displayEl.textContent='';
            displayEl.textContent= '/'; 
            return;
        }
        if( arithmaticOp == 'multiply'){
            displayEl.textContent='';
            displayEl.textContent= '*'; 
            return;
        }
        
    }
    if( userInput == 'equal'){
        displayEl.textContent='';
        displayEl.textContent='='; 
        if( arithmaticOp && numericOne && numericTwo){
            finalSum(arithmaticOp, numericOne, numericTwo);
            return;
        }  else{
            displayEl.textContent= 'Error'; 
            setTimeout( reset(), 10000);
            return;
        } 
    } 
    if( userInput == 'cancel'){
        reset();
        return;
    }
    if( !arithmaticOp){
        numericOne = numericOne + userInput;
        console.log('numericOne', numericOne)
        displayEl.textContent='';
        displayEl.textContent=numericOne; 
    }else{
        let userSecondInput = inputId;
        numericTwo = numericTwo + userSecondInput;
        // console.log('second numeric', numericTwo);
        displayEl.textContent='';
        displayEl.textContent=numericTwo; 
    }        
}   

function finalSum(x, y, z) {
    let firstDigit = parseInt(y);
    let secondDigit = parseInt(z)
    
    if( x == 'add'){
        sum = firstDigit + secondDigit;
        // console.log(sum);
    }
    if( x == 'multiply'){
        sum = firstDigit * secondDigit;
    }
    if( x == 'devide'){
        sum = firstDigit / secondDigit;
    }
    if( x== 'minus'){
        sum = firstDigit - secondDigit;
    }
    // console.log(sum);
    displayEl.textContent='';
    displayEl.textContent=sum; 
    reset();
}
