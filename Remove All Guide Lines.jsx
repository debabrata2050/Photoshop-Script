#target photoshop

/*
 * Author: Debabrata Halder
 * GitHub: https://github.com/debabrata2050
 *
 * Date Created: 2025-06-09
 * Description:
 *     This script removes all guides from the currently active Photoshop document.
 *     It's useful for quickly clearing layout aids without manually deleting them.
 *
 * Instructions:
 * - Make sure a document is open.
 * - Run the script to delete all vertical and horizontal guides.
 *
 */

if (app.documents.length === 0) {
    alert("Please open a document first.");
} else {
    var doc = app.activeDocument;

    // Check if there are any guides to remove
    if (doc.guides.length === 0) {
        alert("No guides to remove.");
    } else {
        // Remove all guides
        for (var i = doc.guides.length - 1; i >= 0; i--) {
            doc.guides[i].remove();
        }
    }
}
