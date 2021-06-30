/*
 0  1  2  3 = UBL UBR UFR UFL
 4  5  6    = LUB LUF LDF
 7  8  9 10 = FUL FUR FDR FDL
11 12 13 14 = RUF RUB RDB RDF
15 16 17    = BUR BUL BDR
18 19 20    = DFL DFR DBR
*/

//v2
//all solutions (recursive)


var solvedState = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
var scrambledState = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
var currentState = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];

var pomozna = "0";

function sU() {
	pomozna = scrambledState["3"];
	scrambledState["3"] = scrambledState["2"];
	scrambledState["2"] = scrambledState["1"];
	scrambledState["1"] = scrambledState["0"];
	scrambledState["0"] = pomozna;
	pomozna = scrambledState["8"];
	scrambledState["8"] = scrambledState["12"];
	scrambledState["12"] = scrambledState["16"];
	scrambledState["16"] = scrambledState["5"];
	scrambledState["5"] = pomozna;
	pomozna = scrambledState["7"];
	scrambledState["7"] = scrambledState["11"];
	scrambledState["11"] = scrambledState["15"];
	scrambledState["15"] = scrambledState["4"];
	scrambledState["4"] = pomozna;
}
function sUi() {
	pomozna = scrambledState["0"];
	scrambledState["0"] = scrambledState["1"];
	scrambledState["1"] = scrambledState["2"];
	scrambledState["2"] = scrambledState["3"];
	scrambledState["3"] = pomozna;
	pomozna = scrambledState["5"];
	scrambledState["5"] = scrambledState["16"];
	scrambledState["16"] = scrambledState["12"];
	scrambledState["12"] = scrambledState["8"];
	scrambledState["8"] = pomozna;
	pomozna = scrambledState["4"];
	scrambledState["4"] = scrambledState["15"];
	scrambledState["15"] = scrambledState["11"];
	scrambledState["11"] = scrambledState["7"];
	scrambledState["7"] = pomozna;
}
function sR() {
	pomozna = scrambledState["8"];
	scrambledState["8"] = scrambledState["19"];
	scrambledState["19"] = scrambledState["17"];
	scrambledState["17"] = scrambledState["1"];
	scrambledState["1"] = pomozna;
	pomozna = scrambledState["9"];
	scrambledState["9"] = scrambledState["20"];
	scrambledState["20"] = scrambledState["15"];
	scrambledState["15"] = scrambledState["2"];
	scrambledState["2"] = pomozna;
	pomozna = scrambledState["13"];
	scrambledState["13"] = scrambledState["14"];
	scrambledState["14"] = scrambledState["12"];
	scrambledState["12"] = scrambledState["11"];
	scrambledState["11"] = pomozna;
}
function sRi() {
	pomozna = scrambledState["1"];
	scrambledState["1"] = scrambledState["17"];
	scrambledState["17"] = scrambledState["19"];
	scrambledState["19"] = scrambledState["8"];
	scrambledState["8"] = pomozna;
	pomozna = scrambledState["2"];
	scrambledState["2"] = scrambledState["15"];
	scrambledState["15"] = scrambledState["20"];
	scrambledState["20"] = scrambledState["9"];
	scrambledState["9"] = pomozna;
	pomozna = scrambledState["11"];
	scrambledState["11"] = scrambledState["12"];
	scrambledState["12"] = scrambledState["14"];
	scrambledState["14"] = scrambledState["13"];
	scrambledState["13"] = pomozna;
}
function sF() {
	pomozna = scrambledState["6"];
	scrambledState["6"] = scrambledState["19"];
	scrambledState["19"] = scrambledState["11"];
	scrambledState["11"] = scrambledState["3"];
	scrambledState["3"] = pomozna;		
	pomozna = scrambledState["5"];
	scrambledState["5"] = scrambledState["18"];
	scrambledState["18"] = scrambledState["13"];
	scrambledState["13"] = scrambledState["2"];
	scrambledState["2"] = pomozna;			
	pomozna = scrambledState["10"];
	scrambledState["10"] = scrambledState["9"];
	scrambledState["9"] = scrambledState["8"];
	scrambledState["8"] = scrambledState["7"];
	scrambledState["7"] = pomozna;
}
function sFi() {
	pomozna = scrambledState[3];
	scrambledState[3] = scrambledState[11];
	scrambledState[11] = scrambledState[19];
	scrambledState[19] = scrambledState[6];
	scrambledState[6] = pomozna;			
	pomozna = scrambledState[2];
	scrambledState[2] = scrambledState[13];
	scrambledState[13] = scrambledState[18];
	scrambledState[18] = scrambledState[5];
	scrambledState[5] = pomozna;
	pomozna = scrambledState[7];
	scrambledState[7] = scrambledState[8];
	scrambledState[8] = scrambledState[9];
	scrambledState[9] = scrambledState[10];
	scrambledState[10] = pomozna;
}
function U() {
	pomozna = currentState[3];
	currentState[3] = currentState[2];
	currentState[2] = currentState[1];
	currentState[1] = currentState[0];
	currentState[0] = pomozna;
	pomozna = currentState[8];
	currentState[8] = currentState[12];
	currentState[12] = currentState[16];
	currentState[16] = currentState[5];
	currentState[5] = pomozna;
	pomozna = currentState[7];
	currentState[7] = currentState[11];
	currentState[11] = currentState[15];
	currentState[15] = currentState[4];
	currentState[4] = pomozna;
}
function Ui() {
	pomozna = currentState[0];
	currentState[0] = currentState[1];
	currentState[1] = currentState[2];
	currentState[2] = currentState[3];
	currentState[3] = pomozna;
	pomozna = currentState[5];
	currentState[5] = currentState[16];
	currentState[16] = currentState[12];
	currentState[12] = currentState[8];
	currentState[8] = pomozna;
	pomozna = currentState[4];
	currentState[4] = currentState[15];
	currentState[15] = currentState[11];
	currentState[11] = currentState[7];
	currentState[7] = pomozna;
}
function R() {
	pomozna = currentState[8];
	currentState[8] = currentState[19];
	currentState[19] = currentState[17];
	currentState[17] = currentState[1];
	currentState[1] = pomozna;
	pomozna = currentState[9];
	currentState[9] = currentState[20];
	currentState[20] = currentState[15];
	currentState[15] = currentState[2];
	currentState[2] = pomozna;
	pomozna = currentState[13];
	currentState[13] = currentState[14];
	currentState[14] = currentState[12];
	currentState[12] = currentState[11];
	currentState[11] = pomozna;
}
function Ri() {
	pomozna = currentState[1];
	currentState[1] = currentState[17];
	currentState[17] = currentState[19];
	currentState[19] = currentState[8];
	currentState[8] = pomozna;
	pomozna = currentState[2];
	currentState[2] = currentState[15];
	currentState[15] = currentState[20];
	currentState[20] = currentState[9];
	currentState[9] = pomozna;
	pomozna = currentState[11];
	currentState[11] = currentState[12];
	currentState[12] = currentState[14];
	currentState[14] = currentState[13];
	currentState[13] = pomozna;
}
function F() {
	pomozna = currentState[6];
	currentState[6] = currentState[19];
	currentState[19] = currentState[11];
	currentState[11] = currentState[3];
	currentState[3] = pomozna;
	pomozna = currentState[5];
	currentState[5] = currentState[18];
	currentState[18] = currentState[13];
	currentState[13] = currentState[2];
	currentState[2] = pomozna;
	pomozna = currentState[10];
	currentState[10] = currentState[9];
	currentState[9] = currentState[8];
	currentState[8] = currentState[7];
	currentState[7] = pomozna;
}
function Fi() {
	pomozna = currentState[3];
	currentState[3] = currentState[11];
	currentState[11] = currentState[19];
	currentState[19] = currentState[6];
	currentState[6] = pomozna;
	pomozna = currentState[2];
	currentState[2] = currentState[13];
	currentState[13] = currentState[18];
	currentState[18] = currentState[5];
	currentState[5] = pomozna;
	pomozna = currentState[7];
	currentState[7] = currentState[8];
	currentState[8] = currentState[9];
	currentState[9] = currentState[10];
	currentState[10] = pomozna;
}
function solve(scramble) {
	
	//scramble
	var scrambleByMove = scramble.split(" ");
	for (var i = 0; i < scrambleByMove.length; i++) {
		if (scrambleByMove[i] === "F") {
			sF();
		}
		else if (scrambleByMove[i] === "F2") {
			sF();
			sF();
		}
		else if (scrambleByMove[i] === "F'") {
			sFi();
		}
		else if (scrambleByMove[i] === "R") {
			sR();
		}
		else if (scrambleByMove[i] === "R2") {
			sR();
			sR();
		}
		else if (scrambleByMove[i] === "R'") {
			sRi();
		}
		else if (scrambleByMove[i] === "U") {
			sU();
		}
		else if (scrambleByMove[i] === "U2") {
			sU();
			sU();
		}
		else if (scrambleByMove[i] === "U'") {
			sUi();
		}			
	}
	
	//store scramble
	var solution = [];
	
	var scrambledStateString = scrambledState.toString()
	
	for (i = 0; i < scrambledState.length; i++) {
		currentState[i] = scrambledState[i];
	}
	
	//find solutions
	move(12, 0, "", "")

	
}





