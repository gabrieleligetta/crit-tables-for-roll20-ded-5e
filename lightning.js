(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Shocking! Roll damage as normal and the " +
                "creature cannot use reactions until the end of its " +
                "next turn.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Sparks fly! Roll your damage as normal and you " +
                "may choose one other creature within 15 ft. of the " +
                "victim. That creature must succeed on a Dexterity " +
                "saving throw (DC 14) or take half as much " +
                "damage.", weight: 2 },
        { name: "9-11: Great hit! Roll twice as many damage dice as " +
                "normal.", weight: 3 },
        { name: "12-13: Electric arc! Roll twice as many damage dice as " +
                "normal and you may choose one other creature " +
                "within 15 ft. of the victim. That creature must " +
                "succeed on a Dexterity saving throw (DC 18) or " +
                "take half as much damage. ", weight: 2 },
        { name: "14-16: Electric arc! Roll twice as many damage dice as " +
                "normal and you may choose one other creature " +
                "within 15 ft. of the victim. That creature must " +
                "succeed on a Dexterity saving throw (DC 18) or " +
                "take half as much damage. ", weight: 3 },
        { name: "17-18: Lit up! Deal the maximum amount of damage " +
                "from your normal damage dice then roll your " +
                "damage dice and add that result. The creature " +
                "and each creature you choose within 15 ft. of it " +
                "cannot take reactions until the end of their next " +
                "turn. Then roll on the minor injury chart.", weight: 2 },
        { name: "19: Electrocuted! Deal twice the maximum result of " +
                "your damage dice and roll on the major injury " +
                "chart.", weight: 1 },
        { name: "20: Lightning rod! Deal twice the maximum result of " +
                "your damage dice and you may choose one other " +
                "creature within 15 ft. of the victim. That creature " +
                "must succeed on a Dexterity saving throw (DC " +
                "20) or take half as much damage. Then roll on the " +
                "major injury chart.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Lightning-crit");
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