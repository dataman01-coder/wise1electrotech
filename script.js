const navLink  = document.querySelector('nav ul');

function openMenu(){
    navLink.style.transform = 'translateX(0%)';
}

function closeMenu(){
    navLink.style.transform = 'translateX(100%)';
}


navLink.addEventListener('onload',()=>{
    navLink.style.display = 'none';
}
)