(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Scalding bile! Roll damage as normal and the " +
                "creature is scarred. While scarred the creature " +
                "has disadvantage on all Charisma ability checks " +
                "except Charisma (Intimidation). Being scarred " +
                "can be healed in the same way as a minor injury.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Melted flesh! Roll your damage as normal and " +
                "the creature is disfigured. While disfigured the " +
                "creature has disadvantage on all Charisma ability " +
                "checks except Charisma (Intimidation). Being " +
                "disfigured can be removed with the spell greater " +
                "restoration.", weight: 2 },
        { name: "9-11: Great hit! Roll your damage dice twice and add " +
                "them together.", weight: 3 },
        { name: "12-13: Boiling flesh! Roll twice as many damage dice as " +
                "normal and if the creature is wearing armor its AC " +
                "modifier is reduced by 1 until it can be repaired " +
                "(for 1/4th the price of new armor of the same " +
                "type) or cleaned (if the armor is magical). If the " +
                "creature is not wearing armor, roll on the minor " +
                "injury chart.", weight: 2 },
        { name: "14-16: Horrific mutilation! Roll twice as many damage " +
                "dice as normal and roll on the minor injury " +
                "chart. Additionally, the creature is disfigured. " +
                "While disfigured the creature has disadvantage " +
                "on all Charisma ability checks except Charisma " +
                "(Intimidation). Being disfigured can be removed " +
                "with the spell greater restoration.", weight: 3 },
        { name: "17-18: Caustic trauma! Deal the maximum amount of " +
                "damage from your normal damage dice then " +
                "roll your damage dice and add that result. If the " +
                "creature is wearing armor, roll on the minor injury " +
                "chart and its AC modifier is reduced by 2 until it " +
                "can be repaired (for half the price of new armor " +
                "of the same type) or cleaned (if the armor is " +
                "magical). If the creature is not wearing armor, roll " +
                "on the major injury chart.", weight: 2 },
        { name: "19: Vitriolic! Deal twice the maximum result of your " +
                "damage dice and roll on the major injury chart.", weight: 1 },
        { name: "20: Acid bath! Deal twice the maximum result of " +
                "your damage dice. If the creature is wearing " +
                "armor, the armor is destroyed (if non-magical) " +
                "or rendered useless until cleaned during a long " +
                "rest (if magical) and roll on the major injury chart. " +
                "If the creature is not wearing armor, roll on the " +
                "major injury chart and the creature is disfigured. " +
                "While disfigured the creature has disadvantage " +
                "on all Charisma ability checks except Charisma " +
                "(Intimidation). Being disfigured can be removed " +
                "with the spell greater restoration.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Acid-crit");
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