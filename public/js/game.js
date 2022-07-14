var info = fetch("../json/personinfo")
    .then((response) => {
        return response.json();
    })
    .then((jsondata) => {
        console.log(jsondata);
        document.getElementById("descShow").innerHTML = jsondata.desc;
    });
async function check() {
    var info = fetch("../json/personinfo")
        .then((response) => {
            return response.json();
        })
        .then((jsondata) => {
            console.log(jsondata);
            document.getElementById("descShow").innerHTML = jsondata.desc;
            const inputtedFname = document.getElementById("fname").value;
            const inputtedLname = document.getElementById("lname").value;
            if (
                inputtedFname.toUpperCase() == jsondata.fname.toUpperCase() &&
                inputtedLname.toUpperCase() == jsondata.lname.toUpperCase()
            ) {
                document.getElementById("isRight").innerHTML =
                    "You were right! Good job.";
            } else {
                document.getElementById("isRight").innerHTML =
                    "You were wrong. Try again.";
            }
        });
}
async function getHint() {
    var info = fetch("../json/personinfo")
        .then((response) => {
            return response.json();
        })
        .then((jsondata) => {
            document.getElementById('hint').innerHTML = `They are ${jsondata.age} years old`
        });
}