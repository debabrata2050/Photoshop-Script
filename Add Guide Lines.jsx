#target photoshop

/*
 * Author: Debabrata Halder
 * GitHub: https://github.com/debabrata2050
 *
 * Date Created: 2025-06-09
 * Description:
 *     This script adds vertical and horizontal guides at the edges of the current selection in the active Photoshop document.
 *     It helps align or mark regions by placing guides along the selection's top, bottom, left, and right edges.
 *
 * Instructions:
 * 1. Make a rectangular selection in any open document.
 * 2. Run this script to add guides along the selection's boundaries.
 */

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

