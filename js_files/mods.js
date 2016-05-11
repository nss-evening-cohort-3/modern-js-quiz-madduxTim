"use strict";
var RobotFight = (function(originalRobotFight){
    $(document).ready(function() {
        originalRobotFight.ModBag = {};

        originalRobotFight.ModBag.Modification = function () {
            this.name = "Modification";
            this.a_i = 0;
            this.evade = 1;
            this.repair = 0;
            this.armor = 0;
            this.criticalStrike = 10;
        };

        // MODIFICATION CLASSES 
        originalRobotFight.ModBag.JetPack = function() {
            this.name = "JetPack";
            this.evade = this.evade + 4;
        };
        originalRobotFight.ModBag.JetPack.prototype = new originalRobotFight.ModBag.Modification();

        originalRobotFight.ModBag.SolarPanels = function() {
            this.name = "SolarPanels";
            this.repair = this.repair + 10;
        };
        originalRobotFight.ModBag.SolarPanels.prototype = new originalRobotFight.ModBag.Modification();

        originalRobotFight.ModBag.ExtraChipset = function() {
            this.name = "ExtraChipset";
            this.a_i = this.a_i + 5;
            this.criticalStrike = this.criticalStrike + 3;
        };
        originalRobotFight.ModBag.ExtraChipset.prototype = new originalRobotFight.ModBag.Modification();

        originalRobotFight.ModBag.RepairKit = function() {
            this.name = "RepairKit";
            this.repair = this.repair + 15;
        };
        originalRobotFight.ModBag.RepairKit.prototype = new originalRobotFight.ModBag.Modification();

        originalRobotFight.ModBag.BlastShield = function() {
            this.name = "BlastShield";
            this.armor = this.armor + 5;
        };
        originalRobotFight.ModBag.BlastShield.prototype = new originalRobotFight.ModBag.Modification();

        originalRobotFight.ModBag.NightVision = function() {
            this.name = "NightVision";
            this.criticalStrike = this.criticalStrike + 5; // <---- WHAT SHOULD THIS LOOK LIKE? //
        };
        originalRobotFight.ModBag.NightVision.prototype = new originalRobotFight.ModBag.Modification();


    });
    return originalRobotFight;
})(RobotFight || {});