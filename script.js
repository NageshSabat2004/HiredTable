const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelector('.menu-btn')?.addEventListener('click',()=>{
  const nav=document.querySelector('.nav-links');
  const actions=document.querySelector('.nav-actions');
  const open=nav.dataset.open==='1';
  nav.dataset.open=open?'0':'1';
  nav.style.cssText=open?'':'display:flex;position:absolute;top:68px;left:0;right:0;background:#fbfcfa;padding:20px;flex-direction:column;gap:18px;border-bottom:1px solid #dfe5e1;z-index:19';
  actions.style.cssText=open?'':'display:flex;position:absolute;top:68px;right:20px;transform:translateY(150px);z-index:20';
});


const EMAILJS_PUBLIC_KEY = "ruqZ-HiGDJYQNiOVO";
const EMAILJS_SERVICE_ID = "service_z5vv14w";
const EMAILJS_TEMPLATE_ID = "template_eq5y3wg";

emailjs.init({
  publicKey: EMAILJS_PUBLIC_KEY
});

document.getElementById("leadForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const button = form.querySelector("button");
  const toast = document.getElementById("toast");

  button.disabled = true;
  button.innerHTML = "Sending...";

  try {
    await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form
    );

    toast.textContent =
      "Requirement sent successfully. We'll contact you soon.";

    toast.classList.add("show");
    form.reset();

  } catch (error) {
    console.error("EmailJS error:", error);

    toast.textContent =
      "Something went wrong. Please try again or contact us on WhatsApp.";

    toast.classList.add("show");

  } finally {
    button.disabled = false;
    button.innerHTML =
      'Tell us what you need <span>→</span>';

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }
});


document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',()=>{
    const nav=document.querySelector('.nav-links');
    if(window.innerWidth<=900 && nav.dataset.open==='1'){
      nav.dataset.open='0'; nav.removeAttribute('style');
      document.querySelector('.nav-actions').removeAttribute('style');
    }
  });
});

// HiredTable v2: demonstration interactions
document.querySelectorAll('.company-top button').forEach(b=>b.addEventListener('click',()=>{const t=document.getElementById('toast');if(t){t.textContent='Partner dashboard preview';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}}));
