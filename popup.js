function copyToClipboard(text) {
  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
};

function blankRemover() {
  var textBefore = document.querySelector("#blankText").value;
  var result = textBefore.replace(/\s+/g, '');

  copyToClipboard(result);

  document.querySelector("#blankText").value = result;
}