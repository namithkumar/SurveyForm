class Form{
    constructor(){

    }

    display()
    {
        var ans1 = 'Yes', ans2 = 'Yes', ans3= 'Yes';
        var title = createElement('h2')
        title.html("LOCKDOWN SURVEY");
        title.position(600, 100);
        var input = createInput("Email Id");
        var button = createButton('Next');
        input.position(600, 200);
        button.position(600, 250);
        button.mousePressed(function()
        { 
          input.hide();
          button.hide();
          var userEmail = input.value();
          var input1 = createInput("Was the lockdown timing correct?");
          var button1 = createButton('Yes');
          var button2 = createButton('No');
          input1.position(600, 200, 300);
          button1.position(670, 250);
          button2.position(710, 250);
          button1.mousePressed(function()
          { 
            input1.hide();
            button1.hide(); button2.hide();
          });
          button2.mousePressed(function()
          { 
            input1.hide();
            button1.hide(); button2.hide();
            ans1 = 'No';
          });
                    
          var buttonN = createButton('Next');
          buttonN.position(600, 250);
          buttonN.mousePressed(function()
          { 
            buttonN.hide();
            var input2 = createInput("Is another lockdown required?");
            var button3 = createButton('Yes');
            var button4 = createButton('No');
            input2.position(600, 200);
            button3.position(670, 250);
            button4.position(710, 250);
            button3.mousePressed(function()
            { 
              input2.hide();
              button3.hide(); button4.hide();
            });
            button4.mousePressed(function()
            { 
              input2.hide();
              button3.hide(); button4.hide();
              ans2 = 'No';
            });
                       
            var buttonN1 = createButton('Next');
            buttonN1.position(600, 250);
            buttonN1.mousePressed(function()
            { 
              buttonN1.hide();
              var input3 = createInput("Did the Government treat the migrants well?");
              var button5 = createButton('Yes');
              var button6 = createButton('No');
              input3.position(600, 200);
              button5.position(670, 250);
              button6.position(710, 250);
              button5.mousePressed(function()
              { 
                input3.hide();
                button5.hide(); button6.hide();
              });
              button6.mousePressed(function()
              { 
                input3.hide();
                button5.hide(); button6.hide();
                ans3 = 'No';
              });
              
              var buttonN2 = createButton('Next');
              buttonN2.position(600, 250);
              buttonN2.mousePressed(function()
              { 
                buttonN2.hide();
                var title2 = createElement('h2')
                title2.html("THANK YOU!!!");
                title2.position(600, 250);
              });
            });
          });
        });

        var Email = input.value();
        /*var answer1 = button1.value();
        var answer1 = button2.value();
        var answer2 = button3.value();
        var answer2 = button4.value(); 
        var answer3 = button5.value();
        var answer3 = button6.value();  */  
        
        voterCount+=1;
        voter.update(Email);
        voter.updateAns1(ans1);
        voter.updateAns2(ans2);
        voter.updateAns3(ans3);
        voter.updateCount(voterCount);
    }
};