$( document ).ready(function() {
    console.log( "ready!" );
});

function showanswer(Y) {
  $("#YSD").val(Y);
}

function leftanswer(Y) {
	$("#FrenchGrade").val(Y);
}

var fty = [];
fty["1a"]="5.0";
fty["1b"]="5.0";
fty["1c"]="5.0";
fty["2a"]="5.1";
fty["2b"]="5.2";
fty["2c"]="5.2";
fty["3a"]="5.3";
fty["3b"]="5.4";
fty["3c"]="5.5";
fty["4a"]="5.6";
fty["4b"]="5.7";
fty["4c"]="5.7";
fty["5a"]="5.8";
fty["5b"]="5.9";
fty["5c"]="5.9";
fty["6a"]="5.10a";
fty["6a+"]="5.10b";
fty["6b"]="5.10c";
fty["6b+"]="5.10d";
fty["6c"]="5.11a";
fty["6c+"]="5.11b";
fty["7a"]="5.11c or 5.11d";
fty["7a+"]="5.12a";
fty["7b"]="5.12b";
fty["7b+"]="5.12c";
fty["7c"]="5.12d";
fty["7c+"]="5.13a";
fty["8a"]="5.13b";
fty["8a+"]="5.13c";
fty["8b"]="5.13d";
fty["8b+"]="5.14a";
fty["8c"]="5.14b";
fty["8c+"]="5.14c";
fty["9a"]="5.14d or 5.15a";

var Yd=[];
Yd["5.0"]="1a or 1b or 1c";
Yd["5.1"]="2a";
Yd["5.2"]="2b or 2c";
Yd["5.3"]="3a";
Yd["5.4"]="3b";
Yd["5.5"]="3c";
Yd["5.6"]="4a";
Yd["5.7"]="4b";
Yd["5.8"]="5a";
Yd["5.9"]="5b";
Yd["5.10a"]="6a";
Yd["5.10b"]="6a+";
Yd["5.10c"]="6b";
Yd["5.10d"]="6b+";
Yd["5.11a"]="6c";
Yd["5.11b"]="6c+";
Yd["5.11c"]="7a";
Yd["5.11d"]="7a";
Yd["5.12a"]="7a+";
Yd["5.12b"]="7b";
Yd["5.12c"]="7b+";
Yd["5.12d"]="7c";
Yd["5.13a"]="7c+";
Yd["5.13b"]="8a";
Yd["5.13c"]="8a+";
Yd["5.13d"]="8b";
Yd["5.14a"]="8b+";
Yd["5.14b"]="8c";
Yd["5.14c"]="8c+";
Yd["5.14d"]="9a";
Yd["5.15a"]="9a";

function calculate() {
var fr=$("#FrenchGrade").val();
var Ydd=$("#YSD").val();
showanswer(fty[fr]);
leftanswer(Yd[Ydd]);
}
