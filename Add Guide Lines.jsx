#target photoshop

if (app.documents.length === 0) {
    alert("Please open a document with a selection first.");
} else {
    var doc = app.activeDocument;

    try {
        // Get current selection bounds
        var selBounds = doc.selection.bounds; // returns [left, top, right, bottom] as UnitValues

        // Convert UnitValues to pixels (numbers)
        var left = selBounds[0].as("px");
        var top = selBounds[1].as("px");
        var right = selBounds[2].as("px");
        var bottom = selBounds[3].as("px");

        // Add vertical guides (left and right)
        doc.guides.add(Direction.VERTICAL, new UnitValue(left, "px"));
        doc.guides.add(Direction.VERTICAL, new UnitValue(right, "px"));

        // Add horizontal guides (top and bottom)
        doc.guides.add(Direction.HORIZONTAL, new UnitValue(top, "px"));
        doc.guides.add(Direction.HORIZONTAL, new UnitValue(bottom, "px"));

    } catch (e) {
        alert("No selection found! Please make a selection first.");
    }
}

