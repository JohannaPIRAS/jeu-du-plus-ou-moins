var good_valeur = Math.floor(Math.random() * 11);

console.log(good_valeur);

var i = 1;
var winner = false;
var bouton2 = document.getElementById('replay');

$("#btni").click(function btni() {
    var value_champ = $("#btninput").val();

    if (value_champ < good_valeur) {
        alert("c'est plus grand ");
        i++;

    } else if (value_champ > good_valeur) {
        alert("c'est plus petit")
        i++;

    } else {
        alert("YOU WIIIIIIIIN!!!" + good_valeur);
        location.reload();
    }

    if (i > 3) {
        alert("STOOOOOOOOOOOOOP YOU LOOSE  " + good_valeur)
        location.reload();
    }
});

bouton2.addEventListener('click', function() {
    location.reload();
});