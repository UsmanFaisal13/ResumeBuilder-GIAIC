function updateResume(data) {
    var resumeElements = {
        name: document.getElementById('name'),
        main: document.getElementById('main'),
        email: document.getElementById('email'),
        education: document.getElementById('education'),
        skills: document.getElementById('skill-list'),
        work: document.getElementById('work'),
        about: document.getElementById('about'),
    };
    resumeElements.name.textContent = data.name;
    resumeElements.main.textContent = data.mainSkill;
    resumeElements.email.textContent = "\u2709 ".concat(data.contact);
    resumeElements.education.textContent = data.education;
    resumeElements.skills.textContent = data.skills;
    resumeElements.work.textContent = data.workExperience;
    resumeElements.about.textContent = data.about;
}
function handleSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name-form'),
        mainSkill: formData.get('main-skill'),
        contact: formData.get('contact'),
        education: formData.get('edu'),
        skills: formData.get('skills'),
        workExperience: formData.get('work-xp'),
        about: formData.get('abt'),
    };
    updateResume(resumeData);
    var resume = document.getElementById('resume');
    resume.style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    form.addEventListener('submit', handleSubmit);
});
