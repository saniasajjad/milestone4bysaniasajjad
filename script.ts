document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const addressElement = document.getElementById('address');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');

    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {

        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const address = (addressElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;

        // Handle profile picture
        const profilePictureFile = (profilePictureInput as HTMLInputElement).files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Create resume output
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h3>Education</h3>
        <p id ="edit-education" class="editable" >${education}</p>

        <h3>Work Experience</h3>
        <p id ="edit-experience" class="editable">${experience}</p>

        <h3>Skills</h3>
        <p id ="edit-skills" class="editable">${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
       MakeEditable();
        }
    } else {
        console.error('One or more form elements are missing');
    }
  });
  
  
function MakeEditable(){
      const editableElements = document.querySelectorAll('.editable');
      editableElements.forEach(element => {
          element.addEventListener('click' , function (){
              const currentElement = element as HTMLElement;
              const currentValue = currentElement.textContent || "";
  
              //replace content
              if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN'){
                  const input = document.createElement('input')
                  input.type = 'text'
                  input.value = currentValue
                  input.classList.add('editing-input')
  
  
                  input.addEventListener('blur', function (){
                      currentElement.style.display = 'inline'
                      input.remove()
                  })
  
  
  
                  currentElement.style.display = 'none'
                  currentElement.parentNode?.insertBefore(input, currentElement)
                  input.focus()
              
              }
  
  
          })
      })
  }