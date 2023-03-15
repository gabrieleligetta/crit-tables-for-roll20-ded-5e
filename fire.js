(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Heat wave! Roll damage as normal and attack " +
                "rolls for attacks that deal fire damage have " +
                "advantage when made against the creature until " +
                "the end of its next turn.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Hot flash! Roll your damage as normal and the " +
                "creature is on fire. While the creature is on fire " +
                "it takes 2d4 fire damage at the start of each of " +
                "its turns. The creature can end this condition by " +
                "dropping prone and using 5 feet of movement to " +
                "roll on the ground.", weight: 2 },
        { name: "9-11: Great hit! Roll twice as many damage dice as " +
                "normal.", weight: 3 },
        { name: "12-13: Ablaze! Roll twice as many damage dice as normal " +
                "and the creature is on fire. While the creature is " +
                "on fire it takes 2d6 fire damage at the start of each " +
                "of its turns. The creature can end this condition " +
                "by dropping prone and using 5 feet of movement " +
                "to roll on the ground.", weight: 2 },
        { name: "14-16: Burnt to a crisp! Roll twice as many damage " +
                "dice as normal and the creature is charred. If " +
                "the creature has resistance to fire, it loses " +
                "that resistance. If the creature does not have " +
                "resistance to fire, it gains vulnerability to fire. Both " +
                "of these effects can be ended the same as a minor " +
                "injury.", weight: 3 },
        { name: "17-18: Hellfire! Deal the maximum amount of damage " +
                "from your normal damage dice then roll your " +
                "damage dice and add that result then roll on the " +
                "minor injury chart. Additionally, the creature is " +
                "on fire. While the creature is on fire it takes 2d6 " +
                "fire damage at the start of each of its turns. The " +
                "creature can end this condition by dropping " +
                "prone and using 5 feet of movement to roll on the " +
                "ground.", weight: 2 },
        { name: "19: Combustion! Deal twice the maximum result of " +
                "your damage dice and roll on the major injury " +
                "chart.", weight: 1 },
        { name: "20: Inferno! Deal twice the maximum result of your " +
                "damage dice and roll on the major injury chart. " +
                "Additionally, the creature is on fire. While the " +
                "creature is on fire it takes 2d8 fire damage at the " +
                "start of each of its turns. The creature can end this " +
                "condition by dropping prone and using 5 feet of " +
                "movement to roll on the ground.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Fire-crit");
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