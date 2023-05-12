class RailwayForm {
  constructor(name, train) {
    console.log(
      `Constructor Called .... name = ${name}, train number = ${train}`
    );
    this.name = name;
    this.trainno = train;
  }
  submit() {
    console.log(
      this.name + " form submitted for train number = " + this.trainno
    );
  }
  cancel() {
    console.log(
      this.name + " form cancelled for train number = " + this.trainno
    );
    this.trainno = 0;
  }
  preview() {
    if (this.trainno === 0) {
      console.log("Sorry can't preview because you already cancel it ");
    } else {
      console.log(`Your name = ${this.name}, Train number = ${this.trainno}`);
    }
  }
}

let vikasForm = new RailwayForm("Vikas", 123);
let rohanForm1 = new RailwayForm("Rohan", 456);
let rohanForm2 = new RailwayForm("Rohan", 789);

vikasForm.submit();
vikasForm.preview();
rohanForm1.submit();
rohanForm1.preview();
rohanForm2.submit();
rohanForm2.preview();
rohanForm1.cancel();
rohanForm1.preview();
