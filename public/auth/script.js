// Start Login Page

// End Login Page


// Start Get App Page

// End Get App Page


// Start Sign Up Page
const navigateToFormStep = (stepNumber) => {
  document.querySelectorAll('.form-step').forEach((formStepSection) => {
    formStepSection.classList.add('d-none')
  })
  document.querySelector('#step-' + stepNumber).classList.remove('d-none')
}

document.querySelectorAll('.btn-navigate-form-step').forEach((formNavigationBtn) => {
  formNavigationBtn.addEventListener('click', () => {
    const stepNumber = parseInt(formNavigationBtn.getAttribute('step_number'))
    navigateToFormStep(stepNumber)
  })
})
// End Sign Up Page
