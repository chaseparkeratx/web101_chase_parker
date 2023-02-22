const submitForm = () => {
  let nameInput = document.getElementById('name')
  let nameValue = nameInput.value
  let phoneInput = document.getElementById('phone')
  let phoneValue = phoneInput.value
  let emailInput = document.getElementById('email')
  let emailValue = emailInput.value
  let commentInput = document.getElementById('textArea')
  let commentValue = commentInput.value
  let bdayInput = document.getElementById('bdayInput')
  let bdayValue = bdayInput.value
  console.log('Name:',nameValue)
  console.log('Phone Number:',phoneValue)
  console.log('Email Address:',emailValue)
  console.log('Comments:',commentValue)
  console.log('Birthdate:', bdayValue)
}

  // let yesValue = contactInput.value
  // let noValue = contactInput.value
  // const contactInput = document.getElementById('contact')
  // let yesValue = contactInput.value
  // let noValue = contactInput.value
  // if (yesValue).innerHTML {
  //   console.log('Contact Back:',yesValue)
  // } else (noValue).innerHTML {
  //   console.log('Contact Back:',noValue)
  // }
  
  