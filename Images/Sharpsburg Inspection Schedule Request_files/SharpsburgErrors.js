function verifyFormValues() {
  var firstname = document.forms["inspectionForm"]["fname"].value;
  window.alert(5+6)
  if (firstname == "") {
    alert("First name can not be left blank");
    return false;
}
