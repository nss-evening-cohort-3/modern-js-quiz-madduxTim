"use strict";
var RobotFight = (function(originalRobotFight){
    $(document).ready(function() {  
       
       // TO START PLAYER 2 AND BATTLEFIELD STUFF HIDDEN
       
       // ------------- FOR THIS TO WORK AGAIN, NEED TO REMOVE THE P1 HIDE AND UNCOMMENT ------------------------- // 
       // ------------BATTLEFIELD HIDE ------------------------- // 
       
        $("#p2_view").hide();
        // $("#p1_view").hide();
        $("#battleField").hide();
        let modalTest = 0;      // <--------- REPLACE WITH LOGIC THAT SAYS IF PLAYER 2 HAS BEEN DEFINED SOMEHOW
    
        // THESE APPLY TO BOTH PLAYER 1 AND PLAYER 2
        let robotChoiceString = "<div id='Drone' class='btn btn-primary robotType' disabled>Drone</div><div id='BiPedal' class='btn btn-primary robotType' disabled>BiPedal</div><div id='ATV' class='btn btn-primary robotType' disabled>ATV</div><p>Pick a Battle Droid</p>"
        let weaponChoiceString = "<div id='ScrewDriver' class='btn btn-primary weaponButton' disabled>Screw-Driver</div><div id='Rockets' class='btn btn-primary weaponButton' disabled>Rockets</div><div id='MiniGun' class='btn btn-primary weaponButton' disabled>Mini-Gun</div><div id='Lasers' class='btn btn-primary weaponButton' disabled>Lasers</div><div id='DeathRay' class='btn btn-primary weaponButton' disabled>Death-Ray</div><div id='LightSaber' class='btn btn-primary weaponButton' disabled>Light-Saber</div><p>Choose Weapons for your Robot</p>"
        let modificationChoiceString = "<div id='JetPack' class='btn btn-primary modificationButton' disabled>Jet-Pack</div><div id='SolarPanels' class='btn btn-primary modificationButton' disabled>Solar-Panels</div><div id='ExtraChipset' class='btn btn-primary modificationButton' disabled>Extra-Chipset</div><div id='RepairKit' class='btn btn-primary modificationButton' disabled>Repair-Kit</div><div id='BlastShield' class='btn btn-primary modificationButton' disabled>Blast-Shield</div><div id='NightVision' class='btn btn-primary modificationButton' disabled>Night-Vision</div><p>Choose Modifications for your Robot</p>";
        $(".robotChoice").append(robotChoiceString);
        $(".weaponChoice").append(weaponChoiceString);
        $(".modificationChoice").append(modificationChoiceString);
        
        // START BUILDING ROBOT 1 BUTTON
        $("#p1Button").click(function(){
            $("#p1Button").attr("disabled", true);
            $(".robotType").attr("disabled", false);
        });

        // PICK A ROBOT TYPE 
        $(".robotType").click(function(){
            $(".robotType").attr("disabled", true);
            $(".weaponButton").attr("disabled", false);
        });  

        // PICK A WEAPON 
        $(".weaponButton").click(function(){
            $(".weaponButton").attr("disabled", true);
            $(".modificationButton").attr("disabled", false);
        });        

        // PICK A MODIFICATION 
        $(".modificationButton").click(function(){
            $(".modificationButton").attr("disabled", true);
            $("#p1_view").hide();
            $("#p2_view").show();
            modalTest += 1;
        });

// ------------------------------ ROBOT 2 -------------------------------- //

        // START BUILDING ROBOT 2 BUTTON
        $("#p2Button").click(function(){
            $("#p2Button").attr("disabled", true);
            $(".robotType").attr("disabled", false);
        });

        // PICK A ROBOT TYPE 
        $(".robotType").click(function(){
            $(".robotType").attr("disabled", true);
            $(".weaponButton").attr("disabled", false);
        });  

        // PICK A WEAPON 
        $(".weaponButton").click(function(){
            $(".weaponButton").attr("disabled", true);
            $(".modificationButton").attr("disabled", false);
        });        

        // PICK A MODIFICATION 
        $(".modificationButton").click(function(){
            $(".modificationButton").attr("disabled", true);
            modalTest += 1;
            fightReady();
        });

        function fightReady() {
            if (modalTest === 4) {
                $("#p2_view").hide();
                $("#battleReadyModal").modal("show");
            };
        };

    });
    return originalRobotFight;
})(RobotFight || {});
