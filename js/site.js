document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('enterOtp');
    const inputs = form.querySelectorAll('input[type="number"]');
    const content = document.getElementById('regContent');

    form.addEventListener('input', function () {
        let allFilled = true;

        inputs.forEach((input, index) => {
            if (input.value === '') {
                allFilled = false;
            }

            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();  // Move focus to the next input
            }
        });

        if (allFilled) {
            form.classList.add('active');
            content.classList.add('verify');

        } else {
            form.classList.remove('active');
            content.classList.remove('verify');
        }
    });

    inputs.forEach((input, index) => {
        input.addEventListener('input', function () {
            if (this.value.length > 1) {
                this.value = this.value.slice(0, 1);  // Keep only the first digit
            }
        });

        // Move to the previous input when pressing backspace
        input.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace' && this.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});


// This function will redirect the user to the previous page in their history
function goToLastPage() {
    window.history.back();
}

// Adding an event listener to the element with ID 'goToLast'
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("goToLast").addEventListener("click", goToLastPage);
});


