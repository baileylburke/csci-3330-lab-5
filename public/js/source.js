$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    // Fill the dashboard from the supplied data
    $("#username").text(username);
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);
    $("#notification-num").text(notifAmt);

    function fillList(selector, items, property) {
        const list = $(selector).empty();
        items.forEach(function (item) {
            $("<li>").text(item[property]).appendTo(list);
        });
    }

    fillList("#activity-list", activities, "message");
    fillList("#system-status-list", messages, "messsage");
    fillList("#notifications-list", notifications, "messsage");
    fillList("#tasks-list", tasks, "messsage");

    const salesBody = $("#salesTableBody").empty();
    sales.forEach(function (sale) {
        const row = $("<tr>");
        $("<td>").text(sale.product).appendTo(row);
        $("<td>").text(sale.quantity).appendTo(row);
        $("<td>").text(sale.revenue).appendTo(row);
        row.appendTo(salesBody);
    });

    const customerBody = $("#customerTableBody").empty();
    customers.forEach(function (customer) {
        const row = $("<tr>");
        $("<td>").text(customer.name).appendTo(row);
        $("<td>").text(customer.email).appendTo(row);
        const status = $("<span>")
            .addClass("status status-" + customer.status.toLowerCase())
            .text(customer.status);
        $("<td>").append(status).appendTo(row);
        $("<td>").text(customer.joined).appendTo(row);
        row.appendTo(customerBody);
    });

    // Initialize the dashboard widgets
    $("button").button();
    $("#dashboardTabs").tabs();
    $("#customerDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
            "Create Customer": function () {
                const name = $("#customerName").val();
                const email = $("#customerEmail").val();
                if (!name || !email) {
                    alert("Please enter a name and email.");
                    return;
                }
                alert("Customer created: " + name);
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });
    $("#newCustomerButton").on("click", function () {
        $("#customerDialog").dialog("open");
    });
    $("#customerDate").datepicker();

});