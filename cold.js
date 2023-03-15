(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Chills! Roll damage as normal and the creature  " +
                "may only move half its movement speed on its  " +
                "next turn.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead  " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Frosty! Roll your damage as normal and the  " +
                "creature’s movement speed is 0 until the end of  " +
                "its next turn.", weight: 2 },
        { name: "9-11: Great hit! Roll twice as many damage dice as  " +
                "normal.", weight: 3 },
        { name: "12-13: Freezing! Roll twice as many damage dice as  " +
                "normal and the creature is paralyzed until the end  " +
                "of its next turn.", weight: 2 },
        { name: "14-16: Frozen! Roll twice as many damage dice as  " +
                "normal and the creature is paralyzed until the  " +
                "end of its next turn. If the creature takes damage  " +
                "before the end of its next turn, roll on the minor  " +
                "injury chart.", weight: 3 },
        { name: "17-18: Ice block! Deal the maximum amount of damage  " +
                "from your normal damage dice then roll your  " +
                "damage dice and add that result. The creature is  " +
                "paralyzed until the end of its next turn and rolls  " +
                "on the minor injury chart.", weight: 2 },
        { name: "19: Glacial! Deal twice the maximum result of your  " +
                "damage dice and roll on the major injury chart.", weight: 1 },
        { name: "20: Subzero! Deal twice the maximum result of your  " +
                "damage dice, roll on the major injury chart, and  " +
                "the creature is paralyzed for the next minute. The  " +
                "creature may attempt a saving throw at the end  " +
                "of each of its turns (DC 16) to end this effect. If  " +
                "it fails this saving throw three times it is frozen  " +
                "solid and becomes a petrified but frozen solid in a  " +
                "block of ice rather than turned to stone.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Cold-crit");
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