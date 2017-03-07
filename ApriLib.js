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
 
  - To use this in your own projects, make a spin-off of this. Please don't copy and paste this code without credit like a link to this code, and a link to my profile.
  
 What's New:
 
 - RadiusSquare Function
  
=============

 Coming Soon...
================
 
 - Nothing :(
 
================

*/

//The ApriLib code function
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
  
  //Create function "Square"
  Square: function(x, y, width, height) {
    /* @Author: AbundaSoft(Noah) (@AbundaSoft)
     * @Param xPos (x): The X position of the Square (y): The Y position of the Square (width): The width of the Square (height): The height of the Square
     * @Creates (Object): A Square
     * @Revisions: None
    */
    //Square function's code
      rect(x, y, width, height);
    
    return Square.get();
    
    if(lib.debug === true){
      
     console.log("Square Created at pos. " + x + " " + y + " . Width and Height is " + width + " " + height + " .");
      
    }
    
  },
  
  RadiusSquare: function(x, y, width, height, radius){
    
    //RadiusSquare function's code
    rect(x, y, width, height, radius);
    
    if(lib.debug === true){
      
     console.log("RadiusSquare Created at pos. " + x + " " + y + " . Width and Height is " + width + " " + height + " .");
      
    }
    
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
  }
};
