const form = document.getElementById("contact-form");
const successState = document.getElementById("success");
const resetBtn = document.getElementById("reset-btn");
const submitBtn = form.querySelector(".submit-btn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    submitBtn.disabled = true;

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            form.classList.add("hidden");
            successState.classList.remove("hidden");
        } else {
            throw new Error(result.message);
        }

    } catch (error) {
        console.error("Form submission error:", error);

        submitBtn.innerHTML =
            '<span>Send Message</span><i class="fa-solid fa-paper-plane"></i>';

        submitBtn.disabled = false;

        alert("Something went wrong. Please try again.");
    }
});

resetBtn.addEventListener("click", () => {
    form.reset();

    form.classList.remove("hidden");
    successState.classList.add("hidden");

    submitBtn.innerHTML =
        '<span>Send Message</span><i class="fa-solid fa-paper-plane"></i>';

    submitBtn.disabled = false;
});
