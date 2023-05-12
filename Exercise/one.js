class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  add(num) {
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }

  get real() {
    return this._real;
  }

  get imaginary() {
    return this._imaginary;
  }

  set imaginary(newImaginary) {
    this._imaginary = newImaginary;
  }

  set real(newReal) {
    this._real = newReal;
  }

  display() {
    console.log(`Complex Number : ${this.real} + ${this.imaginary}i`);
  }
}

const ComplexFun = () => {
  let a = new Complex(2, 4);
  console.log(a.real, a.imaginary);
  a.display();

  a.real = 10;
  a.imaginary = 10;
  let b = new Complex(6, 2);
  b.display();
  a.add(b);
  a.display();
};

// ComplexFun();

class Human {
  constructor(name, favfood, speed) {
    this.name = name;
    this.favfood = favfood;
    this.speed = 0;
  }
  walk() {
    console.log(this.name + "Human is walking Speed is " + this.speed);
  }
}

class Student extends Human {
  walk(speed) {
    // this.speed = speed; // ? : it will override speed of parent class
    console.log(
      this.name +
        ": Student is walking Speed = " +
        speed +
        " Human Speed = " +
        this.speed
    );
  }
}

const HumanFun = function () {
  let o = new Student("Harry", "Bhindi", 12);
  o.walk(33);

  console.log(o instanceof Human);
};

HumanFun();
