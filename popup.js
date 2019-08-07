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

document.querySelector("#blankButton").onclick = function(){
  var textBefore = document.querySelector("#blankText").value;
  var result = textBefore.replace(/\s+/g, '');
  
   if (document.querySelector('.copy').checked == true) {
     copyToClipboard(result);
   }
  
  document.querySelector("#blankText").value = result;
};
