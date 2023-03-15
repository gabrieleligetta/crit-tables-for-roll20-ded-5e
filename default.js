(function(){
    const rows = [
        { name: "1: You call that a crit? Roll damage as normal.", weight: 1 },
        { name: "2-3: ", weight: 2 },
        { name: "4-6: ", weight: 3 },
        { name: "7-8: ", weight: 2 },
        { name: "9-11: ", weight: 3 },
        { name: "12-13: ", weight: 2 },
        { name: "14-16: ", weight: 3 },
        { name: "17-18: ", weight: 2 },
        { name: "19: ", weight: 1 },
        { name: "20: ", weight: 1 },
    ];

    console.log("Creating table...");
    $("a[href='#deckstables'").click();
    $("#addrollabletable").click();
    setTimeout(function() {
        $(".rollabletable").find("td:contains('new-table')").last().parent().click();
        const tableWidget = $(".ui-dialog").find("span.ui-dialog-title:contains('new-table')").last().parent().parent();
        tableWidget.find("input.name").val("#damage type#-crit");
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