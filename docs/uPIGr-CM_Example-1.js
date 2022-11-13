// uPIGr-CM_Example-1

// Simple random melody.

// 1. Root note

notes = ['C','D','E','F','G','A','B'];

root_note = teoria.note(notes[upigrRandomInt(0,notes.length-1)]);

root_note_string = root_note.toString();

// 2. Scales

scales = teoria.Scale.KNOWN_SCALES;

// 3. Select random scale

scale_random = scales[upigrRandomInt(0,scales.length-1)];

scale = root_note.scale(scale_random).simple();

note1 = scale[upigrRandomInt(0,scale.length-1)];

note2 = scale[upigrRandomInt(0,scale.length-1)];

note3 = scale[upigrRandomInt(0,scale.length-1)];

note4 = scale[upigrRandomInt(0,scale.length-1)];


note1abc = t2abc(note1);
note2abc = t2abc(note2);
note3abc = t2abc(note3);
note4abc = t2abc(note4);

// 4. Write abc string

abc = "X: 1\nT: uPIGr-CM_Example-1\nC:\n"+note1abc+"2 "+note2abc+"2 "+note3abc+"2 "+note4abc+"2 |]\n";
