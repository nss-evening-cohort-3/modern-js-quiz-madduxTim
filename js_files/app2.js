"use strict";
var RobotFight = (function(originalRobotFight){
    $(document).ready(function() {  

// --------------------- THESE TWO FUNCTIONS ARE FUNCTIONALITY FOR BUILDING A BOT ------------------- //
       

       // ------------- UNCOMMENT WHEN READY TO WORK AGAIN ------------ //
        let playerObj = {};
        let player1build = true;

        originalRobotFight.player1Setup = (function() {
            $("#p1Button").click(function(){        
                $(".robotType").click(function(event){
                    if (player1build === true) {
                        playerObj.player1 = new originalRobotFight.Robots[event.target.id];
                    };
                });
                $(".weaponButton").click(function(event){
                    if (player1build === true) {
                        playerObj.player1.weapon = new originalRobotFight.Armory[event.target.id];
                    };
                });
                $(".modificationButton").click(function(event){
                    if (player1build === true) {                
                        playerObj.player1.modification = new originalRobotFight.ModBag[event.target.id];
                    };
                });
            });
        })(); 

        originalRobotFight.player2Setup = (function() {
            $("#p2Button").click(function(){
                player1build = false;
                $(".robotType").click(function(event){
                    playerObj.player2 = new originalRobotFight.Robots[event.target.id];
                });
                $(".weaponButton").click(function(event){
                    playerObj.player2.weapon = new originalRobotFight.Armory[event.target.id];
                });
                $(".modificationButton").click(function(event){
                    playerObj.player2.modification = new originalRobotFight.ModBag[event.target.id];
                    postPreStatsToModal();
                });
            });
        })(); 

// --------------------- THIS IS FOR ADDING CONTENT TO THE MODAL BEFORE BATTLE  ------------------- //
        
        $("#resetButton").click(function(e) {
            location.reload(true);
        });

        $("#toBattleButton").click(function(){
            $("#battleField").show();
        });

        // YOU NEED TO DRY THIS OUT - FOR IN LOOP? 
        function postPreStatsToModal() {
            $("#player1Stats").append("<div>"+playerObj.player1.name+"</div>");
            $("#player1Stats").append("<div>"+playerObj.player1.weapon.name+"</div>");
            $("#player1Stats").append("<div>"+playerObj.player1.modification.name+"</div>");
            $("#player1Stats").append("<div>"+playerObj.player1.life+"</div>");
            $("#player1Stats").append("<div>"+playerObj.player1.a_i+"</div>");
            $("#player1Stats").append("<div>"+playerObj.player1.armor+"</div>");
            $("#player1Stats").append("<div>"+playerObj.player1.evade+"</div>");

            $("#player2Stats").append("<div>"+playerObj.player2.name+"</div>");
            $("#player2Stats").append("<div>"+playerObj.player2.weapon.name+"</div>");
            $("#player2Stats").append("<div>"+playerObj.player2.modification.name+"</div>");
            $("#player2Stats").append("<div>"+playerObj.player2.life+"</div>");
            $("#player2Stats").append("<div>"+playerObj.player2.a_i+"</div>");
            $("#player2Stats").append("<div>"+playerObj.player2.armor+"</div>");
            $("#player2Stats").append("<div>"+playerObj.player2.evade+"</div>");
        };

// --------------------- THIS IS THE FIGHT BUTTON AND FIGHT LOGIC ----------------------------- //


// --------------------- TEMPORARILY BUILDING ROBOTS SO CAN FUCK WITH FIGHT LOGIC ------------------- //
        // let playerObj = {};
        // $(document).ready(function(){
        //     playerObj.player1 = new originalRobotFight.Robots.Drone();
        //     playerObj.player1.weapon = new originalRobotFight.Armory.ScrewDriver();
        //     playerObj.player1.modification = new originalRobotFight.ModBag.JetPack();

        //     playerObj.player2 = new originalRobotFight.Robots.ATV();
        //     playerObj.player2.weapon = new originalRobotFight.Armory.Rockets();
        //     playerObj.player2.modification = new originalRobotFight.ModBag.NightVision();
        // }); 

// --------------------- TEMPORARILY BUILDING ROBOTS SO CAN TINKER WITH FIGHT LOGIC ------------------- //

        let roundCounter = 1;
        let roundArray = []; // <----------- PUSH ROUND INFORMATION TO THIS ARRAY AND THEN DISPLAY EACH INDEX AS A ROUND????
        $(document).load($("#battleField").append("<div id='fightBtn' class='btn btn-primary'>Fight</div>"));
        
        $("#fightBtn").click(function(){
            playerObj.player1.life = playerObj.player1.life - playerObj.player2.weapon.power;
            playerObj.player2.life = playerObj.player2.life - playerObj.player1.weapon.power;
            $("#battleField").append("<p>Player 1 Health = "+playerObj.player1.life+"</p>");
            $("#battleField").append("<p>Player 1 Weapon Strength = "+playerObj.player1.weapon.power+"</p>");
            $("#battleField").append("<p>Player 2 Health = "+playerObj.player2.life+"</p>");
            $("#battleField").append("<p>Player 2 Weapon Strength = "+playerObj.player2.weapon.power+"</p>");
            $("#battleField").append("<p> Round "+roundCounter+"</p>");
            roundCounter++;
            winnerTest();
        });

        function winnerTest() {
            if (playerObj.player1.life <= 0 || playerObj.player2.life <= 0) {
                if (playerObj.player1.life <= 0) {
                    alert("Player 1 is dead!");
                } else if (playerObj.player2.life <= 0) {
                    alert("Player 2 is dead!");
                }
            }
        }
    });
    return originalRobotFight;
})(RobotFight || {});