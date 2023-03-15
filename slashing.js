(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal", weight: 1 },
        { name: "2-3: Sliced and diced! Roll damage as normal and the " +
                "creature loses 1d6 hit points at the start of its next " +
                "turn.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice. ", weight: 3 },
        { name: "7-8: Open gash! Roll your damage dice as normal and " +
                "the creature is bleeding. For the next minute the " +
                "creature loses 1d4 damage at the start of each of " +
                "its turns until it uses an action to staunch this " +
                "wound.", weight: 2 },
        { name: "9-11: Great hit! Roll your damage dice twice and add " +
                "them together", weight: 3 },
        { name: "12-13: Deep slice! Roll your damage dice twice and add " +
                "them together and the creature is bleeding. For " +
                "the next minute the creature loses 1d8 hit points " +
                "at the start of each of its turns until it uses an " +
                "action to staunch this wound.", weight: 2 },
        { name: "14-16: Lacerated! Roll your damage dice twice and add " +
                "them together and the creature is bleeding. For " +
                "the next minute the creature loses 1d12 hit points " +
                "at the start of each of its turns until it uses an " +
                "action to staunch this wound.", weight: 3 },
        { name: "17-18: Severed! Deal the maximum amount of damage " +
                "from your normal damage dice then roll your " +
                "damage dice and add the result. Then roll on the " +
                "Minor Injury chart. If the creature is wearing light " +
                "or no armor roll on the Major Injury chart instead. ", weight: 2 },
        { name: "19: Dissected! Deal twice the maximum result of your " +
                "damage dice and roll on the major injury chart.", weight: 1 },
        { name: "20:  Deal the maximum result of your damage " +
                "dice twice, roll on the major injury chart, and " +
                "the creature is bleeding. For the next minute the " +
                "creature loses 2d8 hit points at the start of each " +
                "of its turns until it uses an action to staunch this " +
                "wound.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Slashing-crit");
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