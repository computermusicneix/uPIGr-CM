let filename = 'uPIGrCM-'+date()+'.js';
//console.log(filename);

// Tabs control

let JSeditorElement = document.getElementById("defaultOpen").click();

let collection = document.getElementsByClassName("tab");

function openCity(evt, cityName) {
	  
	var i, tabcontent, tablinks;
	
	tabcontent = document.getElementsByClassName("tabcontent");
	         for (i = 0; i < tabcontent.length; i++) {
	             tabcontent[i].style.display = "none";
	        }
	
	
	tablinks = document.getElementsByClassName("tablinks");
	        for (i = 0; i < tablinks.length; i++) {
	                tablinks[i].className = tablinks[i].className.replace(" active", "");
	        }
	
	                 
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}

// General parser

function parser(code2) {
  code3 = code2.slice(0,code2.length -3);
  codeArray1 = code3.split("@");
  // open@ .. [open the navigator for select a text file and insert on code editor]

  if(codeArray1[0] == "open"){
    document.getElementById('input_file').click();
    document.getElementById('input_file').addEventListener('change', readSingleFile, false);
  };

  // in@ file .. [insert local text file on code editor]

  if(codeArray1[0] == "in"){
    let file_direction = codeArray1[1];
    let file_direction2 = file_direction.replace(" ",""); 
    fetch(file_direction2)
      .then(response => response.text())
      .then(text => {codeeditor.setValue(text)
      codeeditor.focus();
      codeeditor.setCursor(codeeditor.lineCount(), 0);}
      )
  };
}

// Function for intro with .. and save with ..,,

function introparser(code) {
  let editMode = 0;
  codeString = code.split('\n');
  for(let i = 0; i < codeString.length; i++){
    let codeArray;
    codeArray = codeString[i].split(' ');
    if(codeArray[codeArray.length-1] == ".."){
        parser(code);
        codeeditor.setValue("");
        editMode = 1;
      }
      if(codeArray[codeArray.length-1] == "..,,"){
        saveFile();
        editMode = 1;
      }
      // eval on consolecode
      if(codeArray[codeArray.length-1] == "..eval"){
        codeABC = codeeditor.getValue();
        codeABC2 = codeABC.slice(0,-6);
        let evaluated = eval(codeABC2);
        console.log(evaluated);
         
        document.getElementById("abc").value = 
abc;     
        editMode = 1;

      };
      
    }
  if(editMode == 0){
    codeeditor.execCommand('newlineAndIndent');
  }
  else{
    editMode = 0;
  }
}

// Function for read a file:

function readSingleFile(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    codeeditor.setValue(contents);
    codeeditor.focus();
    codeeditor.setCursor(codeeditor.lineCount(), 0);
  };
  reader.readAsText(file);
}


// Editor code:
var codeeditor = CodeMirror.fromTextArea(document.getElementById('codeeditor'), {
    mode: "javascript",
    theme: "darcula",
    lineNumbers: true,
    lineWrapping:"true",
    extraKeys:{
        Enter: function(){
          var code = codeeditor.getValue();
          introparser(code);
        }
      },
    keyword: {
      "..": "style1",
      "..,,": "style1",
      "start@": "style1",
      "eval@": "style1",
      "draw@": "style1",
      "open@": "style1",
      "in@": "style1",
      "save@": "style1",
      "score@": "style1",
      "openabc@": "style1",
      "..abc": "style1"
    }
});
codeeditor.save()
codeeditor.setValue("type some noises ..");
//codeeditor.setSize(collection.offsetWidth,collection.offsetHeight);
codeeditor.setSize(window.offsetWidth,300);


// Function for save file

function saveFile() { 
  var textToWrite = codeeditor.getValue();
  var textToWrite2 = textToWrite.slice(0,-2);
  var textFileAsBlob = new Blob([textToWrite2], { type: "text/plain;charset=utf-8" }); 
  var fileNameToSaveAs = filename; 
  var downloadLink = document.createElement("a"); downloadLink.download = fileNameToSaveAs; downloadLink.innerHTML = "Download File"; if (window.webkitURL != null) {
    // Chrome allows the link to be clicked 
    // without actually adding it to the DOM. 
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob); } else { // Firefox requires the link to be added to the DOM // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob); downloadLink.onclick = destroyClickedElement; downloadLink.style.display = "none"; document.body.appendChild(downloadLink); } 
    downloadLink.click(); 
    filename = 'uPIGrCM-'+date()+'.js';
    
}


