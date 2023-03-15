(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Spoil! Roll damage as normal and the creature " +
                "cannot regain hit points until the end of its next " +
                "turn.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Fester! Roll your damage as normal and the " +
                "creature’s maximum hit points are reduced by the " +
                "same amount", weight: 2 },
        { name: "9-11: Great hit! Roll twice as many damage dice as " +
                "normal.", weight: 3 },
        { name: "12-13: Decay! Roll twice as many damage dice as normal " +
                "and the creature’s maximum hit points are " +
                "reduced by the same amount.", weight: 2 },
        { name: "14-16: Rot! Roll twice as many damage dice as normal " +
                "and the creature cannot regain hit points for the " +
                "next minute. It may make a saving throw (DC 16) " +
                "at the end of each of its turns to end this effect.", weight: 3 },
        { name: "17-18: Blight! Deal the maximum amount of damage " +
                "from your normal damage dice then roll your " +
                "damage dice and add that result. The creature’s " +
                "maximum hit points are reduced by the same " +
                "amount. Then roll on the minor injury chart.", weight: 2 },
        { name: "19: Atrophy! Deal twice the maximum result of your " +
                "damage dice and roll on the major injury chart.", weight: 1 },
        { name: "20: Putrefy! Deal twice the maximum result of " +
                "your damage dice, the creature’s maximum hit " +
                "points are reduced by the same amount, and the " +
                "creature cannot regain hit points until the end of " +
                "its next turn. Then roll on the major injury chart.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Necrotic-crit");
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