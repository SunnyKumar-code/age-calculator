document.querySelector("button").addEventListener("click", function() {
   
    const dateInput = document.querySelector("#date").value;

    
    if (!dateInput) {
        alert("Please select your birthdate.");
        return; 
    }

   
    const birthDate = new Date(dateInput);
    const today = new Date();

   
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
    }

    if (months < 0) {
        years--;
        months += 12; 
    }


    const ageParagraph = document.querySelector("#age");
    ageParagraph.textContent = `Your age is ${years} years, ${months} months, and ${days} days.`;
});
