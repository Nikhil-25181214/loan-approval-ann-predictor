document.getElementById("loanForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    let area = document.getElementById("area").value;

    let semiurban = 0;
    let urban = 0;

    if(area === "semiurban"){
        semiurban = 1;
    }
    else if(area === "urban"){
        urban = 1;
    }

    const data = {

        Dependents:
        document.getElementById("dependents").value,

        ApplicantIncome:
        document.getElementById("income").value,

        CoapplicantIncome:
        document.getElementById("coincome").value,

        LoanAmount:
        document.getElementById("loanamount").value,

        Loan_Amount_Term:
        document.getElementById("loanterm").value,

        Credit_History:
        document.getElementById("credit").value,

        Gender_Male:
        document.getElementById("gender").value,

        Married_Yes:
        document.getElementById("married").value,

        Education_Not_Graduate:
        document.getElementById("education").value,

        Self_Employed_Yes:
        document.getElementById("self_employed").value,

        Property_Area_Semiurban:
        semiurban,

        Property_Area_Urban:
        urban
    };

    const response = await fetch("/predict",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

    const result = await response.json();

    document.getElementById("result").innerHTML =
        result.prediction +
        "<br>Probability: " +
        result.probability;
});