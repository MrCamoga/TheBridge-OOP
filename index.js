class Person {

	constructor(name,age,gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

	obtDetails() {
		console.log(this.name,this.age,this.genre);
	}
}

class Student extends Person {

	constructor(name,age,gender,course,group) {
		super(name,age,gender);
		this.course = course;
		this.group = group;
	}

	register() {
        this.obtDetails();
		console.log(this.course, this.group);
	}
}

class Teacher extends Person {
	constructor(name,age,gender,course,level) {
		super(name,age,gender);
		this.course = course;
		this.level = level;
	}

	assign() {
        this.obtDetails();
		console.log(this.course, this.level);
	}
}

const teacher = new Teacher("Jon",49,"M","Abstract Algebra",1);
const student = new Student("Carlos",24,"M","Abstract Algebra","A");
teacher.assign();
student.register();

// MAYAS

class Warrior {

	constructor(life,power) {
		this.life = life;
		this.power = power;
	}

	attack() {
        return this.power;
    }
	defend(damage) {
		this.life -= damage;
		console.log(this.life);
	}
    print() {
        console.log(this.life,this.power)
    }
}

class Maya extends Warrior {
	constructor() {
		super(50,15);
	}
	
	drinkColaCao() {
		this.power += 10;
	}
}


class Aztec extends Warrior {
	constructor() {
		super(40,20);
	}
	
	drinkNesquik() {
		this.life += 10;
	}
}

const aztec = new Aztec();
const maya = new Maya();

aztec.drinkNesquik();
maya.drinkColaCao();
aztec.defend(maya.attack());
maya.defend(aztec.attack());
aztec.print();
maya.print();

// gallery

const civilAircrafts = [
	"assets/avion-civil-1.jpg",
	"assets/avion-civil-2.jpg",
	"assets/avion-civil-3.jpg",
	"assets/avion-civil-4.jpg",
	"assets/avion-civil-5.jpg",
];

const militaryAircrafts = [
	"assets/avion-militar-1.jpg",
	"assets/avion-militar-2.jpg",
	"assets/avion-militar-3.jpg",
	"assets/avion-militar-4.jpg",
	"assets/avion-militar-5.jpg",
];

const civilHelicopters = [
	"assets/helicoptero-civil-1.jpg",
	"assets/helicoptero-civil-2.jpg",
	"assets/helicoptero-civil-3.jpg",
	"assets/helicoptero-civil-4.jpg",
	"assets/helicoptero-civil-5.jpg",
];

const militaryHelicopter = [
	"assets/helicoptero-militar-1.jpg",
	"assets/helicoptero-militar-2.jpg",
	"assets/helicoptero-militar-3.jpg",
	"assets/helicoptero-militar-4.jpg",
	"assets/helicoptero-militar-5.jpg",
];

class Gallery {
	constructor(civil, military) {
		this.civil = civil;
		this.military = military;
	}

	getRandomCivil() {
		return this.civil[Math.floor(Math.random() * this.civil.length)];
	}

	getRandomMilitary() {
		return this.military[Math.floor(Math.random() * this.military.length)];
	}

	getAll() {
		return [...this.civil, ...this.military];
	}
}

class Painter {
	constructor() {
		this.createGallery();
	}

	createGallery() {
		this.gallery = document.createElement("section");
	}

	createImageTag(url) {
		const picture = document.createElement("picture");
		const img = document.createElement("img");
		img.setAttribute("src", url);
		picture.appendChild(img);
		return picture;
	}

	paintSingleImage(url) {
		this.gallery.appendChild(this.createImageTag(url));
	}

	paintMultipleImages(...urls) {
		urls.forEach((url) => this.paintSingleImage(url));
	}
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

console.log(aircrafts.getRandomCivil());
console.log(aircrafts.getRandomMilitary());
console.log(aircrafts.getAll());
console.log(helicopters.getRandomCivil());
console.log(helicopters.getRandomMilitary());
console.log(helicopters.getAll());

console.log(painter.gallery);
painter.paintSingleImage(civilAircrafts[0]);


























