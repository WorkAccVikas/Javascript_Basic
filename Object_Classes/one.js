class RailwayForm {
  submit() {
    console.log(
      this.name + " form submitted for train number = " + this.trainno
    );
  }
  cancel() {
    console.log(
      this.name + " form cancelled for train number = " + this.trainno
    );
  }
  //  * : use this keyword is important
  fill(name, train) {
    console.log("Form filling ", name, train);
    this.name = name;
    this.trainno = train;
  }
}

let vikasForm = new RailwayForm();
vikasForm.fill("Vikas", 123);
let rohanForm1 = new RailwayForm();
rohanForm1.fill("Rohan", 456);
let rohanForm2 = new RailwayForm();
rohanForm2.fill("Rohan", 789);

vikasForm.submit();
rohanForm1.submit();
rohanForm2.submit();
rohanForm1.cancel();
