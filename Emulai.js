/*
                                   *Read*
                                 *IMPORTANT*
If you are using this library in your own project please give credit at the top of the code of your project with a link to this library and a link to my profile.

 What is ApriLib.js?
=====================
 
 - This is a javascript library with easy-to-use javascript commands.
 
=====================

   Links
=============
 
 Profile:
  
  - http://www.khanacademy.org/profile/AbundaSoft
 
=============

 Credits
=========
 Init Code:
 
  - TemporalFuzz (@maxzman14)
 
=========

 Quick Guide
=============
 
 Use:
 
  - To use this in your own projects, make a spin-off of this. Please don't copy and paste this code without credit or link to this code, and a link to my profile.
  
 What's New:
 
 - EmulaiJS has currently been rebranded as HTJSL
 
 - 
  
=============

 Coming Soon...
================
 
 - Nothing :(
 
================

*/

//The HTJSL code function
/*
NOTE:
This function has already been pre-defined, so please do NOT re-define this function's code, or your program might become messed up and the code won't work.
*/

var lib = {
  canvas: null,//The canvas to apply commands to
  pI: null,//The processing instance to apply the commands with
  programID: null,
  chars: "abcdefghijlkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|\\'\":;<,>./?".split(""),
  onKA: (document.location.origin === "https://www.kasandbox.org"),
  localStorage: null,
  debug: null,//The boolean value for debug mode
  init: function(Processing, canvas, ID) {
    /* @Author: TemporalFuzz (@maxzman14)
     * @Param Processing (Object): The Processing object (from the Processing.js library), passed as an argument so as not to cause errors.
     * @Param canvas (Canvas Element): The canvas for the Toolkit to act on.
     * @Description: Initializes and configures the library
     * @Revisions: None
    */
    if(typeof ID !== "number") { console.log("INVALID ID"); return; }
    lib.canvas = canvas;
    lib.pI = new Processing(lib.canvas);
    lib.programID = ID;
    lib.localStorage = localStorage;
    lib.debug = false;
  },

//Extra Function by: TemporalFuzz (@maxzman14)
  pixelArt: function(data, colors, w, h) {
    /* @Author: TemporalFuzz (@maxzman14)
     * @Param data (2D Array): The data that the pixel art uses
     * @Colors (Object): Matches each key with a color
     * @Params w, h (Numbers): Width and height of the image respectively. Both default to 120.
     * @Returns (Image): A new image with the pixel art drawn on it
     * @Revisions: 
       * Removed stroke from pixels (12/31/16, @maxzman14)
    */
    var img = lib.pI.createGraphics(w || 120, h || 120, 1);
    img.background(0, 0, 0, 0);
    img.noStroke();
    var longestRow = 0;
    for(var y = 0;y < data.length;y++) {
      if(data[y].length > longestRow) {
        longestRow = data[y].length;
      }
    }
    
    for(var y = 0;y < data.length;y++) {
      for(var x = 0;x < data[y].length;x++) {
        if(colors[data[y][x]] !== undefined) {
          img.fill(colors[data[y][x]]);
          img.rect(x * img.width/longestRow, y * img.height/data.length, img.width/longestRow, img.height/data.length);
        }
      }
    }
    
    return img.get();
  },
  
  storage: {
    set: function (item, value) {
      lib.localStorage.setItem(item, value);
    },
    get: function (item) {
      return lib.localStorage.getItem(item);
    },
    delete: function(item) {
      lib.localStorage.removeItem(item);
    },
    
   },
        boot: function (mode){
      var pjs = lib.pI;
      
      if(lib.localStorage.getItem("booted") === "true"){
                      if(mode === "boot") {
        pjs.background(159, 210, 252);
        pjs.fill(10 - 159, 210, 22 - 255 - 252);
        pjs.textSize(25);
        pjs.text("Di OS\n   ♨️", 425 - 75 * 2, 250);

        var DiOScriptLogPos = {
    
            xPos: 175,
            yPos: 200
    
        };
    
            if (pjs.millis() > 5000){
        
                    pjs.background(159, 210, 252);
                    pjs.fill(69, 171, 255);
                    pjs.stroke(28, 155, 252);
                    pjs.rect(-1, 600 - 151, 602, 50);
                    pjs.textSize(35);
                    pjs.text("♨️", 560, 485);
                    pjs.fill(204, 108, 108);
                    pjs.text("     Desktop\nComing Soon...", 200, 250);
                    
                
    
            
            }
                      }
      } else if(lib.localStorage.getItem("booted") !== "true") {
              if(mode === "boot") {
        pjs.background(159, 210, 252);
        pjs.fill(10 - 159, 210, 22 - 255 - 252);
        pjs.textSize(25);
        pjs.text("Di OS\n   ♨️", 425 - 75 * 2, 250);

        var DiOScriptLogPos = {
    
            xPos: 175,
            yPos: 200
    
        };

        pjs.draw  = function() {
    
            if (pjs.millis() > 5000){
        
                pjs.background(159, 210, 252);
                pjs.fill(247, 247, 247);
                pjs.noStroke();
                pjs.rect(60, 135, 295, 120);
                pjs.textSize(70);
                pjs.text("🛑", 65, 215);
                pjs.fill(36, 36, 36);
                pjs.textSize(15);
                pjs.text("Di OS would like permission to \noverwrite the current OS.\nIs this OK?", 140, 165);
                pjs.fill(73, 170, 250);
                pjs.rect(255, 210, 80, 30);
                pjs.fill(230, 230, 230);
                pjs.rect(150, 210, 80, 30);
                pjs.fill(77, 77, 77);
                pjs.text("OK", 285, 230);
                pjs.text("Cancel", 165, 230);
                pjs.draw = function() {
        
                    pjs.mouseClicked = function(){
                if (pjs.mouseX > 150 && pjs.mouseX < 150 + 80 && pjs.mouseY > 210 && pjs.mouseY < 210 + 30){
            
                    pjs.background(0, 9, 255);
                    for (var i = 0; i < 300; i++){
                    var y = i * 4;
                    pjs.fill(255, 255, 255);
                    pjs.text(pjs.random(pjs.Number.MAX_SAFE_INTEGER, pjs.Number.MAX_SAFE_INTEGER * 9182034712) + "#d%ja3" + pjs.random(pjs.random(0, pjs.Number.MAX_SAFE_INTEGER), pjs.random(9, 8023)) + "#$201m#3291v!*" + pjs.random(0, pjs.Number.MAX_SAFE_INTEGER + 99999) + "(w;j98h&*(h38t7HUIh807&*(h837h9g(*&OHUIr" + pjs.random(2, pjs.Number.MAX_SAFE_INTEGER) + "7goth324;u4th82753oq34@\n%3uiphger;shugsoih", pjs.random(27 * pjs.random(0, 50) - pjs.random(0, 23), y / pjs.random(50, 850)), y);
                    }
            
                } else if (pjs.mouseX > 255 && pjs.mouseX < 255 + 80 && pjs.mouseY > 210 && pjs.mouseY < 210 + 30){
                    
                    pjs.background(159, 210, 252);
                    pjs.fill(69, 171, 255);
                    pjs.stroke(28, 155, 252);
                    pjs.rect(-1, 600 - 151, 602, 50);
                    pjs.textSize(35);
                    pjs.text("♨️", 560, 485);
                    pjs.fill(204, 108, 108);
                    pjs.text("     Desktop\nComing Soon...", 200, 250);
                    lib.localStorage.setItem("booted")
                    
                }
        
            };
    
            };
            }
    
        };
              }
      }
  }
};
