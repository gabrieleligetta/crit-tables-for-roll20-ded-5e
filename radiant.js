(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Dazzled! Roll damage as normal and the creature " +
                "cannot willingly move closer to you until the end " +
                "of its next turn.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Disheartening blast! Roll your damage as normal " +
                "and the creature is frightened until the end of its " +
                "next turn.", weight: 2 },
        { name: "9-11: Great hit! Roll twice as many damage dice as " +
                "normal.", weight: 3 },
        { name: "12-13: Awed! Roll twice as many damage dice as normal " +
                "and the creature is frightened until the end of its " +
                "next turn.", weight: 2 },
        { name: "14-16: Holy terror! Roll twice as many damage dice " +
                "as normal and roll on the minor injury chart. " +
                "Additionally, the creature is frightened for the " +
                "next minute. It can make a Wisdom saving throw " +
                "(DC 16) at the end of each of its turns to end this " +
                "effect.", weight: 3 },
        { name: "17-18: Righteous mark! Deal the maximum amount " +
                "of damage for your normal damage dice then " +
                "roll your damage dice and add that result, then " +
                "roll on the minor injury chart. Additionally, the " +
                "creature glows for the next minute. While glowing " +
                "it produces bright light up 10 feet and dim light " +
                "up to 30 feet and all successful attacks against the " +
                "creature deal an additional 1d4 radiant damage.", weight: 2 },
        { name: "19: Wrath of the gods! Deal twice the maximum result " +
                "of your damage dice and roll on the major injury " +
                "chart.", weight: 1 },
        { name: "20: Smote! Deal twice the maximum result of your " +
                "damage dice and roll on the major injury chart. " +
                "Additionally, the creature glows for the next " +
                "minute. While glowing it produces bright light " +
                "up 10 feet and dim light up to 30 feet and all " +
                "successful attacks against the creature deal an " +
                "additional 1d6 radiant damage.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Radiant-crit");
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