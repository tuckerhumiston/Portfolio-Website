
let isOpen = false;

//Open Sessame Nav Bar
let sessameButton = document.getElementById('openSessame');
let navBar = document.getElementById('nav');


const openSessame = function() {
    
    //Open
    if (!isOpen) {
        //Variables
        let contact = document.getElementById('contact');
        let projects = document.getElementById('projects');
        let about = document.getElementById('about');
        let home = document.getElementById('home');
        //Open Nav Bar
        navBar.style.width = '300px';
        document.getElementById('drop').style.width = '300px';
        if (window.location.href === 'file:///C:/Dev/Portfolio%20Website/index.html') {
            document.body.style.gridTemplateColumns = "300px 1fr 300px";
        } else {
            document.body.style.gridTemplateColumns = "1fr 300px";
        }
        document.getElementById('openSessame').innerHTML = '>>>';
        //Add and space page links
        home.innerHTML = "<a href='./index.html'>Home</a>";
        projects.innerHTML = "<a href='./projects.html'>Projects</a>";
        about.innerHTML = "<a href='./about.html'>About Me</a>";
        contact.innerHTML = "<a href='./contact.html'>Contact Me</a>";
        home.style.marginTop = '6.5em';
        about.style.marginTop = "1em";
        contact.style.marginTop = "1em";
        projects.style.marginTop = "1em";
    //Close
    } else {
        navBar.style.width = '';
        document.getElementById('drop').style.width = '';
        document.body.style.gridTemplateColumns = "";
        document.getElementById('openSessame').innerHTML = '<<<';
        home.style.display = '';

        home.innerHTML = '';
        projects.innerHTML = '';
        about.innerHTML = '';
        contact.innerHTML = '';
    }
    isOpen = !isOpen;
}
sessameButton.onclick = openSessame;


