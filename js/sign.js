document.addEventListener("DOMContentLoaded", function () {
    var checkbox = document.getElementById("cafiCheckbox");
    var inputs = document.querySelectorAll("#signInForm input");
    var div = document.getElementById("signInForm");
    var btnSubmit = document.getElementById("btnSubmit");

    checkbox.addEventListener("change", function () {
        checkInputs();
    });

    inputs.forEach(function (input) {
        input.addEventListener("input", function () {
            checkInputs();
        });
    });

    function checkInputs() {
        var allInputsFilled = Array.from(inputs).every(function (input) {
            return input.value.trim() !== "";
        });

        if (checkbox.checked && allInputsFilled) {
            div.classList.add("active");

        } else {
            div.classList.remove("active");
            btnSubmit.removeAttribute("disabled");
            checkbox.removeAttribute("disabled");
        }
    }
});