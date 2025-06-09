#target photoshop

/*
 * Author: Debabrata Halder
 * GitHub: https://github.com/debabrata2050
 *
 * Date Created: 2025-06-09
 * Description: This script selects the bottom-most layer in the active Photoshop document using Action Manager code.
 * Shortcut Suggestion: Alt + , (comma)
 */

function selectBottomMostLayerAM() {
    if (!app.documents.length) return alert("No document open.");

    var bottomIndex = 1; // bottom-most layer index in Action Manager is always 1

    var ref = new ActionReference();
    ref.putIndex(charIDToTypeID("Lyr "), bottomIndex);

    var desc = new ActionDescriptor();
    desc.putReference(charIDToTypeID("null"), ref);
    desc.putBoolean(charIDToTypeID("MkVs"), false);

    try {
        executeAction(charIDToTypeID("slct"), desc, DialogModes.NO);
    } catch (e) {
        alert("Failed to select bottom-most layer.");
    }
}

selectBottomMostLayerAM();
