const container = document.getElementById("image-container"); 
const img = document.querySelector(".imagen img");

container.addEventListener("mousemove", (e) => {
    const x = e.clientX - container.offsetLeft;
    const y = e.clientY - container.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`; 
    img.style.transform = "scale(2)";
}); 

container.addEventListener("mouseleave", () => {
    img.style.transformOrigin = "center"; 
    img.style.transform = "scale(1)";
});
