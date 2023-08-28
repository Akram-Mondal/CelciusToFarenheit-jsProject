const FahToCel = (temp) =>{
    const Celcius = Math.round((temp - 32) * 5/9);
    return Celcius;
}

const CelToFah = (temp) =>{
     const Farenheit = Math.round((temp*9/5) + 32);
     return Farenheit
}

const calculateTemp = () =>{
    const temp = document.getElementById("temp").value;
    const tempSelected = document.getElementById("temp_diff");
    const selectValue = temp_diff.options[tempSelected.selectedIndex].value;
     const resultContainer = document.getElementById("resultContainer")
    
    if (selectValue == "cel") {
        const result = FahToCel(temp);
        resultContainer.innerHTML = `= ${result} Degree Celcius`
    }else{
        const result = CelToFah(temp);
        resultContainer.innerHTML = `= ${result} Degree Farenheit`
    }
}

