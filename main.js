
let isOpen = false;

//Open Sessame Nav Bar
let sessameButton = document.getElementById('openSessame');
let navBar = document.getElementById('nav');
const openSessame = function() {
    
    if (!isOpen) {
        navBar.style.width = '300px';
        document.getElementById('drop').style.width = '300px';
        document.body.style.gridTemplateColumns = "300px 1fr 300px";
        document.getElementById('openSessame').innerHTML = '>>>';
        document.getElementById('location').style.display = 'none';
    } else {
        navBar.style.width = '';
        document.getElementById('drop').style.width = '';
        document.body.style.gridTemplateColumns = "";
        document.getElementById('openSessame').innerHTML = '<<<';
        document.getElementById('location').style.display = '';
    }
    isOpen = !isOpen;
}
sessameButton.onclick = openSessame;

