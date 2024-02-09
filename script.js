const display=document.getElementById('inputBox');
function appendToinputBox(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = '';
  }

  function calculateResult() {
    var result = eval(display.value);
    try{
    console.log(result)
    display.value = result;
    }catch(error){
        console.error("its getting error",error)
    }
  }
  function clearLastCharacter() {
    var displayValue = display.value;
    display.value = displayValue.substring(0, displayValue.length - 1);
  }

  