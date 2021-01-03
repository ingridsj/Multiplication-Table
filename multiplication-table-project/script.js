function generateTab() {

    var tableNumber = document.getElementById("tableNumber")
    var selectTable = document.getElementById("selectTable")
    var convertNum = Number(tableNumber.value) 
    
    if (tableNumber.value.length == 0) {
        window.alert ('Por favor digite um número!')        
    } else {        
         selectTable.innerHTML = ' '           
        for (var num = 1; num <= 10 ; num++) { 
            var item = document.createElement('option')
            item.text = `${convertNum} x ${num} = ${convertNum * num}`
            selectTable.appendChild(item)
        }   
    }
}