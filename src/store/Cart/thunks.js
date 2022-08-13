import { doc,setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/Config";

export const writeUserData = async(user) => {
 await setDoc(doc(FirebaseDB, 'usuarios/' + user.uid), {
  name: user.displayName,
  email: user.email,
}
);
}



