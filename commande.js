// ********************************* VARIABLES RÉCUPÉRATION COMMANDE **********************************
const myOrder = JSON.parse(localStorage.getItem('successOrder'))


// ********************************* FONCTION CHARGEMENT CONTENU **********************

if(myOrder){
    //Fonction qui affiche le message destiné au user
    const createdOrder = () => {
        let htmlOfMyOrder = 
        `
        <h3 class="mb-5">Votre commande est passée !</h3>
        <h4>Merci <strong>${myOrder.contact.firstName} ${myOrder.contact.lastName}</strong>!</h4>
        <br>
        <p>Nous espérons vous revoir bientôt ! =)</p>
        <p>N° de commande : <strong>${myOrder.orderId}</strong></p>
        `
        
    document.getElementById('commandId').innerHTML = htmlOfMyOrder;
    localStorage.removeItem('object', 'successOrder') //Retire du localStorage les différents objets
    }
    createdOrder();
} 


if(!myOrder){
    document.location.href = "index.html"
    //Renvoie l'utilisateur sur la page d'accueil
}
