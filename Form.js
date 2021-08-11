class Form {

  constructor() {
     this.input = createInput("Name");
     this.input2 = createInput("Your World")
      this.button = createButton('SinglePLayer');
      this.button2 = createButton('Multiplayer');
      this.button4= createButton('PLAY')


      this.title = createElement('h1');
      this.Back = createButton('Back');
      this.button3 = createButton('Lets Go')
      this.greeting = createElement('h2');
      this.greeting2 = createElement('h2')
      this.greeting3 = createElement('h2')
      this.input.hide();
      this.Back.hide();
      this.button3.hide()
      this.button4.hide()
  

      this.input2.hide()


     // this.button3.hide()
    }
    hide(){
      this.greeting.hide();
      this.greeting2.hide();
      this.button.hide();
      this.input.hide();
      this.input2.hide();
      this.title.hide();
      this.button2.hide();
      this.button4.hide();
      this.button3.hide();
      this.greeting3.hide()
    }


    display(){
           
     

      
    
        this.title.html("My Game");
        this.title.position(displayWidth/2 - 119, displayHeight/4-100);
    
        this.input.position(displayWidth/2 - 140, displayHeight/4);
        this.button.position(displayWidth/2 - 100, displayHeight/4);
        this.button2.position(displayWidth/2 - 93, displayHeight/4+30);
        this.button3.position(displayWidth/2 - 93, displayHeight/4+30);
        this.button4.position(displayWidth/2 - 170, displayHeight/4+30);

        this.input2.position(displayWidth/2 - 140, displayHeight/4);

        this.Back.position(displayWidth/2 + 300,displayHeight/2 - 350);
        this.button.mousePressed(()=>{
         // this.input.hide();
          this.button.hide();
          this.button2.hide();
          this.title.hide();
            //PLayer = this.input.value();
            button.play();
          
          //this.greeting.html("Hello " + PLayer)
          //this.greeting.position(displayWidth/2 - 70, displayHeight/4);
          GameState = 2;



        });



        this.button2.mousePressed(()=>{
          // this.input.hide();
           this.button.hide();
           this.button2.hide();
           this.title.hide();
           this.Back.show();
           this.button3.show();
          
           game.update(4);
           this.input.show();
          



 
         });
   
      

          this.button3.mousePressed(()=>{
          this.input.hide();
          this.button3.hide();
          player1.name = this.input.value();
          playerCount+=1;
          player1.index = playerCount;
          player1.update(player1.name);
          player1.updateCount(playerCount);
          this.greeting.html(player1.name)
          this.greeting2.html("Hello  "    + player1.name +    "    Welcome To Player Running Over Ground")
          this.greeting.position(displayWidth/2 - 650,displayHeight/2 - 395);
          this.greeting2.position(displayWidth/2 - 300,displayHeight/2 - 400)
          this.greeting.show()
          this.greeting2.show();
         

     
          Case = createSprite(120,25)
          Case.addImage("iMAGE",CaseImg)
          Case.scale = 0.8
          Case.visible = true

          
    
         });
           
         if(playerCount === 4){
          this.button4.show()
         }


  
         this.Back.mousePressed(()=>{

            this.input.hide();
            this.button.show();
            this.button2.show();
            this.button3.hide();
            this.title.show();
            this.Back.hide();
            game.update(1);
            this.greeting.hide();
            this.greeting2.hide();
            this.button4.hide()
            this.greeting3.hide()
            this.input2.hide()

            Case.visible = false
            Case2.visible = false
         });





         this.button4.mousePressed(()=>{
         
          if(gameState === 5){
          game.play()
          clickstate = 2



       







         }


         })


     if(gameState === 5){

      
      this.Back.mousePressed(()=>{
        player1.updateCount(0)
        this.input.hide();
        this.button.show();
        this.button2.show();
        this.button3.hide();
        this.title.show();
        this.Back.hide();
        game.update(1);
        this.greeting.hide();
        this.greeting2.hide();
        this.button4.hide()
        this.greeting3.hide()
        this.input2.hide()
        bg.visible = false;
        building1 = false;
        Case.visible = false
        Case2.visible = false
      


     });





     }



  
    }
  
  
  
  
  
  }
