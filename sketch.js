var form, canvas;
var voter;
var database;
var voter1, voter2, voter3;
var backGroundImg, voterCount;
var voterAns = [];
var voterEmail = [];

function setup(){
  canvas = createCanvas(400, 400);
  database = firebase.database();

}

function draw(){
  

  voter = new Voter();
  voter.getCount();
  console.log(voterCount);
  form = new Form();
  form.display();

  voterAns.push(answer1);
  voterAns.push(answer2);
  voterAns.push(answer3);

  voterEmail.push(Email);
  
}