(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Smashed off balance! Roll damage as normal and " +
                "the next attack against the creature has advantage.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Sent reeling! Do not roll your damage dice, " +
                "instead deal the maximum result possible with " +
                "those dice and push the creature up to 15 feet in " +
                "any direction.", weight: 2 },
        { name: "9-11: Great hit! Roll your damage dice twice and add " +
                "them together.", weight: 3 },
        { name: "12-13: Take a seat! Roll damage dice twice and add them " +
                "together and the creature is knocked prone.", weight: 2 },
        { name: "14-16: Rocked and rolled! Roll damage dice twice and " +
                "add them together, push the creature up to 15 feet " +
                "away, and the creature is knocked prone.", weight: 3 },
        { name: "17-18: Grievous injury! Deal the maximum amount of " +
                "damage from your normal damage dice then roll " +
                "your damage dice and add the result. Then roll on " +
                "the Minor Injury chart. If the creature is wearing " +
                "heavy armor roll on the Major Injury chart instead.", weight: 2 },
        { name: "19: Crushed! Deal the twice maximum result of your " +
                "damage dice and roll on the major injury chart.", weight: 1 },
        { name: "20: Splat! Deal the maximum result of your damage " +
                "dice twice, the creature is stunned until the end of " +
                "your next turn, and roll on the major injury chart.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Bludgeoning-crit");
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