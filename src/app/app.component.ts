import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selected1: boolean;
  selected2: boolean;
  selected3: boolean;
  selected4: boolean;
  selected5: boolean;
  selectedCover: boolean;

  selectedSmall1: boolean;

  constructor() {
    this.selected1 = false;
    this.selected2 = false;
    this.selected3 = false;
    this.selected4 = false;
    this.selected5 = false;
    this.selectedCover = false;

    this.selectedSmall1 = false;
    
  }
  showSelected1(item) {
    this.selected1 = !this.selected1;
  }
  showSelected2(item) {
    this.selected2 = !this.selected2;
  }
  showSelected3(item) {
    this.selected3 = !this.selected3;
  }
  showSelected4(item) {
    this.selected4 = !this.selected4;
  }
  showSelected5(item) {
    this.selected5 = !this.selected5;
  }
  showSelectedCover(item) {
    this.selectedCover = !this.selectedCover;
  }
  showSelectedSmall1(item) {
    this.selectedSmall1 = !this.selectedSmall1;
  }

  data = ['F / E-TYPE COUPLER',
  'F / E-COUPLER KNUCKLE',
  'F / E-COUPLER KNUCKLE LOCK',
  'F / E-COUPLER LOCK LIFTER',
  'F / E-COUPLER KNUCKLE THROWER',
  'COUPLER KNUCKLE PIN / COTTER PIN',
  'END HOSE EXTENSION/ REMOVE / APPLY',
  'END HOSE /  SUPPORT STRAP / GASKET',
  'ANGLE COCK / U-BOLT / BRACKET',
  'RUNNING BOARD / BOLTS  / SOC'  ,
  'TACK WELD R/BOARD STRUTS',
  '3/4" TRAINLINE / CLAMPS/BRACKET / GASKETS',
  'PLACARD HOLDER/ BRACKET / WELD / BOLT',
  'EQUIPMENT ANGLE (AB)',
  'END SILL ANGLE / WELD ',
  'ENDHANDRAIL SUPPORT PIPE / BOLTS / SOC',
  'END HANDRAIL/ HANDRAIL BOLTS     ',
  'HANDBRAKE/ BOLTS / CHAIN / LUBE',
  'STRIKER WEAR PLATE/METALLIC/NON-METALLIC',
  'CROSS KEY / WASHER LOCK & PIN',
  'FRONT AND REAR LUGS / R&A / V&W',
  'REAR CARR IRON (6 HOLE) / BOLT',
  'CENTER PLATE',
  'CENTER CASTING',
  'BELLCRANK AND BRACKET / SOC /REPLACE',
  'GRAB IRON/BOLTS / SOC',
  'SILL STEP / BOLTS / SOC',
  'SIDE SILL  / ANGLE',
  'RESERVOIR / BOLTS',
  'RESERVOIR BRACKET / BOLT / SOC',
  'AEI TAG',
  'UNCOUPLING ROD SUPPORT BRKT / BOLTS / SPACER / SOC',
  'BADGE PLATE  BL/BR',
  'HANDBRAKE ROD CARRIER LEFT SIDE OF SILL',
  'EMPTY LOAD SENSOR',
  'WHEEL (BACKING RING, RIM, PLATE, TREAD, FLANGE)',
  'SIDEBEARING CAGE/ BOLTS',
  'CHK S/B CLEARANCE-APP/REMOVE SHIMS/BOLTS',
  'TRUCK BOLSTER - LESS THAN 50 YEARS OLD',
  'BRAKE ROD SAFETY STRAP / SECURE LOCKS (if under bolster)',
  'UNIT BRK BEAM AAR 18 / AAR 24 / OTHER',
  'BRAKE SHOE: 1-1/2"/2"/KEY/TREADGUARD/SINTERED',
  'BRAKE BEAM W/L - MISSING, WORN, BROKEN',
  'NUMBER OF BUTTONS ON SIDE FRAME',
  'PEDESTAL ADAPTORS/ ROOF LINER CLEARANCE',
  'TRUCK SIDEFRAME - LESS THAN 50 YEARS OLD',
  'ROOF LINER / GRIND & APP',
  'SIDEFRAME W/PLTS- WELDS/BOLTS',
  'SPRINGS - CRACKED, BROKEN, MISSING, ARRANGEMENT',
  'BRAKE LEVER BRACKETS',
  'SIDE SAFETY HANDRAIL/SUPPORT',
  'SIDE LADDER',
  'LADDER BOLTS',
  'TOUCH UP/ CENTERBAND',
  'JACK CAR',
  'BRAKE CYLINDER LEAKAGE TEST',
  'SINGLE CAR AIRBRAKE TEST'
];

qlf = ['HZ','JB','JC','AD/ZA','AP/AQ','MT','AM','GV','NF','BW','JL','FV','FR','BY','NH','RA','HE','AJ','JT','BC','CL','FH','QT']

qtyNum = ['1','2','3','4','5','6','7','8','9'];

customers = ['Cust1','Cust2','Cust3','Cust4','Cust5','Cust6','Cust7','Cust8','Cust9']

carNumbers = ['111','222','333','444','555','666','777','888','999']
  

  

}
