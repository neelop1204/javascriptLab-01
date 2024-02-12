// VARIABLE DECLARATIONS
var customName = document.getElementById("customName");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

// Create the variable that contains the story string that will be modified
var storyText =
  'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// Create three arrays
var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = [
  "spontaneously combusted",
  "rapidly sublimated",
  "evaporated instantly",
];

// FUNCTIONS
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function result() {
  // Create a new variable called newStory
  var newStory = storyText;

  // Use the randomValueFromArray() function to generate a value for each of three new variables
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  // Replace the three placeholders in the newStory string
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  // If the user has typed a name in the customName field, replace the name 'Bob' in the story with whatever they typed
  if (customname.value !== "") {
    newStory = newStory.replace("Bob", customname.value);
  }

  // If the metric radio button has been checked, convert temperature and mass numbers in the story
  if (document.getElementById("metric").checked) {
    var weight = Math.round(300 * 0.453592); // Convert pounds to kilograms
    newStory = newStory.replace("300 pounds", weight + " kilograms");

    var temp = Math.round((94 - 32) * (5 / 9)); // Convert Fahrenheit to Celsius
    newStory = newStory.replace("94 fahrenheit", temp + " celsius");
  }

  // Make the textContent property of the story variable equal to newStory
  story.textContent = newStory;

  // Make the paragraph visible
  story.style.visibility = "visible";
}

// EVENT LISTENERS
randomize.addEventListener("click", result);