// Function for save abc file

function saveABCFile() { 
  var textToWrite = document.getElementById("abc").value;
  var textFileAsBlob = new Blob([textToWrite], { type: "text/plain;charset=utf-8" }); 
  var filenameABC = 'uPIGrCM-'+date()+'.abc';
  var fileNameToSaveAs = filenameABC; 
  var downloadLink = document.createElement("a"); downloadLink.download = fileNameToSaveAs; downloadLink.innerHTML = "Download File"; if (window.webkitURL != null) {
    // Chrome allows the link to be clicked 
    // without actually adding it to the DOM. 
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob); } else { // Firefox requires the link to be added to the DOM // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob); downloadLink.onclick = destroyClickedElement; downloadLink.style.display = "none"; document.body.appendChild(downloadLink); } 
    downloadLink.click(); 
       
}

// Get Date
function date(){
	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth()+1;
	let day = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let fecha = 'y'+year+'m'+month+'d'+day+'h'+hours+'m'+minutes+'s'+seconds;
	return fecha;
}
  
// abcjs
// online soundFontUrl: 'https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/'

let abcjsEditor;
let abc = "X: 1\nT: uPIgr CM Desired Output\nM: 3/4\nL: 1/8\nQ: 100\nV:Vibraphone name='Vibraphone'\nK:C treble\n%%MIDI program 12\nE' G' B' | G' B' ^D' | ^F' A' ^C' |]\nV:Piano Left name='Piano L'\nK:C bass\n%%MIDI program 1\n[E,,G,,B,,]3 | [G,,B,,^D,,]3 | [^F,,A,,^C,,]3 |]";

abcjsEditor = new ABCJS.Editor("abc", {
        canvas_id: "paper",
        warnings_id: "warnings",
        synth: {
          el: "#audio",
          options: { displayLoop: true, displayRestart: true, displayPlay: true, displayProgress: true, displayWarp: true,soundFontUrl: './soundfonts/FluidR3_GM/'}
        },
        abcjsParams: {
          add_classes: true,
          clickListener: clickListener,
          staffwidth : "740",
          responsive: "resize",
          oneSvgPerLine: true,
          wrap:{ minSpacing: 1.8, maxSpacing: 2.7, preferredMeasuresPerLine: 4 }
        },
        selectionChangeCallback: selectionChangeCallback
});

document.getElementById("abc").innerHTML= 
abc;
document.getElementById("abc").focus();
document.getElementById("midi").addEventListener("click", downloadMidi);

function clickListener(abcElem, tuneNumber, classes, analysis, drag, mouseEvent) {
      var lastClicked = abcElem.midiPitches;
      if (!lastClicked)
        return;

    ABCJS.synth.playEvent(lastClicked, abcElem.midiGraceNotePitches, abcjsEditor.millisecondsPerMeasure()).then(function (response) {
        console.log("note played");
      }).catch(function (error) {
        console.log("error playing note", error);
      });
    }

function selectionChangeCallback(start, end) {
      if (abcjsEditor) {
        var el = abcjsEditor.tunes[0].getElementFromChar(start);
        console.log(el);
      }
    }

function downloadMidi() {
   		var abc = document.getElementById("abc").value;
   		var a = document.getElementById("midi-download");
   		var midi = ABCJS.synth.getMidiFile(abc, { midiOutputType: "encoded" })
		a.setAttribute("href", midi);
		a.download = 'uPIGrCM-'+date()+'.mid';
		a.click();
	}
	
// Function for print only div of score

function printDiv() { 

    var divContents = document.getElementById("paper").innerHTML; 
     var a = window.open('', '', 'height=500, width=500'); 
      a.document.write('<html>'); 
      a.document.write('<body > <h1><br>'); 
      a.document.write(divContents); 
      a.document.write('</body></html>'); 
      a.document.close(); 
      a.print(); 
}


	
