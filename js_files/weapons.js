"use strict";
var RobotFight = (function(originalRobotFight){
    $(document).ready(function() {
        originalRobotFight.Armory = {};

        // PROTO WEAPON
        originalRobotFight.Armory.Weapon = function() {
            this.name = "Pinchers";
            this.power = 10; 
        };

        // WEAPON CLASSES
        originalRobotFight.Armory.ScrewDriver = function() {
            this.name = "ScrewDriver";
            this.power = this.power + 15;
        };
        originalRobotFight.Armory.ScrewDriver.prototype = new originalRobotFight.Armory.Weapon();

        originalRobotFight.Armory.Rockets = function() {
            this.name = "Rockets";
            this.power = this.power + 15;
        };
        originalRobotFight.Armory.Rockets.prototype = new originalRobotFight.Armory.Weapon();

        originalRobotFight.Armory.MiniGun = function() {
            this.name = "MiniGun";
            this.power = this.power + 15;
        };
        originalRobotFight.Armory.MiniGun.prototype = new originalRobotFight.Armory.Weapon();

        originalRobotFight.Armory.Lasers = function() {
            this.name = "Lasers";
            this.power = this.power + 15;
        };
        originalRobotFight.Armory.Lasers.prototype = new originalRobotFight.Armory.Weapon();
        
        originalRobotFight.Armory.DeathRay = function() {
            this.name = "DeathRay";
            this.power = this.power + 15;
        };
        originalRobotFight.Armory.DeathRay.prototype = new originalRobotFight.Armory.Weapon();

        originalRobotFight.Armory.LightSaber = function() {
            this.name = "LightSaber";
            this.power = this.power + 15;
        };
        originalRobotFight.Armory.LightSaber.prototype = new originalRobotFight.Armory.Weapon();

    });
    return originalRobotFight;
})(RobotFight || {});