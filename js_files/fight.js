"use strict";
var RobotFight = (function(originalRobotFight){
    $(document).ready(function() {
        
        let playerObj = originalRobotFight.playerObjGetter();
        let roundCounter = 1;
        let p1Damage = [];  
        let p2Damage = []; 
        
        // - - - - - MOTHER OF ALL FIGHT FUNCTIONALITY TRIGGERS FIGHT LOGIC AND... - - - - - - - //
            // - - - - - - SETS/STORES ROUND DAMAGE IN ARRAY INDICES AND... - - - - - //
                // - - - - - CREATES NEW DIV/ROUND/CARD EVERY CLICK - - - - - //  
        $("#fightBtn").click(function(){
            p1Damage.push(Math.floor(Math.random()*20) + playerObj.player1.weapon.power);
            p2Damage.push(Math.floor(Math.random()*20) + playerObj.player2.weapon.power);
            $("#battleLog").append(`<div id="round${[roundCounter]}" class='col-md-4 newRoundInfo'>Round ${[roundCounter]}</div>`);
            calculateEvade();
            calculateRepair();
            calculateCriticalStrike();
            displayRoundResult();
            winnerTest();
            roundCounter++;
        });

        // - - - - - CALC CHANCE OF DODGING A DIRECT HIT BY OPPONENT BASED ON EVADE - - - - - - // 
        function calculateEvade() {
            let evadeAbility1 = (Math.floor(Math.random()*5) + playerObj.player1.modification.evade + playerObj.player1.evade);
            let evadeAbility2 = (Math.floor(Math.random()*5) + playerObj.player2.modification.evade + playerObj.player2.evade);
            if (evadeAbility1 > 7) {
                p2Damage[roundCounter-1] = p2Damage[roundCounter-1] / 2;
                $(`#round${[roundCounter]}`).append("<div class='evadeAlert'>Player 1 dodges, taking half the damage!</div>");
            }
            if (evadeAbility2 > 7) {
                p1Damage[roundCounter-1] = p1Damage[roundCounter-1] / 2;
                $(`#round${[roundCounter]}`).append("<div class='evadeAlert'>Player 2 dodges, taking half the damage!</div>");                
            }
            console.log("p1Damage:", p1Damage);
            console.log("p2Damage:", p2Damage);
        }

            // - - - - - - - - - PLAYER GETS 1 / 10** CHANCE OF TRIPLING DAMAGE - - - - - - - - - - //
                 // - - - - - - - **INCREASES BASED ON CHOICE OF MODIFICATION - - - - - - - - //
        function calculateCriticalStrike() {
            let player1CriticalStrike = (Math.floor(Math.random()*100) + playerObj.player1.modification.criticalStrike);
            let player2CriticalStrike = (Math.floor(Math.random()*100) + playerObj.player2.modification.criticalStrike);
            if (player1CriticalStrike >= 91) {
                p1Damage[roundCounter-1] = p1Damage[roundCounter-1] * 3;
                $(`#round${[roundCounter]}`).append("<div class='evadeAlert'>Player 1 lands a critical strike!</div>");
            }
            if (player2CriticalStrike >= 91) {
                p2Damage[roundCounter-1] = p2Damage[roundCounter-1] * 3;
                $(`#round${[roundCounter]}`).append("<div class='evadeAlert'>Player 2 lands a critical strike!</div>");
            }
            // - - - - - - - - SUB DAMAGE FROM LIFE AFTER EVADE & CRIT-STRIKE ARE CALC'D - - - - - - - - //
            playerObj.player1.life -= Math.round(p2Damage[roundCounter-1]);
            playerObj.player2.life -= Math.round(p1Damage[roundCounter-1]);
        }

        // - - - - - USE A_I AND REPAIR ABILITY TO CALC REPAIR EVERY ROUND - - - - // 
        function calculateRepair() {
            let a_iPlayer1 = playerObj.player1.modification.a_i + playerObj.player1.a_i;
            let a_iPlayer2 = playerObj.player2.modification.a_i + playerObj.player2.a_i;
            let repairAbilityPlayer1 = (Math.floor(Math.random()*a_iPlayer1) + playerObj.player1.modification.repair + playerObj.player1.repair) / 4;
            let repairAbilityPlayer2 = (Math.floor(Math.random()*a_iPlayer2) + playerObj.player2.modification.repair + playerObj.player2.repair) / 4;
            playerObj.player1.life += repairAbilityPlayer1;
            playerObj.player2.life += repairAbilityPlayer2;
            // - - - - - ROUND UP THE NUMBER OF REMAINING LIFE FOR READABILITY - - - - - //
            playerObj.player1.life = Math.round(playerObj.player1.life);
            playerObj.player2.life = Math.round(playerObj.player1.life);
        }

        // - - - - - - - - - DISPLAY ROUND RESULTS - - - - - - - - //
        function displayRoundResult() {    
            $(`#round${[roundCounter]}`).append("<p>Player 1 Attack Strength = "+p1Damage[roundCounter-1]+"</p>");
            $(`#round${[roundCounter]}`).append("<p>Player 2 Attack Strength = "+p2Damage[roundCounter-1]+"</p>");
            $(`#round${[roundCounter]}`).append("<p>Player 1 Remaining Health = "+playerObj.player1.life+"</p>");
            $(`#round${[roundCounter]}`).append("<p>Player 2 Remaining Health = "+playerObj.player2.life+"</p>");
        }

        // - - - - - - WANTED TO ANNOUNCE A WINNER VIA MODAL - - - - - - - //
        // - - - -  BUT I HAVE TO MOVE ON TO SOMETHING FOR A BIT - - - - - //
        function winnerTest() {
            if (playerObj.player1.life <= 0 && playerObj.player2.life <= 0) {
                alert("Both bots are toast!");
            } else if (playerObj.player2.life <= 0) {
                alert("Player 2 is dead!");
            } else if (playerObj.player1.life <= 0) {
                alert("Player 1 is dead!");
            }
        }

    }); 
    return originalRobotFight;
})(RobotFight || {}); 