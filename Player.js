class Player {
  constructor(){ 
    this.index = null;
    this.name = null;
    this.name1 = null;
    this.name3 = null;
    this.index1 = null;
    this.index3 = null;
    this.distance = 0;
  }
 
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

 /* getCount1(){
    var playerCountRef2 = database.ref('nameCount');
    playerCountRef2.on("value",function(data){
      nameCount = data.val();
    })
  }*/


  updateCount(count){
    database.ref('/').update({
      playerCount : count
    });
  }

 /* updateCount1(count2){
    database.ref('/').update({
      nameCount : count2
    });
  }*/

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance:this.distance
    })
  }

 /* update1(){
    var playerIndex1 = "World/name" + this.index1;
    database.ref(playerIndex1).set({
      name: this.name1
    })
  }*/


  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();

    })
  }




}