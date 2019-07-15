var randomDecisions=["I would give you a nasty look but you already have one.",
"I love what you have done with your hair. How do you get it to come out of the nostrils like that?",
"If laughter is the best medicine, your face must be curing the world.",
"If I wanted a b*tch, I would have bought a dog.",
"I would like to see things from your point of view, but I cannot seem to get my head that far up your a**.",
"Why is it acceptable for you to be an idiot but not for me to point it out?",
"Your lips keep moving but all I hear is Blah, blah, blah.",
"Your family tree must be a cactus because everyone on it is a prick.",
"Just because you have one doesnt mean you need to act like one.",
"Im sorry, was I meant to be offended? The only thing offending me is your face.",
"Someday you will go far . . .and I hope you stay there.",
"If I had a face like yours I would sue my parents.",
"If you really want to know about mistakes, you should ask your parents.",
"Please, keep talking. I always yawn when I am interested.",
"The zoo called. They are wondering how you got out of your cage?",
"Jesus loves you . . . but everyone else thinks you are an a**hole.",
"I was hoping for a battle of wits but you appear to be unarmed.",
"Hey, you have something on your chin. . . no, the 3rd one down.",
"Aww, it is so cute when you try to talk about things you dont understand.",
"You are proof that evolution can go in reverse.",
"Brains arent everything. In your case they are nothing.",
"I thought of you today. It reminded me to take the garbage out.",
"Im sorry I did not get that, I dont speak idiot.",
"Its better to let someone think you are stupid than open your mouth and prove it.",
"You are such a beautiful, intelligent, wonderful person. Oh Im sorry, I thought we were having a lying competition.",
"I would slap you but I dont want to make your face look any better.",
]


var button1=$(".decision");
var button2=$(".another");
var roast =$(".message");
var roast2=$(".message2");
var target=$(".target");


button1.on("click", generateRoast);
function generateRoast(){
  var name=$(".name-input").val();
  button1.toggleClass("decision");
  target.toggleClass("target")
  console.log(name);
  target.text(`Hey,${name}`);
  var randomDecimal= Math.random();
  var randomNum= randomDecimal *(randomDecisions.length);
  var finalNum= Math.floor(randomNum);
  console.log(randomDecisions[finalNum]);
  roast.text(randomDecisions[finalNum]);
}

button2.on("click", anotherRoast);
function anotherRoast(){
  var randomDecimal= Math.random();
  var randomNum= randomDecimal *(randomDecisions.length);
  var finalNum= Math.floor(randomNum);
  console.log(randomDecisions[finalNum]);
  roast2.text(randomDecisions[finalNum]);
}
