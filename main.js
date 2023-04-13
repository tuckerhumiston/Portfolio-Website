
let isOpen = false;

//Open Sessame Nav Bar
let sessameButton = document.getElementById('openSessame');
let navBar = document.getElementById('nav');
const openSessame = function() {
    
    if (!isOpen) {
        //Variables
        let contact = document.getElementById('contact');
        let projects = document.getElementById('projects');
        let about = document.getElementById('about')

        //Open Nav Bar
        navBar.style.width = '300px';
        document.getElementById('drop').style.width = '300px';
        document.body.style.gridTemplateColumns = "300px 1fr 300px";
        document.getElementById('openSessame').innerHTML = '>>>';
        document.getElementById('location').style.display = 'none';

        //Add Page links
        contact.style.writingMode = 'horizontal-tb';
        projects.style.writingMode = 'horizontal-tb';
        about.style.writingMode = 'horizontal-tb';
        projects.innerHTML = "<a href='./projects.html'>Projects</a>";
        about.innerHTML = "<a href='./about.html'>About Me</a>";
        contact.innerHTML = "<a href='./contact.html'>Contact Me</a>";
        about.style.marginTop = "1em"
        contact.style.marginTop = "1em"
    } else {
        navBar.style.width = '';
        document.getElementById('drop').style.width = '';
        document.body.style.gridTemplateColumns = "";
        document.getElementById('openSessame').innerHTML = '<<<';
        document.getElementById('location').style.display = '';

        projects.innerHTML = '';
        about.innerHTML = '';
        contact.innerHTML = '';
    }
    isOpen = !isOpen;
}
sessameButton.onclick = openSessame;

