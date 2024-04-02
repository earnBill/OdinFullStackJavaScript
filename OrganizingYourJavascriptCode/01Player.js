function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayname = function() {
        console.log(this.name);
    }
}

const player1 = new Player('steve', 'X');
const player2 = new Player('bill', 'O');

Player.prototype.sayHello = function() {
    console.log(`Hello, ${this.name}`);
}

player1.sayname();
player2.sayname();
player1.sayHello();
player2.sayHello();

console.log(Object.getPrototypeOf(player1) === Player.prototype);

