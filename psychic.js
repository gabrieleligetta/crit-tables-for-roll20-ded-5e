(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Disoriented! Roll your damage dice as normal and " +
                "you control the creature’s movement on its next " +
                "turn.", weight: 2 },
        { name: "4-6: Confused! Roll your damage dice as normal and " +
                "the creature cannot differentiate friend from foe " +
                "until the end of its next turn.", weight: 3 },
        { name: "7-8: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 2 },
        { name: "9-11: Great hit! Roll twice as many damage dice as " +
                "normal.", weight: 3 },
        { name: "12-13: Dominated! Roll twice as many damage dice as " +
                "normal and you control the creature’s action on " +
                "its next turn.", weight: 2 },
        { name: "14-16: Psychological fracture! Roll twice as many damage " +
                "dice as normal and roll on the Insanity chart with " +
                "disadvantage.", weight: 3 },
        { name: "17-18: Psychological break! Deal the maximum amount " +
                "of damage from your normal damage dice then " +
                "roll your damage dice and add that result. Then " +
                "roll on the Insanity chart.", weight: 2 },
        { name: "19: Madness! Deal twice the maximum result of your " +
                "damage dice and roll on the Insanity chart.", weight: 1 },
        { name: "20: Mind melt! Deal twice the maximum result of your " +
                "damage dice and roll on the Insanity chart with " +
                "advantage.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Psychic-crit");
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