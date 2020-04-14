var el = x => document.getElementById(x);

console.log(`
    )      (                 
 ( /(      )\ )              
 )\())(   (()/(  (   (   (   
((_)\ )\   /(_)) )\  )\  )\  
 _((_|(_) (_))_ ((_)((_)((_) 
| || |(_)  |   \| __\ \ / /  
| __ || |  | |) | _| \ V /   
|_||_||_|  |___/|___| \_/    
                             
`);
console.log("Hey there! Interested in the code behind this site you can have a look at : " +
            "https://github.com/akshay090/pokedex-deploy ");
function showPicker() {
  el("file-input").click();
}

function showPicked(input) {
// el("upload-label").innerHTML = input.files[0].name;
  var reader = new FileReader();
  reader.onload = function(e) {
    el("image-picked").src = e.target.result;
    el("image-picked").className = "";
  };
  reader.readAsDataURL(input.files[0]);
}

function analyze() {
  var fileInput = el("file-input");
  var uploadFiles = fileInput.files;
  el("analyze-button").innerHTML = "Analyzing...";
  var xhr = new XMLHttpRequest();
  var loc = window.location;
  xhr.open("POST", `${loc.protocol}//${loc.hostname}:${loc.port}/analyze`,
    true);
  xhr.onerror = function() {
    alert(xhr.responseText);
  };
  xhr.onload = function(e) {
    if (this.readyState === 4) {
      var response = JSON.parse(e.target.responseText);
      el("result-label").innerHTML = `You choosed ${response["result"]}`;
    }
    el("analyze-button").innerHTML = "Analyze";
  };

    var defaultImg = el("image-picked").src
    var defaultFile = dataURLtoFile(defaultImg, 'pikachu.png')
    var fileData = new FormData();
    fileData.append("file", defaultFile);
    xhr.send(fileData);

}

function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

