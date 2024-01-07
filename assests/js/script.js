$("#contact-form").submit(function (event) {
  event.preventDefault();
  emailjs.init("wTkHIugxAAE_yijwy");
  console.log("form submitted");

  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
    phone_no: document.getElementById("phone_no").value,
  };
  console.log(params);
  emailjs.send("service_rw3j4y8", "template_um5psrj", params).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);

      document.getElementById("contact-form").reset();
      alert("Form Submitted Successfully");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Form Submission Failed! Try Again");
    }
  );
});
