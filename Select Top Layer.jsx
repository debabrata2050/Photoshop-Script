#target photoshop

/*
 * Author: Debabrata Halder
 * GitHub: https://github.com/debabrata2050
 *
 * Date Created: 2025-06-09
 * Description: This script selects the bottom-most layer in the active Photoshop document using Action Manager code.
 * Shortcut Suggestion: Alt + . (dot)
 */

function selectTopMostLayer() {
    if (!app.documents.length) return alert("No document open.");

    var doc = app.activeDocument;
    var topIndex = doc.layers.length; // top-most layer is the last index

    var ref = new ActionReference();
    ref.putIndex(charIDToTypeID("Lyr "), topIndex);

    var desc = new ActionDescriptor();
    desc.putReference(charIDToTypeID("null"), ref);
    desc.putBoolean(charIDToTypeID("MkVs"), false);

    try {
        executeAction(charIDToTypeID("slct"), desc, DialogModes.NO);
    } catch (e) {
        alert("Failed to select top-most layer.");
    }
}

selectTopMostLayer();
