"use strict";
var RobotFight = (function(originalRobotFight){
    $(document).ready(function() {
        originalRobotFight.ModBag = {};


        originalRobotFight.ModBag.Modification = function () {
            this.name = "Modification";
            this.power = 0;
            this.a_i = 0;
            this.evade = 0;
            this.repair = 0;
            this.armor = 0;
            // this.toString = function() {
            //     return this.name;
            // }
        };

        // MODIFICATION CLASSES 
        originalRobotFight.ModBag.JetPack = function() {
            this.name = "JetPack";
            this.evade = 5;
        };
        originalRobotFight.ModBag.JetPack.prototype = new originalRobotFight.ModBag.Modification();

        originalRobotFight.ModBag.SolarPanels = function() {
            this.name = "SolarPanels";
            this.repair = 5;
        };
        originalRobotFight.ModBag.SolarPanels.prototype = new originalRobotFight.ModBag.Modification();

        originalRobotFight.ModBag.ExtraChipset = function() {
            this.name = "ExtraChipset";
            this.a_i = 5;
        };
        originalRobotFight.ModBag.ExtraChipset.prototype = new originalRobotFight.ModBag.Modification();

        originalRobotFight.ModBag.RepairKit = function() {
            this.name = "RepairKit";
            this.repair = 5;
        };
        originalRobotFight.ModBag.RepairKit.prototype = new originalRobotFight.ModBag.Modification();

        originalRobotFight.ModBag.BlastShield = function() {
            this.name = "BlastShield";
            this.armor = 5;
        };
        originalRobotFight.ModBag.BlastShield.prototype = new originalRobotFight.ModBag.Modification();

        originalRobotFight.ModBag.NightVision = function() {
            this.name = "NightVision";
            this.a_i = 5;
        };
        originalRobotFight.ModBag.NightVision.prototype = new originalRobotFight.ModBag.Modification();


    });
    return originalRobotFight;
})(RobotFight || {});