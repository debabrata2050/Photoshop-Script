#target photoshop

/*
 * Author: Debabrata Halder
 * GitHub: https://github.com/debabrata2050
 *
 * Date Created: 2025-06-09
 * Description: This script makes a selection on the active Photoshop document that covers 100% of the horizontal width
 *              and approximately 7% of the vertical height, centered vertically.
 */

// Get active document dimensions
var doc = app.activeDocument;
var docWidth = doc.width.as("px");
var docHeight = doc.height.as("px");

// Calculate selection rectangle
var selWidth = docWidth;           // 100% width
var selHeight = docHeight * 0.07; // 7% height

// Calculate top-left and bottom-right coordinates for vertical center
var top = (docHeight - selHeight) / 2;
var bottom = top + selHeight;

var left = 0;
var right = docWidth;

// Define selection area as an array of points (x, y)
var selectionRegion = [
  [left, top],        // top-left
  [right, top],       // top-right
  [right, bottom],    // bottom-right
  [left, bottom]      // bottom-left
];

// Make the selection using the rectangular marquee tool
doc.selection.select(selectionRegion);
