import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJECT.firebaseapp.com",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_BUCKET.appspot.com",
    messagingSenderId: "SUA_ID",
    appId: "SEU_APP_ID"
};

// Inicializando Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function salvarPedido(pedido) {
    try {
        const docRef = await addDoc(collection(db, "pedidos"), pedido);
        console.log("Pedido registrado com sucesso: ", docRef.id);
    } catch (e) {
        console.error("Erro ao registrar pedido: ", e);
    }
}
