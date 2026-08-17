const words=["Software Engineer","Frontend Developer","Java Developer","AI/ML Enthusiast"];
let wordIndex=0,charIndex=0,deleting=false;
const typing=document.getElementById("typing");
function type(){
 const current=words[wordIndex];
 typing.textContent=current.substring(0,charIndex);
 if(!deleting){charIndex++;if(charIndex>current.length){deleting=true;setTimeout(type,1200);return;}}
 else{charIndex--;if(charIndex<0){charIndex=0;deleting=false;wordIndex=(wordIndex+1)%words.length;}}
 setTimeout(type,deleting?55:100);
}
type();

const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("show");});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");
menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(link=>{
 link.addEventListener("click",()=>navLinks.classList.remove("open"));
});
