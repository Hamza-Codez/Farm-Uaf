document.addEventListener("DOMContentLoaded",()=>{
  let aiBar = document.querySelector('#ai-aside');
  aiBar.style.display = "none"
})


function toggleAIAside() {
  const aiAside = document.getElementById('ai-aside');
  const isVisible = aiAside.classList.contains('animate');

  if (isVisible) {
      aiAside.classList.remove('animate');
      setTimeout(() => {
          aiAside.style.display = 'none'; // Hide after animation
      }, 300); // Match the duration of the CSS transition
  } else {
      aiAside.style.display = 'flex'; // Show before animation
      setTimeout(() => {
          aiAside.classList.add('animate');
      }, 10); // Small timeout to allow display to take effect
  }
}





