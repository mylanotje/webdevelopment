let student1=
    {
        voornaam: "Mylan",
        familienaam: "Vandecaveye",
        geboorteDatum: new Date("2004-10-29").toISOString().substring(0, 10),
        adres:
            {
                straat: "Torhoutbaan 23",
                postcode: "8820",
                gemeente: "Torhout",
            },
        isIngeschreven: true,
        namenVanExen: ["Alison", "Sterre"],
        aantalAutos: 1
    }

    let tekst = JSON.stringify(student1);
    console.log(tekst)

    let student2 = JSON.parse('{"voornaam":"Mylan","familienaam":"Vandecaveye","geboorteDatum":"2004-10-29","adres":{"straat":"Torhoutbaan 23","postcode":"8820","gemeente":"Torhout"},"isIngeschreven":true,"namenVanExen":["Alison","Sterre"],"aantalAutos":1}');
    console.log(student2);
    console.log(student2.familienaam);

    if (student1.voornaam === student2.voornaam &&
        student1.familienaam === student2.familienaam &&
        student1.geboorteDatum === student2.geboorteDatum &&
        student1.adres.straat === student2.adres.straat &&
        student1.adres.postcode === student2.adres.postcode &&
        student1.adres.gemeente === student2.adres.gemeente &&
        student1.isIngeschreven === student2.isIngeschreven &&
        student1.namenVanExen.toString() === student2.namenVanExen.toString() &&
        student1.aantalAutos === student2.aantalAutos) {
        console.log("De twee objecten zijn identiek.");
    } else {
        console.log("De twee objecten zijn niet identiek.");
    }