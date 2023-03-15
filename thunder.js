(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Boom! Roll damage as normal and the creature is " +
                "deafened until the end of its next turn.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Ka-boom! Roll your damage as normal and the " +
                "creature is deafened for one minute.", weight: 2 },
        { name: "9-11: Great hit! Roll twice as many damage dice as " +
                "normal.", weight: 3 },
        { name: "12-13: Thunder clap! Roll twice as many damage dice as " +
                "normal and the creature is stunned until the start " +
                "of its next turn and deafened for one minute.", weight: 2 },
        { name: "14-16: Burst ear drums! Roll twice as many damage " +
                "dice as normal and the creature is deafened " +
                "permanently. Then roll on the minor injury chart.", weight: 3 },
        { name: "17-18: Concussive blast! Deal the maximum amount " +
                "of damage from your normal damage dice then " +
                "roll your damage dice and add that result. The " +
                "creature stunned until the end of its next turn and " +
                "deafened permanently. Then roll on the minor " +
                "injury chart.", weight: 2 },
        { name: "19: Wall of sound! Deal twice the maximum result " +
                "of your damage dice and roll on the major injury " +
                "chart.", weight: 1 },
        { name: "20: Sonic salvo! Deal twice the maximum result " +
                "of your damage dice, the creature is deafened " +
                "permanently, and stunned until the end of its next " +
                "round. Then roll on the major injury chart.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Thunder-crit");
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