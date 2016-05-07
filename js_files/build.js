"use strict";
var RobotFight = (function(originalRobotFight){
    $(document).ready(function() {
        originalRobotFight.Robots = {};

        originalRobotFight.Robots.Player = function() {
            this.name = "FightBot";
            this.type = "";
            this.life = 100 + Math.floor(Math.random()*30); // <------------- 100 - 130 BASELINE LIFE.
            this.power = 10; // <-----------  ex. RobotFight.Armory.Weapon.power;
            this.a_i = 10;
            this.repair = 10;
            this.evade = 10;
            this.armor = 10;
        //     this.toString() = function() { 
        //         return this.name;
        //     };
        };
        originalRobotFight.Robots.Drone = function() {
            this.name = "Malfacto";
            this.type = "Drone";
            this.life = this.life + 15;
            this.power = this.power + 20;
            this.a_i = this.a_i + 20;
            this.repair = this.repair + 20;
            this.evade = this.evade + 5;
            this.armor = this.armor + 5;

        };
        originalRobotFight.Robots.Drone.prototype = new originalRobotFight.Robots.Player();
        
        originalRobotFight.Robots.BiPedal = function() {
            this.name = "Bi-Ped";
            this.type = "BiPedal";
            this.life = this.life + 20;
            this.power = this.power + 20;
            this.a_i = this.a_i + 20;
            this.repair = this.repair + 20;
            this.evade = this.evade + 5;
            this.armor = 5;

        };
        originalRobotFight.Robots.BiPedal.prototype = new originalRobotFight.Robots.Player();
        
        originalRobotFight.Robots.ATV = function() {
            this.name = "Chip";
            this.type = "ATV";
            this.life = this.life + 25;
            this.power = this.power + 20;
            this.a_i = this.a_i + 20;
            this.repair = this.repair + 20;
            this.evade = this.evade + 5;
            this.armor = 5;            

        };
        originalRobotFight.Robots.ATV.prototype = new originalRobotFight.Robots.Player();

    });
    return originalRobotFight;
})(RobotFight || {});