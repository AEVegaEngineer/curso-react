import {db} from '../firebase/firebase-config'
import { collection, getDocs } from "firebase/firestore";

export const loadNotes = async(uid) => {
  const notesSnap = await getDocs(collection(db, `${ uid }`, '/journal/notes'));
  const notes = [];
  notesSnap.forEach( snapHijo => {
    //console.log(snapHijo.data());
    notes.push({ id: snapHijo.id, ...snapHijo.data() });
  })
  //console.log(notes)  
  return notes;
}