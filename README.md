# Contact Form — Hire Me as a Web Developer

A clean, dark, code-editor-inspired contact page built to collect project inquiries from potential clients. Built with plain HTML, CSS, and JavaScript — no framework, no build step.

**Live demo:** [https://jalilgs.github.io/contact-form-2/](https://jalilgs.github.io/contact-form-2/)

## Features

- Two-panel layout: an info panel with contact details and a "terminal" snippet showing your role and stack, and a project-intake form
- Project type and budget selectors tailored to freelance web development inquiries
- Animated submit → success state, fully handled client-side
- Responsive down to mobile, with a stacked single-column layout
- Accessible focus states and `prefers-reduced-motion` support
- No dependencies beyond Google Fonts and Font Awesome (loaded via CDN)

## Tech stack

- HTML5
- CSS3 (custom properties, CSS Grid & Flexbox)
- Vanilla JavaScript (no frameworks, no build tools)

## Project structure

```
.
├── index.html      # Page markup and content
├── style.css       # All styling and theme tokens
├── script.js       # Form submit / success-state handling
└── README.md
```

## Getting started

Clone the repo and open `index.html` in a browser — that's it, no install step:

```bash
git clone https://github.com/jalilgs/contact-form-2.git
cd contact-form-2
```

Then open `index.html` directly, or serve it locally:

```bash
npx serve .
```

## Connecting the form to your inbox

This form is currently front-end only — submitting it shows a success state but doesn't send the message anywhere. Since this is a static site (no server), you need a form backend service to actually receive submissions. **[Web3Forms](https://web3forms.com)** is recommended — free, no account required:

1. Go to [web3forms.com](https://web3forms.com) and enter your email to get a free **Access Key**.
2. In `index.html`, add your key as a hidden field inside `<form class="contact-form" id="contact-form">`:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
   ```
3. Point the form at the Web3Forms endpoint and switch `script.js` from `preventDefault` simulation to a real `fetch` POST:
   ```js
   form.addEventListener("submit", async (e) => {
     e.preventDefault();
     submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
     submitBtn.disabled = true;

     const res = await fetch("https://api.web3forms.com/submit", {
       method: "POST",
       headers: { "Content-Type": "application/json", Accept: "application/json" },
       body: JSON.stringify(Object.fromEntries(new FormData(form))),
     });

     if (res.ok) {
       form.classList.add("hidden");
       successState.classList.remove("hidden");
     } else {
       submitBtn.innerHTML = '<span>Send project details</span><i class="fa-solid fa-paper-plane"></i>';
       submitBtn.disabled = false;
       alert("Something went wrong — please try again.");
     }
   });
   ```
4. Every field in the form needs a `name` attribute (already set up) so it's included in the submission.

Alternatives: [Formspree](https://formspree.io) (dashboard of submissions, 50 free/month) or [EmailJS](https://www.emailjs.com) (sends through your own email account).

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and `/ (root)`.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.

## Customization

- **Colors & fonts:** all defined as CSS custom properties at the top of `style.css` (`:root`), so the theme can be changed in one place.
- **Contact details:** update the email, phone, and location in the `.contact-cards` section of `index.html`.
- **Social links:** update the `href` values in the `.socials` block.

## License

Free to use and adapt for your own projects.

## Contact

- Email: [jalilgs13@gmail.com](mailto:jalilgs13@gmail.com)
- GitHub: [@jalilgs](https://github.com/jalilgs)
