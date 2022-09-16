console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
  if (count < 0) {
    count = count * -1;
  }
  for (let index = 0; index <= count; index++) {
    if (index % 2 != 0) {
      console.log(index);
    }
  }
}
printOdds(13);
printOdds(-5);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixten = `Sorry, ${userName}, you need to wait until you're 16.`;
  if (age >= 16) {
    console.log(aboveSixteen);
  } else {
    console.log(belowSixten);
  }
}
checkAge("john", 14);
checkAge("nancy", 17);

console.log("EXERCISE 3:\n==========\n");
function coordinates(x, y) {
  if (x > 0 && y > 0) {
    console.log("quadrant 1");
  } else if (x < 0 && y > 0) {
    console.log("quadrant 2");
  } else if (x < 0 && y < 0) {
    console.log("quadrant 3");
  } else if (x > 0 && y < 0) {
    console.log("quadrant 4");
  } else if (x == 0 && y != 0) console.log("x axis");
  else if (x != 0 && y == 0) {
    console.log("y axis");
  } else console.log("origin");
}
coordinates(1, 1);
coordinates(0, 1);
coordinates(1, 0);
coordinates(1, -1);
coordinates(-1, 1);
coordinates(-1, -1);

console.log("EXERCISE 4:\n==========\n");
function triangle(x, y, z) {
  if (x + y != z || x + z != y || y + z != x) {
    console.log("NOT A TRIANGLE");
  } else if ((x == y) == z) {
    console.log("equilateral");
  } else if (x == y || z == y || z == x) {
    console.log("isoceles");
  } else {
    console.log("scalene");
  }
}
triangle(11, 11, 11);
triangle(10, 11, 11);
triangle(5, 6, 12);
triangle(13, 14, 9);

console.log("EXERCISE 5:\n==========\n");
function dataPlan(planLimit, day, usage) {
  console.log(`${day} day(s) used, ${30 - day} day(s) remaining`);
  console.log(`average daily use: ${usage / day} GB/day`);
  console.log(`daily limit: ${planLimit / 30}`);
  console.log(`your estimated daily use: ${(usage / day) * 30}`);
  if (planLimit / 30 > (usage / day) * 30) {
    console.log("you are below your daily limit");
    console.log(
      `if you continue, you will be below your limit by ${
        planLimit - (usage / day) * 30
      } GB`
    );
  }
  if (planLimit / 30 < (usage / day) * 30) {
    console.log("you are above your daily limit");
    console.log(
      `if you continue, you will be above your limit by ${
        (usage / day) * 30 - planLimit
      } GB`
    );
  }
  if (planLimit / 30 == (usage / day) * 30) {
    console.log("you are exactly at your daily limit");
  }
}
dataPlan(100, 15, 50);
dataPlan(100, 13, 60);
dataPlan(100, 11, 10);
