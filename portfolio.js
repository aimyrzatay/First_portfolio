let aboutMe = document.getElementById("about-me-button");
let aboutMeInfo = document.getElementById("about-me");
    
    function showAboutMeInfo(){
        aboutMeInfo.style.display = ('block');
    }

aboutMe.addEventListener('click', showAboutMeInfo);

let projects = document.getElementById("projects-button")
let projectsInfo = document.getElementById('projects')

    function showProjectsInfo() {
        projectsInfo.style.display = ('block')
    }

projects.addEventListener('click', showProjectsInfo)

let skills = document.getElementById("skillss-button")
let skillssInfo = document.getElementById('skills')

    function showSkillsInfo() {
        skillsInfo.style.display = ('block')
    }

skills.addEventListener('click', showSkillssInfo)

let contact = document.getElementById("contact-button")
let contactInfo = document.getElementById('contact')

    function showContactInfo() {
        contactInfo.style.display = ('block')
    }

contact.addEventListener('click', showContactInfo)








