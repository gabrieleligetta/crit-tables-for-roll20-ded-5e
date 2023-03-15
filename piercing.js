(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: Lunge and thrust! Roll damage dice twice and use " +
                "the higher result.", weight: 2 },
        { name: "4-6: Good hit! Do not roll your damage dice, instead " +
                "deal the maximum result possible with those dice.", weight: 3 },
        { name: "7-8: Stabbed! Roll your damage dice twice and add " +
                "them together.", weight: 2 },
        { name: "9-11: Great hit! Roll your damage dice twice and add " +
                "them together.", weight: 3 },
        { name: "12-13: Swiss cheese! Roll twice as many damage dice as " +
                "normal. Then roll twice on the minor injury chart " +
                "and use the lower result.", weight: 2 },
        { name: "14-16: Punctured! Roll your damage dice twice and add " +
                "them together and roll on the minor injury chart.", weight: 3 },
        { name: "17-18: Cruel prick! Roll your damage dice twice and add " +
                "them together and roll on the major injury chart.", weight: 2 },
        { name: "19: Run through! Deal twice the maximum result of " +
                "your damage dice and roll on the major injury " +
                "chart.", weight: 1 },
        { name: "20: Pierce! Deal the maximum result of your damage " +
                "dice twice, roll on the minor injury chart, and roll " +
                "on the major injury chart.", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("Piercing-crit");
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