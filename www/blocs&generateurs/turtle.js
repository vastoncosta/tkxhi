"use strict";

goog.provide("Blockly.Blocks.turtle");
goog.provide("Blockly.Blocks.arduino");
goog.require("Blockly.Blocks");
 
  //////////////
 /*  TURTLE  */
//////////////


Blockly.Blocks['move_front'] = {
  /**
 * Block for reading an analogue input.
 * @this Blockly.Block
 */

  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/turtle.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Move Forward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#bd6a01');
 this.setTooltip("Move TurTle-T front");
 this.setHelpUrl("https://tkxhi.com");
  }
};


Blockly.Arduino['move_front'] = function(block) {
    
  Blockly.Arduino.includes_['motores_include']='#include <Arduino.h>\n';

  Blockly.Arduino.variables_['motores_var']='int IN1 = 3 ; \n int IN2 = 9 ; \n int IN3 = 11; \n int IN4 = 10;\n int pinDig = 17;\n int trig = 5;\n int echo = 4;\n int pinBuz = 2;';


  Blockly.Arduino.setups_['motores_setup']= 'pinMode(IN1,OUTPUT);\n pinMode(IN2,OUTPUT);\n pinMode(IN3,OUTPUT);\n pinMode(IN4,OUTPUT);\n';

var code = 'delay(2000);\n digitalWrite(IN1,HIGH);\n analogWrite(IN1,204);\n digitalWrite(IN2,LOW);\n digitalWrite(IN3,LOW);\n digitalWrite(IN4,HIGH);\n analogWrite(IN4,204);\n delay(1000);\n';

return code;
};

Blockly.Blocks['move_back'] = {
  /**
 * Block for reading an analogue input.
 * @this Blockly.Block
 */

  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/turtle.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Move Backward");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#bd6a01');
 this.setTooltip("Move TurTle-T front");
 this.setHelpUrl("https://tkxhi.com");
  }
};

Blockly.Arduino['move_back'] = function(block) {
    
  Blockly.Arduino.includes_['motores_include']='#include <Arduino.h>\n';

  Blockly.Arduino.variables_['motores_var']='int IN1 = 3 ; \n int IN2 = 9 ; \n int IN3 = 11; \n int IN4 = 10;\n int pinDig = 17;\n int trig = 5;\n int echo = 4;\n int pinBuz = 2;';


  Blockly.Arduino.setups_['motores_setup']= 'pinMode(IN1,OUTPUT);\n pinMode(IN2,OUTPUT);\n pinMode(IN3,OUTPUT);\n pinMode(IN4,OUTPUT);\n';

var code = 'delay(2000);\n digitalWrite(IN1,LOW);\n   analogWrite(IN1,204);\n   digitalWrite(IN2,HIGH);\n   digitalWrite(IN3,HIGH);\n   digitalWrite(IN4,LOW);\n   analogWrite(IN4,204);\n   delay(1000);\n';

return code;
};



Blockly.Blocks['break_turtle'] = {
   

  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/turtle.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Break");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#bd6a01');
 this.setTooltip("Stop TurTle-T");
 this.setHelpUrl("https://tkxhi.com");
  }

};


Blockly.Arduino['break_turtle'] = function(block) {
    
  Blockly.Arduino.includes_['motores_include']='#include <Arduino.h>\n';

  Blockly.Arduino.variables_['motores_var']='int IN1 = 3 ; \n int IN2 = 9 ; \n int IN3 = 11; \n int IN4 = 10;\n int pinDig = 17;\n int trig = 5;\n int echo = 4;\n int pinBuz = 2;';


  Blockly.Arduino.setups_['motores_setup']= 'pinMode(IN1,OUTPUT);\n pinMode(IN2,OUTPUT);\n pinMode(IN3,OUTPUT);\n pinMode(IN4,OUTPUT);\n';

var code = 'delay(2000);\n  //Freia Motores\n   digitalWrite(IN1,LOW);\n   digitalWrite(IN2,LOW);\n   digitalWrite(IN3,LOW);\n   digitalWrite(IN4,LOW);\n   delay(200);\n';

return code;
};

Blockly.Blocks['move_front_vel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/turtle.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Move Forward vel.")
        .appendField(new Blockly.FieldDropdown([["Slow","153"], ["Regular","204"], ["Fast","255"]]), "velocity");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#bd6a01');
 this.setTooltip("Moves TurTle-T Forward at a specific velocity.");
 this.setHelpUrl("https://tkxhi.com");
  }
};

