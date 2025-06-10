#target photoshop

/*
 * Author: Debabrata Halder
 * GitHub: https://github.com/debabrata2050
 *
 * Date Created: 2025-06-09
 * Description:
 *     This script prompts the user to enter a percentage value between -100 and 100,
 *     then moves the currently active layer horizontally in the active Photoshop document
 *     by that percentage of the layer’s own width.
 *     Positive values shift the layer to the right, negative values shift it to the left.
 *
 * Instructions:
 * 1. Open a Photoshop document and select the layer you want to move.
 * 2. Run this script.
 * 3. When prompted, enter a percentage value between -100 and 100 to shift the layer horizontally.
 */


function shiftLayerX(percentage) {
    // Ensure percentage is within -100 to 100
    if (percentage < -100 || percentage > 100) {
        alert("Percentage must be between -100 and 100.");
        return;
    }

    // Ensure a document is open
    if (app.documents.length === 0) {
        alert("No document is open.");
        return;
    }

    var doc = app.activeDocument;
    var layer = doc.activeLayer;

    // Store current unit settings and switch to pixels
    var originalRulerUnits = app.preferences.rulerUnits;
    app.preferences.rulerUnits = Units.PIXELS;

    try {
        // Get layer bounds [left, top, right, bottom]
        var bounds = layer.bounds;
        var left = bounds[0].as("px");
        var right = bounds[2].as("px");

        var width = right - left;

        // Calculate movement: percentage of width
        var moveBy = (percentage / 100) * width;

        // Apply horizontal shift
        layer.translate(moveBy, 0);
    } catch (e) {
        alert("Error: " + e.message);
    } finally {
        // Restore original unit settings
        app.preferences.rulerUnits = originalRulerUnits;
    }
}

// Prompt user for input percentage
var userInput = prompt("Enter horizontal shift percentage (-100 to 100):", "0");

// Convert input to number
var percentage = parseFloat(userInput);

if (!isNaN(percentage)) {
    shiftLayerX(percentage);
} else {
    alert("Invalid input. Please enter a number.");
}
