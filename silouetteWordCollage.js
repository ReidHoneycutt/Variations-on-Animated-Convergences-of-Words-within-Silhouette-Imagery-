let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let W = window.innerWidth;
let H = window.innerHeight;


function setup() {
  createCanvas(W, H);
  background(255);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  text(random(colorlist), random(W), random(H));
}

// (1) Create image filter where the output is a set of point-pairs describing the edges of a silhouette
function filter() {
  // image edge-detect
  // get point pairs

}
// (2) Calculate the number of characters per line
function create_num_characters_array() {

}
// (3) Create mappings between the letters and the character cells
function create_letter_character_mapping() {

}
// (4) Develop a "path" for each word
function create_paths_for_each_word() {

}
// (5) Calculate "path" length
function calculate_path_length() {

}
// (6) Calculate velocity from length
function calculate_word_velocity_given_length() {

}
