import { doc,setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/Config";

export const writeUserData = async(user) => {
const usuario = await setDoc(doc(FirebaseDB, 'usuarios/' + user.uid), {
  name: user.displayName,
  email: user.email,
}
);
}



