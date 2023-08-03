import firebase from "../Config/firebase"


export async function getAllCompra(){

    const querySnapshot = await firebase.db.collection("compra")
    .get()
    return querySnapshot.docs
}
