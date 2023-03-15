(function(){
    const rows = [
        { name: "1-3: Crippled leg! The " +
                "creature’s movement " +
                "speed is reduced " +
                "by 10 feet and it has " +
                "disadvantage on " +
                "Dexterity saving throws.", weight: 3 },
        { name: "4-8: Crippled arm! Randomly " +
                "determine one of " +
                "the creature’s arms. " +
                "That arm cannot be " +
                "used to hold an item " +
                "and any ability check " +
                "requiring that arm " +
                "automatically fails or " +
                "has disadvantage (DM’s " +
                "choice).", weight: 5 },
        { name: "9-11: Severely wounded! The " +
                "creature’s maximum hit " +
                "points are reduced by " +
                "an amount equivalent " +
                "to the damage dealt by " +
                "the attack.", weight: 3 },
        { name: "12-16: Edge of death! " +
                "The creature has " +
                "disadvantage on " +
                "Constitution and death " +
                "saving throws.", weight: 5 },
        { name: "17-19: My eyes! The creature is " +
                "blinded.", weight: 3 },
        { name: "20: Decapitated! The " +
                "creature is dead.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Major-injury");
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