Blockly.Arduino['move_front_vel'] = function(block) {
  var dropdown_velocity = block.getFieldValue('velocity');
  
  Blockly.Arduino.includes_['motores_include']='#include <Arduino.h>\n';

  Blockly.Arduino.variables_['motores_var']='int IN1 = 3 ; \n int IN2 = 9 ; \n int IN3 = 11; \n int IN4 = 10;\n int pinDig = 17;\n int trig = 5;\n int echo = 4;\n int pinBuz = 2;';


  Blockly.Arduino.setups_['motores_setup']= 'pinMode(IN1,OUTPUT);\n pinMode(IN2,OUTPUT);\n pinMode(IN3,OUTPUT);\n pinMode(IN4,OUTPUT);\n';

  var code = 'delay(2000);\n digitalWrite(IN1,HIGH);\n   analogWrite(IN1,' + dropdown_velocity + ');\n   digitalWrite(IN2,LOW);\n   digitalWrite(IN3,LOW);\n   digitalWrite(IN4,HIGH);\n   analogWrite(IN4,' + dropdown_velocity + ');\n';
  return code;
};


Blockly.Blocks['move_right_ve_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/turtle.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Turn Right  vel.")
        .appendField(new Blockly.FieldDropdown([["Slow","153"], ["Regular","204"], ["Fast","255"]]), "velocity")
        .appendField("for ")
        .appendField(new Blockly.FieldTextInput(
          '1', Blockly.FieldTextInput.numberValidator), 'time')
         .appendField("s");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#bd6a01');
 this.setTooltip("Moves TurTle-T Right at a specific velocity for some time");
 this.setHelpUrl("https://tkxhi.com");
  }
};

Blockly.Arduino['move_right_ve_time'] = function(block) {
  var dropdown_velocity = block.getFieldValue('velocity');
  var number_time = parseFloat(block.getFieldValue('time'))*1000;
  
  Blockly.Arduino.includes_['motores_include']='#include <Arduino.h>\n';

  Blockly.Arduino.variables_['motores_var']='int IN1 = 3 ; \n int IN2 = 9 ; \n int IN3 = 11; \n int IN4 = 10;\n int pinDig = 17;\n int trig = 5;\n int echo = 4;\n int pinBuz = 2;';


  Blockly.Arduino.setups_['motores_setup']= 'pinMode(IN1,OUTPUT);\n pinMode(IN2,OUTPUT);\n pinMode(IN3,OUTPUT);\n pinMode(IN4,OUTPUT);\n';


  var code = 'delay(2000);\n  digitalWrite(IN1,LOW);\n   digitalWrite(IN2,LOW);\n   digitalWrite(IN3,LOW);\n   digitalWrite(IN4,LOW);\n   delay(200);\n  digitalWrite(IN1,HIGH);\n    digitalWrite(IN2,LOW);\n   analogWrite(IN2,'+ dropdown_velocity +');\n   digitalWrite(IN3,HIGH);\n   digitalWrite(IN4,LOW);\n   analogWrite(IN4,'+ dropdown_velocity +');\n   delay('+ new_number_time +');\n  digitalWrite(IN1,LOW);\n   digitalWrite(IN2,LOW);\n   digitalWrite(IN3,LOW);\n   digitalWrite(IN4,LOW);\n   delay(200);\n';
  return code;
};

Blockly.Blocks['move_left_ve_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("media/turtle.png", 20, 20, "*"))
        .appendField("Turn Left vel.")
        .appendField(new Blockly.FieldDropdown([["Slow","153"], ["Regular","204"], ["Fast","255"]]), "velocity")
        .appendField("for ")
        .appendField(new Blockly.FieldTextInput(
          '1', Blockly.FieldTextInput.numberValidator), 'time')
         .appendField("s");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#bd6a01');
 this.setTooltip("Moves TurTle-T Left at a specific velocity for some time");
 this.setHelpUrl("https://tkxhi.com");
  }
};

