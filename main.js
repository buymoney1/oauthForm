
let formStepsNum = 0;

const prevBtns = document.querySelectorAll(".icon-left");
const formSteps = document.querySelectorAll(".form-box");

const submit = document.getElementById("submit");
submit.addEventListener("click", validate);

var span = document.getElementById('short-value');

function validate(e) {
  e.preventDefault();

  const validateNumber = document.getElementById("validate-number");
  let valid = true;

  if (validateNumber.value.length != 10 ) {
    span.appendChild(document.createTextNode(" شماره موبایل باید 10 رقم باشد "))  
  } 
}

const nextBtns = document.querySelectorAll(".next-step");
    nextBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();

      });
});

 prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();

  });
 
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}


//Code Verification
var verificationCode = [];
$(".verification-code input[type=text]").keyup(function (e) {
  
  // Get Input for Hidden Field
  $(".verification-code input[type=text]").each(function (i) {
    verificationCode[i] = $(".verification-code input[type=text]")[i].value; 
    $('#verificationCode').val(Number(verificationCode.join('')));
  });

  if ($(this).val() > 0) {
    if (event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9 || event.key == 0) {
      $(this).next().focus();
    }
  }else {
    if(event.key == 'Backspace'){
        $(this).prev().focus();
    }
  }

}); // keyup

$('.verification-code input').on("paste",function(event,pastedValue){
  console.log(event)
  $('#txt').val($content)
  console.log($content)

});


