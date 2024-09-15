interface ResumeData {
    name: string;
    mainSkill: string;
    contact: string;
    education: string;
    skills: string;
    workExperience: string;
    about: string;
  }

  function updateResume(data: ResumeData): void {
    const resumeElements = {
      name: document.getElementById('name') as HTMLHeadingElement,
      main: document.getElementById('main') as HTMLHeadingElement,
      email: document.getElementById('email') as HTMLParagraphElement,
      education: document.getElementById('education') as HTMLHeadingElement,
      skills: document.getElementById('skill-list') as HTMLParagraphElement,
      work: document.getElementById('work') as HTMLHeadingElement,
      about: document.getElementById('about') as HTMLParagraphElement,
    };

    resumeElements.name.textContent = data.name;
    resumeElements.main.textContent = data.mainSkill;
    resumeElements.email.textContent = `✉ ${data.contact}`;
    resumeElements.education.textContent = data.education;
    resumeElements.skills.textContent = data.skills;
    resumeElements.work.textContent = data.workExperience;
    resumeElements.about.textContent = data.about;
  }

  function handleSubmit(e: Event): void {
    e.preventDefault();
  
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const resumeData: ResumeData = {
      name: formData.get('name-form') as string,
      mainSkill: formData.get('main-skill') as string,
      contact: formData.get('contact') as string,
      education: formData.get('edu') as string,
      skills: formData.get('skills') as string,
      workExperience: formData.get('work-xp') as string,
      about: formData.get('abt') as string,
    };
  
    updateResume(resumeData);
  

    const resume = document.getElementById('resume') as HTMLDivElement;
    resume.style.display = 'block';
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    form.addEventListener('submit', handleSubmit);
  });