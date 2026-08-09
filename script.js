const form = document.getElementById("contact-form");
const successState = document.getElementById("success");
const resetBtn = document.getElementById("reset-btn");
const submitBtn = form.querySelector(".submit-btn")


form.addEventListener("submit", (e) => {
    e.preventDefault()


    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        form.classList.add("hidden")
        successState.classList.remove("hidden")
    }, 2000)



})

resetBtn.addEventListener("click", () => {
    form.reset()
    form.classList.remove("hidden")
    successState.classList.add("hidden")


    submitBtn.innerHTML = '<span>Send project details</span><i class="fa-solid fa-paper-plane"></i>';
    submitBtn.disabled = false;
})
