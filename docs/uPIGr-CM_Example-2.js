// uPIGr-CM_Example-2.js
// Model: uPIgr CM Desired Output.txt
// Scale and chords randomized.

// 1. Root note
notes = ['C','D','E','F','G','A','B'];
root_note = teoria.note(notes[upigrRandomInt(0,notes.length-1)]);
root_note_string = root_note.toString();
console.log(root_note_string);

// 2. Scales
scales = teoria.Scale.KNOWN_SCALES;
console.log(scales);

// 3. Select random scale
scale_random = scales[upigrRandomInt(0,scales.length-1)];
console.log(scale_random);
scale = root_note.scale(scale_random);
console.log(scale);

//4. Select 3 random chords from random notes of scale:
chord_names = ['maj','min','aug','dim'];
chord_alt = ['','7','9'];

// Chord 1
chord_random1 = chord_names[upigrRandomInt(0,chord_names.length-1)] +  chord_alt[upigrRandomInt(0,chord_alt.length-1)]; 

console.log(chord_random1);
chord1 = root_note.chord(chord_random1);

chord1_array = chord1.simple();
console.log(chord1_array);

// Chord 2
chord_random2 = chord_names[upigrRandomInt(0,chord_names.length-1)] +  chord_alt[upigrRandomInt(0,chord_alt.length-1)]; 

console.log(chord_random2);

// Select a different note from scale:
chord2_root = scale.get(upigrRandomInt(0,scale.simple().length-1));

console.log(chord2_root);
chord2 = chord2_root.chord(chord_random2);

chord2_array = chord2.simple();
console.log(chord2_array);

// Chord 3
chord_random3 = chord_names[upigrRandomInt(0,chord_names.length-1)] +  chord_alt[upigrRandomInt(0,chord_alt.length-1)]; 

console.log(chord_random3);

chord3_root = scale.get(upigrRandomInt(0,scale.simple().length-1));

console.log(chord3_root);

chord3 = chord3_root.chord(chord_random3);

chord3_array = chord3.simple();

console.log(chord3_array);


// abc string for send to ABC Editor:

abc = "X: 1\nT: uPIGr-CM_Example-2\nM: 3/4\nL: 1/8\nQ: 100\nV:Vibraphone name='Vibraphone'\nK:C treble\n%%MIDI program 12\n"+t2abc(chord1_array[0]) +"' "+t2abc(chord1_array[1]) +"' "+t2abc(chord1_array[2]) +"' | "+t2abc(chord2_array[0]) +"' "+t2abc(chord2_array[1]) +"' "+t2abc(chord2_array[2]) +"' | "+t2abc(chord3_array[0]) +"' "+t2abc(chord3_array[1]) +"' "+t2abc(chord3_array[2]) +"' |]\nV:Piano Left name='Piano L'\nK:C bass\n%%MIDI program 1\n["+t2abc(chord1_array[0]) +",,"+t2abc(chord1_array[1]) +",,"+t2abc(chord1_array[2]) +",,]3 | ["+t2abc(chord2_array[0]) +",,"+t2abc(chord2_array[1]) +",,"+t2abc(chord2_array[2]) +",,]3 | ["+t2abc(chord3_array[0]) +",,"+t2abc(chord3_array[1]) +",,"+t2abc(chord3_array[2]) +",,]3 |]";
