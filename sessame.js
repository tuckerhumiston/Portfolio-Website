let localHome = 'file:///C:/Dev/Portfolio%20Website/index.html';
let homeHome = 'https://tuckerhumiston.github.io/Portfolio-Website/index.html';


                                                                //Open Sessame Nav Bar
let isOpen = false;
let sessameButton = document.getElementById('openSessame');
const openSessame = function() {
    let navBar = document.getElementById('nav');
    //Open
    if (!isOpen) {
        //Variables
        let contact = document.getElementById('contact');
        let projects = document.getElementById('projects');
        let about = document.getElementById('about');
        let home = document.getElementById('home');
        //Open Nav Bar
        navBar.style.width = '300px';
        document.getElementById('drop').style.width = '100%';
        navBar.style.height = '100%';
        //document.body.style.gridTemplateColumns = "20% 80% 1fr";
        if ((window.location.href === localHome) || (window.location.href === homeHome)) {
            document.body.style.gridTemplateColumns = "20% 80% 1fr";
            
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
    //Close
    } else {
        navBar.style.width = '';
        document.getElementById('drop').style.width = '';
        document.body.style.gridTemplateColumns = "";
        document.getElementById('openSessame').innerHTML = '<<<';
        home.style.display = '';

        navBar.style.height = '';
        home.innerHTML = '';
        projects.innerHTML = '';
        about.innerHTML = '';
        contact.innerHTML = '';
    }
    isOpen = !isOpen;
}
sessameButton.onclick = openSessame;


                                                                //Display message for forums
let submitButton = document.getElementById('submit');
const displayMessage = function() {
    let form = document.getElementById('form-space');
    form.innerHTML = 'Submission error, please contact me at tuckerhumiston@hotmail.com';
    form.style.textAlign = 'center';
}
submitButton.onclick = displayMessage;
