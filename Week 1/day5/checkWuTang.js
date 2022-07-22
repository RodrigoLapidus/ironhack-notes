const wuTangMember = prompt ("tell me your favorite member and I will tell you where he/she is from");

let neighborhood = "";
    switch (wuTangMember) {
        case "Rza":
            neighborhood = "Staten Island, New York";
            break;
        case "Ghostface Killah":
            neighborhood = "Brooklyn";
            break;
        case "Method Man":
            neighborhood = "Queens";
            break;
        case "Ol' Dirty Bastard":
            neighborhood = "Harlem";
            break;
        case "Raekwon":
            neighborhood = "Tribeca";
            break;
        case "GZA":
            neighborhood = "Staten Island";
            break;
        case "Cappadonna":
            neighborhood = "Long Island";
            break;
        case "Inspectah Deck":
            neighborhood = "SoHo";
            break;
        case "Masta Killa":
            neighborhood = "Astoria";
            break;
        case "U-God":
            neighborhood = "Chinatown";
            break;
    }
    console.log(`Your favorite Wu-Tang Clan artist is from ${neighborhood}`);