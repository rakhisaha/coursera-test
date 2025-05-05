var student = {
  name: "",
  type: "student"
};

document.addEventListner('DOMContentLoaded ',contentLoaded);

funtion contentLoaded(event) {
  document.getElementById('name').addEventListner("keyup", keyUp);
}

funtion keyUp(event){
  calculateNumaricOutput();
}

funtion calculateNumaricOutput(){
  student.name = document.getElementById('name').value;
  var totalNameValue = 0;
  for (var i=0; i< student.name.length; i++){
    totalNameValue += student.name.charCodeAt(i);
  }

  /// insert result into Page
  var output = "Total Numaric Value of Person's name is "+totalNameValue;
  document.getElementById('output').innerText = output;

}
