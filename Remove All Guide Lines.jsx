#target photoshop

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
