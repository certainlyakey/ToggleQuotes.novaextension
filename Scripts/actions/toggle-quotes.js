/**
 * toggle-quotes.js
 *
 * Toggles quotes between ' and " and `
 */

nova.commands.register("toggleQuotes.toggleQuotes", (editor) => {
  const selectedRange = editor.selectedRange;
  if (selectedRange) {
    const selectedText = editor.getTextInRange(selectedRange);
    const toggledText = selectedText.replace(/['"`]/g, (match) => {
      if (match === '"') {
        return "'";
      } else if (match === "'") {
        return "`";
      } else if (match === "`") {
        return '"';
      } else {
        return "";
      }
    });
    editor.edit((edit) => {
      edit.replace(selectedRange, toggledText);
    });
  }
});
