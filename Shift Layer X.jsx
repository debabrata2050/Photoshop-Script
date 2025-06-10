#target photoshop

/*
 * Author: Debabrata Halder
 * GitHub: https://github.com/debabrata2050
 *
 * Date Created: 2025-06-09
 * Description:
 *     This script moves the currently active layer horizontally (left or right) 
 *     by a given percentage of its width in the active Photoshop document.
 *     Positive values move the layer to the right, negative values move it to the left.
 *
 * Instructions:
 * 1. Open a document and select the layer you want to move.
 * 2. Run this script and provide a percentage value between -100 and 100.
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

shiftLayerX(-50);