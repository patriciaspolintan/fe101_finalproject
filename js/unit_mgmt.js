// Populates a table given a table name, lower bound number, and upper bound number, in a horizontal fashion
function populateTableFirstRow(tableName, lowerBound, upperBound) {
    var table = document.getElementById(tableName);
    var row = table.insertRow();
    var cell;
    if (tableName == "first-row") {
        cell = row.insertCell();
        cell.innerText = "DOOR";
        cell.classList.add("standard-cell");
    }

    // Check if the bounds are in increasing or decreasing order and populate the table based on that.
    if (lowerBound > upperBound) {
        for (var i = lowerBound; i >= upperBound; i--) {
            cell = row.insertCell();
            cell.innerText = i;
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }
    }
    else if (lowerBound < upperBound) {
        for (var i = lowerBound; i <= upperBound; i++) {
            cell = row.insertCell();
            cell.innerText = i;
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }

        // if the lowerBound and upperBound are equal (like 0,0), just populate the table with nothing.
    } else {
        for (var i = 0; i < 18; i++) {
            cell = row.insertCell();
            cell.innerText = "";
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }
    }

    // Add DOOR again
    if (tableName == "first-row") {
        cell = row.insertCell();
        cell.innerText = "DOOR";
        cell.classList.add("standard-cell");
    }
}

// This function is similar to the one above but populates the table in a vertical fashion.
function populateVerticalTables(tableName, lowerBound, upperBound) {
    var table = document.getElementById(tableName);
    var row;
    if (lowerBound > upperBound) {
        for (var i = lowerBound; i >= upperBound; i--) {
            row = table.insertRow();
            cell = row.insertCell();
            cell.innerText = i;
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }
    } else if (lowerBound < upperBound) {
        // Numbers lower to upper bound
        for (var i = lowerBound; i <= upperBound; i++) {
            row = table.insertRow();
            cell = row.insertCell();
            cell.innerText = i;
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }

        // No content if lowerBound and upperBound are equal.
    } else {
        for (var i = 0; i < 12; i++) {
            row = table.insertRow();
            cell = row.insertCell();
            cell.innerText = "";
            cell.id = `${tableName}-single-unit-${i}`;
            cell.classList.add("standard-cell");
        }
    }
}

// call the functios to populate the table when the page loads
populateTableFirstRow("first-row", 88, 104);
populateTableFirstRow("last-row", 0, 0);

// FIRST row of columns
populateVerticalTables("one-one", 776, 765);
populateVerticalTables("one-two-a", 681, 692);
populateVerticalTables("one-two-b", 608, 597);
populateVerticalTables("one-three-a", 513, 524);
populateVerticalTables("one-three-b", 440, 429);
populateVerticalTables("one-four-a", 345, 356);
populateVerticalTables("one-four-b", 272, 261);
populateVerticalTables("one-five", 177, 188);

// SECOND row of columns
populateVerticalTables("two-one", 1448, 1437);
populateVerticalTables("two-two-a", 1353, 1364);
populateVerticalTables("two-two-b", 1280, 1269);
populateVerticalTables("two-three-a", 1185, 1196);
populateVerticalTables("two-three-b", 1112, 1101);
populateVerticalTables("two-four-a", 1017, 1028);
populateVerticalTables("two-four-b", 944, 933);
populateVerticalTables("two-five", 849, 860);


// THIRD row of columns
populateVerticalTables("three-one", 2120, 2109);
populateVerticalTables("three-one-a", 2025, 2036);
populateVerticalTables("three-two-b", 1952, 1941);
populateVerticalTables("three-three-a", 1857, 1868);
populateVerticalTables("three-three-b", 1784, 1773);
populateVerticalTables("three-four-a", 1689, 1700);
populateVerticalTables("three-four-b", 1616, 1605);
populateVerticalTables("three-five", 1521, 1532);


// FOURTH row of columns
populateVerticalTables("four-one", 2781, 2792);
populateVerticalTables("four-one-a", 2697, 2708);
populateVerticalTables("four-two-b", 2624, 2613);
populateVerticalTables("four-three-a", 2529, 2540);
populateVerticalTables("four-three-b", 2456, 2445);
populateVerticalTables("four-four-a", 2361, 2372);
populateVerticalTables("four-four-b", 2288, 2277);
populateVerticalTables("four-five", 2193, 2204);