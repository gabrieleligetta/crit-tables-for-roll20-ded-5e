(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Spellstruck! Roll damage as normal and the " +
                "creature has disadvantage on saving throws " +
                "against spells until the end of its next turn.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Eldritch incandescence! Roll your damage as " +
                "normal and spell attack rolls against the creature " +
                "have advantage until the end of its next turn.", weight: 2 },
        { name: "9-11: Great hit! Roll twice as many damage dice as " +
                "normal.", weight: 3 },
        { name: "12-13: Bewitching blow! Roll twice as many damage dice " +
                "as normal and the creature is spellbound until the " +
                "end of its next turn. While spellbound it makes " +
                "saving throws against spells with disadvantage " +
                "and spell attack rolls against it have advantage.", weight: 2 },
        { name: "14-16: Mystic magnet! Roll twice as many damage dice " +
                "as normal and the creature is spellbound for the " +
                "next minute. While spellbound it makes saving " +
                "throws against spells with disadvantage and " +
                "spell attack rolls against it have advantage. At the " +
                "end of each of the creature’s turns it can make " +
                "an Intelligence saving throw (DC 14) to end this " +
                "effect.", weight: 3 },
        { name: "17-18: Ensorcelled! Deal the maximum amount of " +
                "damage from your normal damage dice then roll " +
                "your damage dice and add that result then roll on " +
                "the minor injury chart. Additionally, the creature is " +
                "spellbound for the next minute. While spellbound " +
                "it makes saving throws against spells with " +
                "disadvantage and spell attack rolls against it have " +
                "advantage. At the end of each of the creature’s " +
                "turns it can make an Intelligence saving throw " +
                "(DC 16) to end this effect.", weight: 2 },
        { name: "19: Arcane injury! Deal twice the maximum result of " +
                "your damage dice and roll on the major injury " +
                "chart.", weight: 1 },
        { name: "20: Magically mauled! Deal twice the maximum result " +
                "of your damage dice and roll on the major injury " +
                "chart. Additionally, the creature is spellbound " +
                "for the next minute. While spellbound it makes " +
                "saving throws against spells with disadvantage " +
                "and spell attack rolls against it have advantage. At " +
                "the end of each of the creature’s turns it can make " +
                "an Intelligence saving throw (DC 18) to end this " +
                "effect.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Force-crit");
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