//rekurzija -- original allMoves.js
var current = [];

function move(maxLength, depth, pp, p) {
    if (JSON.stringify(currentState) == JSON.stringify(solvedState)) { 	
		console.log(current.join(" ") + " (" + depth + ")");
	}

    if (pp == "") {
        pp = "aa"
    }
    if (p == "") {
        p = "aa"
    }
    
    if (maxLength == depth){
        return;
    }

    if (p.charAt(0) != "R") {
        if (p.charAt(1) != "") {
            current.push("R")
			R()
            move(maxLength, depth + 1, p, "R")			
            current.pop()
			Ri()
        }
        if (p.charAt(1) != "'") {
            current.push("R'")
			Ri()
            move(maxLength, depth + 1, p, "R'")
            current.pop()
			R()
        }
        if (p.charAt(1) != "2") {
            current.push("R2")
			Ri()
			Ri()
            move(maxLength, depth + 1, p, "R2")
            current.pop()
			Ri()
			Ri()
        }
    }

    if (p.charAt(0) != "U") {
        if (p.charAt(1) != "") {
            current.push("U")
			U()
            move(maxLength, depth + 1, p, "U")
            current.pop()
			Ui()
		}
        if (p.charAt(1) != "'") {
            current.push("U'")
			Ui()
            move(maxLength, depth + 1, p, "U'")
            current.pop()
			U()
		}
        if (p.charAt(1) != "2") {
            current.push("U2")
			U()
			U()
            move(maxLength, depth + 1, p, "U2")
            current.pop()
			U()
			U()
        }
    }

    if (p.charAt(0) != "F") {
        if (p.charAt(1) != "") {
            current.push("F")
			F()
            move(maxLength, depth + 1, p, "F")
            current.pop()
			Fi()
        }
        if (p.charAt(1) != "'") {
            current.push("F'")
			Fi()
            move(maxLength, depth + 1, p, "F'")
            current.pop()
			F()
        }
        if (p.charAt(1) != "2") {
            current.push("F2")
			F()
			F()
            move(maxLength, depth + 1, p, "F2")
            current.pop()
			F()
			F()
        }
    }

}


//v argument solve() vpišeš scramble
solve("R U R U R U R U");

