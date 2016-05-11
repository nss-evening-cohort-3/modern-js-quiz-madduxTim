"use strict";
var RobotFight = (function(originalRobotFight){
    $(document).ready(function() {  
       
        // - - - - - CONTROLS THE USER INTERACTION DURING ROBOT SELECTION - - - - - - - //                
        $("#p2_view").hide();
        $(".robotChoice").hide();
        $(".weaponChoice").hide();
        $(".modificationChoice").hide();
        $("#battleField").hide();
    
        //  - - - - - - THESE APPLY TO BOTH PLAYER 1 AND PLAYER 2 - - - - - - // 
        let robotChoiceString = "<div id='Drone' class='btn btn-primary robotType'>Drone</div><div id='BiPedal' class='btn btn-primary robotType'>BiPedal</div><div id='ATV' class='btn btn-primary robotType'>ATV</div><p>Pick a Battle Droid</p>"
        let weaponChoiceString = "<div id='ScrewDriver' class='btn btn-primary weaponButton'>Screw-Driver</div><div id='Rockets' class='btn btn-primary weaponButton'>Rockets</div><div id='MiniGun' class='btn btn-primary weaponButton'>Mini-Gun</div><div id='Lasers' class='btn btn-primary weaponButton'>Lasers</div><div id='DeathRay' class='btn btn-primary weaponButton'>Death-Ray</div><div id='LightSaber' class='btn btn-primary weaponButton'>Light-Saber</div><p>Choose Weapons for your Robot</p>"
        let modificationChoiceString = "<div id='JetPack' class='btn btn-primary modificationButton'>Jet-Pack</div><div id='SolarPanels' class='btn btn-primary modificationButton'>Solar-Panels</div><div id='ExtraChipset' class='btn btn-primary modificationButton'>Extra-Chipset</div><div id='RepairKit' class='btn btn-primary modificationButton'>Repair-Kit</div><div id='BlastShield' class='btn btn-primary modificationButton'>Blast-Shield</div><div id='NightVision' class='btn btn-primary modificationButton'>Night-Vision</div><p>Choose Modifications for your Robot</p>";
        $(".robotChoice").append(robotChoiceString);
        $(".weaponChoice").append(weaponChoiceString);
        $(".modificationChoice").append(modificationChoiceString);
        
        // - - - - - - START BUILDING ROBOT 1 - - - - - - - //
        $("#p1Button").click(function(){
            $(".robotChoice").show();
            $("#p1Button").hide();
        });

        // PICK A ROBOT TYPE 
        $(".robotType").click(function(){
            $(".robotChoice").hide();
            $(".weaponChoice").show();
        });  

        // PICK A WEAPON 
        $(".weaponButton").click(function(){
            $(".weaponChoice").hide();
            $(".modificationChoice").show();
        });        

        // PICK A MODIFICATION 
        $(".modificationButton").click(function(){
            $(".modificationChoice").hide();
            $("#p1_view").hide();
            $("#p2_view").show();
        });

        // - - - - - -  ROBOT 2 - - - - - -  //
        $("#p2Button").click(function(){
            $("#p2Button").hide();
            $(".robotChoice").show();
        });

        $(".robotType").click(function(){
            $(".robotChoice").hide();
            $(".weaponChoice").show();
        });  

        $(".weaponButton").click(function(){
            $(".weaponChoice").hide();
            $(".modificationChoice").show();
        });        

        $(".modificationButton").click(function(){
            $(".modificationChoice").hide();
            fightReady();
        });

        // - - - - - - THIS FUNCTION TESTS TO MAKE SURE P2 HAS BEEN DEFINED. IF YES, PROCEED - - - - - //
        function fightReady() {
            let playerObj = originalRobotFight.playerObjGetter();
            if (playerObj.player2 !== undefined) {
                $("#p2_view").hide();
                $("#battleReadyModal").modal("show");
            };
        };
    });
    return originalRobotFight;
})(RobotFight || {});
