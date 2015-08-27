$(document).ready(function(){

  var questions = [
    {question: "He played in the NFL for the Atlanta Falcons, the San Francisco 49ers,
                 the Dallas Cowboys, the Washington Redskins and the Baltimore Ravens, 
                 winning the Super Bowl with both the 49ers and the Cowboys. Notoriously 
                 know as 'Prime Time' and also played baseball",
     answers = ["Darallel Revis","Deion Sanders","Richard Sherman"],
     correct = 1
    },
    {question: "He  is the only quarterback to lead his team to six Super Bowls, 
    			and holds the record for the most total Super Bowl touchdown passes.[7] 
    			He was named the NFL MVP in 2007 and 2010 (
    			becoming the first player since 1986 to be unanimously chosen as MVP) 
				as well as the 2007 Male Athlete of the Year by the Associated Press, 
				the first NFL player to be so honored since 1990.",
     answers = ["Tom Brady","Peyton Manning","Joe Flacco"],
     correct = 0
   },
   {question: "He is the all-time leader in most major statistical categories for wide receivers,[3]
   			   including receptions, touchdown receptions, and yards. 
    		   He was selected to the Pro Bowl 13 times (1986–1996, 1998, 2002)
    		   and named All-Pro 12 times in his 20 NFL seasons. 
    		   He won three Super Bowl rings playing for the San Francisco 49ers and an 
    		   AFC Championship with the Oakland Raiders.",
     answers = ["Dez Bryant","Randy Moss","Jerry Rice"],
     correct = 2
   }
  ];
  	
    //create buttons for answer choices
    for (var j = 0, j < )
    answerButton = "<button>" + questions[i].answers[j] + "</button>"
    $('.choices').append(answerButton);

      <div id="question1">
        <p>
			"He played in the NFL for the Atlanta Falcons, the San Francisco 49ers,
                 the Dallas Cowboys, the Washington Redskins and the Baltimore Ravens, 
                 winning the Super Bowl with both the 49ers and the Cowboys. Notoriously 
                 know as 'Prime Time' and also played baseball"
        </p>
      </div>

      <div id="question2">
        <p>
        "He  is the only quarterback to lead his team to six Super Bowls, 
    			and holds the record for the most total Super Bowl touchdown passes.[7] 
    			He was named the NFL MVP in 2007 and 2010 (
    			becoming the first player since 1986 to be unanimously chosen as MVP) 
				as well as the 2007 Male Athlete of the Year by the Associated Press, 
				the first NFL player to be so honored since 1990."
        </p>
      </div>
      
      <div id="question3">
        <p>    "He is the all-time leader in most major statistical categories for wide receivers,[3]
   			   including receptions, touchdown receptions, and yards. 
    		   He was selected to the Pro Bowl 13 times (1986–1996, 1998, 2002)
    		   and named All-Pro 12 times in his 20 NFL seasons. 
    		   He won three Super Bowl rings playing for the San Francisco 49ers and an 
    		   AFC Championship with the Oakland Raiders."
    	</p>
      </div>


    var currentQuestion = 0;
    for (var i = 0, i < questions.length, i++) {
      
      display a question
      $("#question").html("<div id='question1><div>");

      //create buttons for answer choices
      for (var j = 0, j < questions[i].answers.length, j++) {
        answerButton = "<button type ='button'>" + questions[i].answers[j] + 
                        "value = '" + questions[1].correct + "' </button>"
        $('.choices').append(answerButton);
      }

      wait for answer
      evaluate answer
        if correct add to score

    }


  	var answer = "";
  	var phase1 = function(){
  	$("#q1A1").on('click', function(event) {
  		event.preventDefault();
  		answer = "Deion Sanders";
  		$("#view").html('Deion Sanders');
  	});
  	$("#q1A2").on('click', function(event) {
  		event.preventDefault();
  		answer = "Reggie Bush";
  		$("#view").html('Reggie Bush');
  	});
  	$("#q1A3").on('click', function(event) {
  		event.preventDefault();
  		answer = "Demarco Murray";
  		$("#view").html('Demarco Murray');
  	});  	

  $("#submit").on('click', function(event) {
  		event.preventDefault();
  	if(answer == )
	}); 

};

});