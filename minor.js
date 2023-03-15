(function(){
    const rows = [
        { name: "1-3: Injured leg! The " +
                "creature’s movement " +
                "speed is reduced by " +
                "10 ft.", weight: 3 },
        { name: "4-8: Injured arm! Randomly " +
                "determine one of " +
                "the creature’s arms. " +
                "That arm cannot be " +
                "used to hold a shield " +
                "and the creature has " +
                "disadvantage on any " +
                "rolls involving the use " +
                "of that arm.", weight: 5 },
        { name: "9-11: Multiple injuries! The " +
                "creature’s maximum hit " +
                "points are reduced by " +
                "an amount equivalent " +
                "to half of the damage " +
                "dealt by the attack.", weight: 3 },
        { name: "12-16: Badly beaten! " +
                "The creature has " +
                "disadvantage on " +
                "Constitution saving " +
                "throws.", weight: 5 },
        { name: "17-19: Ringing blow! The " +
                "creature is stunned " +
                "until the end of its next " +
                "turn and deafened " +
                "until it completes a the " +
                "recuperate downtime " +
                "activity.", weight: 3 },
        { name: "20: Blow to the head! The " +
                "creature is unconscious " +
                "for 2d12 hours.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Minor-injury");
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