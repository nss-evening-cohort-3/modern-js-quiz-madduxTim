"use strict";
var RobotFight = (function(originalRobotFight){
    $(document).ready(function() {  

        // - - - - - - - - - - FUNCTIONALITY FOR BUILDING BOTH BOTS - - - - - - - - - - //
        let playerObj = {};
        let player1build = true;

        let player1Setup = (function() {
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

        let player2Setup = (function() {
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

        // - - - - - - - GETTER TO MAKE PLAYEROBJ ACCESSIBLE IN OTHER IIFES - - - - - // 
        originalRobotFight.playerObjGetter = function() {
            return playerObj;
        }

        // - - - - - - PRE-FIGHT MODAL CONTENT: RELOAD OR CONTINUE TO FIGHT - - - - - - - //
        $("#resetButton").click(function() {
            location.reload(true);
        });

        $("#toBattleButton").click(function(){
            $("#battleField").show();
        });

        // - - - - - - PUSH PLAYER STATS TO MODAL FOR INSPECTION PRE-FIGHT - - - - - - - - //
        function postPreStatsToModal() {
            $("#player1Stats").append("<div>Player 1 = "+playerObj.player1.name+"</div>");
            $("#player1Stats").append("<div>Weapon = "+playerObj.player1.weapon.name+"</div>");
            $("#player1Stats").append("<div>Modification = "+playerObj.player1.modification.name+"</div>");
            $("#player1Stats").append("<div>Beginning Health = "+playerObj.player1.life+"</div>");
            $("#player1Stats").append("<div>A. Intelligence = "+playerObj.player1.a_i+"</div>");
            $("#player1Stats").append("<div>Armor = "+playerObj.player1.armor+"</div>");
            $("#player1Stats").append("<div>Evade = "+playerObj.player1.evade+"</div>");

            $("#player2Stats").append("<div>Player 2 = "+playerObj.player2.name+"</div>");
            $("#player2Stats").append("<div>Weapon = "+playerObj.player2.weapon.name+"</div>");
            $("#player2Stats").append("<div>Modification = "+playerObj.player2.modification.name+"</div>");
            $("#player2Stats").append("<div>Beginning Health = "+playerObj.player2.life+"</div>");
            $("#player2Stats").append("<div>A. Intelligence = "+playerObj.player2.a_i+"</div>");
            $("#player2Stats").append("<div>Armor = "+playerObj.player2.armor+"</div>");
            $("#player2Stats").append("<div>Evade = "+playerObj.player2.evade+"</div>");
        };


// - - - - - - - - - - - - UNCOMMENT THIS TO SKIP STRAIGHT TO FIGHT FUNCTIONALITY - - - - - - - - //
        
        // $(document).ready(function(){
        //     playerObj.player1 = new originalRobotFight.Robots.Drone();
        //     playerObj.player1.weapon = new originalRobotFight.Armory.ScrewDriver();
        //     playerObj.player1.modification = new originalRobotFight.ModBag.JetPack();

        //     playerObj.player2 = new originalRobotFight.Robots.ATV();
        //     playerObj.player2.weapon = new originalRobotFight.Armory.Rockets();
        //     playerObj.player2.modification = new originalRobotFight.ModBag.JetPack();
        //     console.log(playerObj.player1.life, playerObj.player2.life);
        // }); 

    });
    return originalRobotFight;
})(RobotFight || {});