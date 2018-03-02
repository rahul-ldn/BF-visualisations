
var BF_members = [
	"NSFC",
	"MINECO",
	"NWO",
	"NSF",
	"FAPESP",
	"BMBF",
	"NERC",
	"CSIRO",
	"NSERC",
	"DFG",
	"MoES",
	"MEXT",
	"Formas",
	"TUBITAK",
	"MINCyT",
	"MESRI",
	"RFBR",
	"EC",
	"RCN",
	"Finland - Academy of Finland",
	"CNR"
	];

var BF_T2S_projects = [
	"TAMANI",
	"ASUS",
	"CONNECT",
	"RACArctic",
	"ARCTIC-ERA",
	"BAAMRGP",
	"COPERA",
	"HIARC",
	"Pan-Arctic Options"
	];

var BF_dark_colour_list = [
	"#EF5350",
	"#EC407A", 
	"#BD10E0", 
	"#7E57C2", 
	"#5C6BC0", 
	"#42A5F5", 
	"#29B6F6", 
	"#26C6DA", 
	"#26A69A", 
	"#66BB6A", 
	"#9CCC65", 
	"#D4E157", 
	"#FFEE58", 
	"#FFCA28", 
	"#FFA726", 
	"#FF7043", 
	"#8D6E63", 
	"#BDBDBD", 
	"#78909C", 
	"#B71C1C", 
	"#880E4F", 
	"#311B92", 
	"#1A237E", 
	"#0D47A1", 
	"#4A90E2",
	"#7D968B",
	"#9C7984",
	"#8C8563",
	"#818D63",
	"#656C79",
	"#8B7A9A",
	"#919191"	//default
	];
var BF_light_colour_list = [
	"#EF9A9A", 
	"#F48FB1", 
	"#D770EC", 
	"#B39DDB", 
	"#9FA8DA", 
	"#90CAF9", 
	"#81D4FA", 
	"#80DEEA", 
	"#80CBC4", 
	"#A5D6A7", 
	"#C5E1A5", 
	"#E6EE9C", 
	"#FFF59D", 
	"#FFE082", 
	"#FFCC80", 
	"#FFAB91", 
	"#BCAAA4", 
	"#EEEEEE", 
	"#B0BEC5", 
	"#FF8A80", 
	"#FF80AB", 
	"#B388FF", 
	"#8C9EFF", 
	"#82B1FF", 
	"#92BCEE",
	"#A7C3B6",
	"#CEADB8",
	"#CFC79E",
	"#B4BD9E",
	"#9CA6BA",
	"#C5BCCE",
	"#C0C0C0"	//default
	];

function BF_find_index(acronym, BF_entity_array) {
	var is_found = -1;
	for (test_value = 0; test_value < BF_entity_array.length; test_value++) {
		if (BF_entity_array[test_value] == acronym) {
			is_found = test_value;
		}
	}
	return is_found;
}

function BF_entity_colour(acronym,shade) {
	var desired_colour = -1;
	var entity_index = BF_find_index(acronym, BF_members);
	if (entity_index != -1) {
		desired_colour = BF_member_colour(acronym,shade);
		console.log("Entity determined to be a member; colour set to "+desired_colour);
	} else {
		desired_colour = BF_T2S_project_colour(acronym,shade);
		console.log("Entity determined to be a project; colour set to "+desired_colour);
	}
	return desired_colour;
}

function BF_member_colour(acronym,shade) {
	var BF_member_index = BF_find_index(acronym,BF_members);
	var BF_colour_array = [];
	if (shade == "light") {
		BF_colour_array = BF_light_colour_list;
	} else { // dark
		BF_colour_array = BF_dark_colour_list;
	};
	switch(BF_member_index) {
    case 0:
        return BF_colour_array[0];
        break;
    case 1:
        return BF_colour_array[4];
        break;
    case 2:
        return BF_colour_array[7];
        break;
    case 3:
        return BF_colour_array[19];
        break;
    case 4:
        return BF_colour_array[1];
        break;
    case 5:
        return BF_colour_array[5];
        break;
    case 6:
        return BF_colour_array[8];
        break; 
    case 7:
        return BF_colour_array[20];
        break;
    case 8:
        return BF_colour_array[2];
        break;
    case 9:
        return BF_colour_array[6];
        break;
    case 10:
        return BF_colour_array[9];
        break;
    case 11:
        return BF_colour_array[21];
        break;
    case 12:
        return BF_colour_array[3];
        break;
    case 13:
        return BF_colour_array[10];
        break;
    case 14:
        return BF_colour_array[15];
        break;
    case 15:
        return BF_colour_array[22];
        break;
    case 16:
        return BF_colour_array[11];
        break;
    case 17:
        return BF_colour_array[14];
        break;
    case 18:
        return BF_colour_array[23];
        break;
    case 19:
        return BF_colour_array[12];
        break;
    case 20:
        return BF_colour_array[24];
        break;
    case 21: //currently superfluous
        return BF_colour_array[13];
        break;
    default:
        return BF_colour_array[31];
	}
};


function BF_T2S_project_colour(acronym,shade) {
	var BF_project_index = BF_find_index(acronym,BF_T2S_projects);
	var BF_colour_array = [];
	if (shade == "light") {
		BF_colour_array = BF_light_colour_list;
	} else { // dark
		BF_colour_array = BF_dark_colour_list;
	};
	switch(BF_project_index) {
    case 0:
        return BF_colour_array[16];
        break;
    case 1:
        return BF_colour_array[17];
        break;
    case 2:
        return BF_colour_array[18];
        break;
    case 3:
        return BF_colour_array[25];
        break;
    case 4:
        return BF_colour_array[26];
        break;
    case 5:
        return BF_colour_array[27];
        break;
    case 6:
        return BF_colour_array[28];
        break; 
    case 7:
        return BF_colour_array[29];
        break;
    case 8:
        return BF_colour_array[30];
        break;
    default:
        return BF_colour_array[31];
	}

};

















