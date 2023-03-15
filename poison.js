(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Nauseous! Roll damage as normal and the " +
                "creature has disadvantage on its next ability check, " +
                "attack roll, or saving throw.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Sickened! Roll your damage as normal and the " +
                "creature has disadvantage on all ability checks, " +
                "attack rolls, and saving throws until the end of its " +
                "next turn.", weight: 2 },
        { name: "9-11: Great hit! Roll twice as many damage dice as " +
                "normal.", weight: 3 },
        { name: "12-13: Poisoned! Roll twice as many damage dice as " +
                "normal and the creature is poisoned for the next " +
                "minute. The creature may attempt a saving throw " +
                "at the end of each of its turns (DC 12) to end this " +
                "effect.", weight: 2 },
        { name: "14-16: Contaminated! Roll twice as many damage dice as " +
                "normal and the creature is poisoned for the next " +
                "minute. The creature may attempt a saving throw " +
                "at the end of each of its turns (DC 16) to end this " +
                "effect.", weight: 3 },
        { name: "17-18: Toxic shock! Deal the maximum amount of " +
                "damage from your normal damage dice then " +
                "roll your damage dice and add that result. Then " +
                "roll on the minor injury chart and the creature is " +
                "poisoned for the next minute. The creature may " +
                "attempt a saving throw at the end of each of its " +
                "turns (DC 12) to end this effect.", weight: 2 },
        { name: "19: System failure! Deal twice the maximum result " +
                "of your damage dice and roll on the major injury " +
                "chart.", weight: 1 },
        { name: "20: Biological breakdown! Deal twice the maximum " +
                "result of your damage dice, roll on the major " +
                "injury chart, and the creature is poisoned for the " +
                "next minute. The creature may attempt a saving " +
                "throw at the end of each of its turns (DC 16) to " +
                "end this effect.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Poison-crit");
        for (let i = 0; i < rows.length; i++) {
            tableWidget.find("button.addtableitem").click();
            const itemWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('Edit Table Item')").last().parent().parent();
            itemWidget.find("input.name").val(rows[i].name);
            itemWidget.find("input.weight").val(rows[i].weight || 1);
            itemWidget.find("button:contains('Save Changes')").click();
        }
        tableWidget.find("button:contains('Save Changes')").click();
        console.log("Done!");
    }, 200);
})();