Blockly.Arduino['move_left_ve_time'] = function(block) {
  var dropdown_velocity = block.getFieldValue('velocity');
  var number_time = parseFloat(block.getFieldValue('time'))*1000;
  
  var new_number_time = number_time.toString();
  
  Blockly.Arduino.includes_['motores_include']='#include <Arduino.h>\n';

  Blockly.Arduino.variables_['motores_var']='int IN1 = 3 ; \n int IN2 = 9 ; \n int IN3 = 11; \n int IN4 = 10;\n int pinDig = 17;\n int trig = 5;\n int echo = 4;\n int pinBuz = 2;';


  Blockly.Arduino.setups_['motores_setup']= 'pinMode(IN1,OUTPUT);\n pinMode(IN2,OUTPUT);\n pinMode(IN3,OUTPUT);\n pinMode(IN4,OUTPUT);\n';


  var code = 'delay(2000);\n   digitalWrite(IN1,LOW);\n   digitalWrite(IN2,LOW);\n   digitalWrite(IN3,LOW);\n   digitalWrite(IN4,LOW);\n   delay(200);\n  digitalWrite(IN1,LOW);\n  digitalWrite(IN2,HIGH);\n   analogWrite(IN2,'+ dropdown_velocity +');\n   digitalWrite(IN3,LOW);\n   digitalWrite(IN4,HIGH);\n   analogWrite(IN4, '+ dropdown_velocity +');\n   delay('+ new_number_time +');\n   digitalWrite(IN1,LOW);\n   digitalWrite(IN2,LOW);\n   digitalWrite(IN3,LOW);\n   digitalWrite(IN4,LOW);\n   delay(200);\n';
  return code;
};



// int buzzer = 6;

// /Pinagem do arduino/
// //motor_A (frente)
// int IN1 = 3 ;
// int IN2 = 9 ;
// //motor_B (trás)
// int IN3 = 11 ;
// int IN4 = 10 ;
// int vel = 150;

// //     TABELA VERDADE
// //  -------------------
// // | MOTOR | IN1 | IN2 |
// // |-------|-----|-----|
// // |  HOR  |  H  |  L  |
// // | A-HOR |  L  |  H  |
// // | LIVRE |  L  |  L  |
// // | FREIA |  H  |  H  |
// //  --------------------


// //Inicializa Pinos
// void setup()
// {
//  pinMode(IN1,OUTPUT);
//  pinMode(IN2,OUTPUT);
//  pinMode(IN3,OUTPUT);
//  pinMode(IN4,OUTPUT);
// }
// void loop(){
//  // aguarda 3 segundos antes de iniciar o movimento
//  delay(3000);
//  //Pra Frente
//  digitalWrite(IN1,HIGH);
//  analogWrite(IN1,vel);
//  digitalWrite(IN2,LOW);
//  digitalWrite(IN3,LOW);
//  digitalWrite(IN4,HIGH);
//  analogWrite(IN4,vel);
//  delay(1000);
//  //Freia Motores
//  digitalWrite(IN1,LOW);
//  digitalWrite(IN2,LOW);
//  digitalWrite(IN3,LOW);
//  digitalWrite(IN4,LOW);
//  delay(200);
//  //gira horário
//  digitalWrite(IN1,HIGH);
//  analogWrite(IN1,vel);
//  digitalWrite(IN2,LOW);
//  digitalWrite(IN3,HIGH);
//  analogWrite(IN3,vel);
//  digitalWrite(IN4,LOW);
//  delay(720); 
// //Freia Motores
//  digitalWrite(IN1,LOW);
//  digitalWrite(IN2,LOW);
//  digitalWrite(IN3,LOW);
//  digitalWrite(IN4,LOW);
//  delay(200);
// //Pra Frente
//  digitalWrite(IN1,HIGH);
//  analogWrite(IN1,vel);
//  digitalWrite(IN2,LOW);
//  digitalWrite(IN3,LOW);
//  digitalWrite(IN4,HIGH);
//  analogWrite(IN4,vel);
//  delay(1000);
//  //Freia Motores
//  digitalWrite(IN1,LOW);
//  digitalWrite(IN2,LOW);
//  digitalWrite(IN3,LOW);
//  digitalWrite(IN4,LOW);
//  delay(200);
//  //gira antihorário
//  digitalWrite(IN1,LOW);
//   digitalWrite(IN2,HIGH);
//  analogWrite(IN2,vel);
//  digitalWrite(IN3,LOW);
//  digitalWrite(IN4,HIGH);
//  analogWrite(IN4,vel);
//  delay(720); 
// //Freia Motores
//  digitalWrite(IN1,LOW);
//  digitalWrite(IN2,LOW);
//  digitalWrite(IN3,LOW);
//  digitalWrite(IN4,LOW);
//  delay(200);
// }