// Hamburger toggle control
function hamburgerControl() {
  // Gather elements by id attributes
  var x = document.getElementById("myTopnav");
  var b = document.getElementById("sec-col");

  // This decision displays on and off the nav anchors in mobile @media (max-width: 702px)
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
  // This decision controls the margin top of the menu section in mobile @media (max-width: 702px)
  if (b.className === "col-top") {
    b.className += " responsiveA";
  } else {
    b.className = "col-top";
  }
}

// Food Item Multidimensional Array

// Create arrays to hold food category and items

const foodlist = [
  ["Donuts", "Classic glazed, Blueberry, Chocolate, Powdered", "$1.00 ea."],

  [
    "Cookies and Cookie Bars",

    "Chocolate Chip, Oatmeal, Brownies, Turtle Brownies",

    "$1.00 ea.",
  ],

  ["Cake By-the-slice", "Caramel, Chocolate, Carrot, Coconut", "$2.00 ea."],

  [
    "Pastries",

    "Apple Fritters, Cheese Danish, Apple Danish, Bear Claws",

    "$2.00 ea.",
  ],
];

// Function to iterate through the array and create html for the food items

function createListItems(arr) {
  let items = "";

  for (let i = 0; i < arr.length; i++) {
    items += `<h4>${arr[i][0]}</h4> <p class="text-grey">${arr[i][1]} <strong>${arr[i][2]}</strong></p>`;
  }

  return items;
}

// Insert foodlist into the main element in the menu section content in index.html file

document.querySelector("main").innerHTML = `${createListItems(foodlist)}`;
