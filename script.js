function autoResize(textarea) {
    textarea.style.height = '1em';
    textarea.style.height = (textarea.scrollHeight > 250 ? 250 : textarea.scrollHeight) + 'px';
}
