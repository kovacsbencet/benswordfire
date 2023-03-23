function loadEvent() {

  console.log("Your website is loaded.");


  const swiper = new Swiper('.swiper', {
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 20,
    roundLengths: true,
    grabCursor: true,
    direction: 'horizontal',
    pagination: 
    {
      el: '.swiper-pagination',
      clickable: true
    }
  });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
      if (entry.isIntersecting) {
        entry.target.classList.add('show');

      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el)); 

  /* FORM VALIDATION */

  const form = document.getElementById("form");
  const name = document.getElementById("name");
  const business = document.getElementById("business");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");

  form.addEventListener("submit", event => {
    event.preventDefault();

    validateInputs();
  });

  const setError = (element, message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector(".error")

    errorDisplay.innerText = message;
    formControl.classList.add("error");
    formControl.classList.remove("success");

  }

  const setSuccess = element => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector(".error")

    errorDisplay.innerText = "";
    formControl.classList.add("success");
    formControl.classList.remove("error");

  }

  const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validateInputs = () => {
    const nameValue = name.value.trim();
    const businessValue = business.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

    if(nameValue === "") {
       setError(name, "Username is required!")
    } else {
       setSuccess(name)
    }

    if(emailValue === "") {
       setError(email, "Email is required!")
    } else if (!isValidEmail(emailValue)) {
       setError(email, "Provide a valid email address");
    } else {
      setSuccess(email);
    }

  };

  const navigation = document.querySelector(".nav")
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active')
    console.log(hamburger)
    console.log(navigation)
  })






};
window.addEventListener('load', loadEvent);

