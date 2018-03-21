

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
	"CNR",
	"ESRC",
	"Innoviris",
	"DLR"
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

var BF_project_colours_light = [
	"#BCAAA4",
	"#EEEEEE",
	"#B0BEC5",
	"#A7C3B6",
	"#CEADB8",
	"#CFC79E",
	"#B4BD9E",
	"#9CA6BA",
	"#C5BCCE",
	"#FCF7EA",
	"#DEE5D5",
	"#BBD9CB",
	"#A4CFCC",
	"#92B09B",
	"#B59BA6",
];

var BF_project_colours_medium = [
	"#8D6E63",
	"#BDBDBD",
	"#78909C",
	"#7D968B",
	"#9C7984",
	"#8C8563",
	"#818D63",
	"#656C79",
	"#8B7A9A",
	"#FAF3DD",
	"#C8D5B9",
	"#8FC0A9",
	"#68B0AB",
	"#4A7C59",
	"#84596B",
];

var BF_project_colours_dark = [
	"#463631",
	"#5E5E5E",
	"#3B474D",
	"#3E4A45",
	"#4D3C41",
	"#454231",
	"#404631",
	"#32353B",
	"#453C4C",
	"#7C796E",
	"#636A5C",
	"#475F54",
	"#345855",
	"#243D2C",
	"#422C35",
];

var BF_member_colours_light = [
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
	"#FF8A80",
	"#FF80AB",
	"#B388FF",
	"#8C9EFF",
	"#82B1FF",
	"#92BCEE",
	"#fee4ce",
	"#ffc4ad",
	"#ffcfb3",
	"#e69fa7",
	"#bd8792",
	"#964f46",
	"#a04389",
	"ff5382",
];

var BF_member_colours_medium = [
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
	"#B71C1C",
	"#880E4F",
	"#311B92",
	"#1A237E",
	"#0D47A1",
	"#4A90E2",
	"#FEC196",
	"#FFA686",
	"#D6A184",
	"#AA767C",
	"#63474D",
	"#462521",
	"#6B2D5C",
	"#CA2E55",
];

var BF_member_colours_dark = [
	"#772927",
	"#751F3C",
	"#5E076F",
	"#3E2B60",
	"#2D355F",
	"#20527A",
	"#145A7A",
	"#12626C",
	"#12524C",
	"#325D34",
	"#4D6532",
	"#69702B",
	"#7F762B",
	"#7F6413",
	"#7F5312",
	"#7F3721",
	"#5B0D0D",
	"#430627",
	"#180D48",
	"#0C113E",
	"#062350",
	"#244770",
	"#8c6a52",
	"#a86d58",
	"#96705c",
	"#573c3f",
	"#342528",
	"#281512",
	"#3a1831",
	"#821d36",
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
		console.log(acronym+" determined to be a member; colour set to "+desired_colour);
	} else {
		desired_colour = BF_T2S_project_colour(acronym,shade);
		console.log(acronym+" determined to be a project; colour set to "+desired_colour);
	}
	return desired_colour;
};

function BF_member_colour(acronym,shade) {
	console.log(acronym+" colour seach for "+shade);
	var BF_member_index = BF_find_index(acronym,BF_members);
	if (BF_member_index == -1) {
		return "#C0C0C0";
	}
	switch (shade) {
		case "light":
			return BF_member_colours_light[BF_member_index];
			break;
		case "medium":
			return BF_member_colours_medium[BF_member_index];
			break;
		case "dark":
			return BF_member_colours_dark[BF_member_index];
			break;
	}

};


function BF_T2S_project_colour(acronym,shade) {
	console.log(acronym+" colour seach for "+shade);
	var BF_project_index = BF_find_index(acronym,BF_T2S_projects);
	if (BF_project_index == -1) {
		return "#C0C0C0";
	}
	switch (shade) {
		case "light":
			return BF_project_colours_light[BF_project_index];
			break;
		case "medium":
			return BF_project_colours_medium[BF_project_index];
			break;
		case "dark":
			return BF_project_colours_dark[BF_project_index];
			break;
	}

};














