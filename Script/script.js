function myFunction() {
    let x = document.getElementById("vrsta").value;
    if (x.toUpperCase() == "STAN")
        document.getElementById("struktura").disabled = false;
    else
        document.getElementById("struktura").disabled = true;
}

function provera(){
    let x = document.getElementById("cena_min").value;
    let y = document.getElementById("cena_max").value;

    if(x < 0 || y < 0 || x > y){
        alert("Uneta cena nije ispravna!");
        return;
    }

    let z = document.getElementById("povrsina_min").value;
    let w = document.getElementById("povrsina_max").value;

    if(z < 0 || w < 0 || z > w){
        alert("Uneta povrsina nije ispravna!");
        return;
    }
}

function proveriEmail() {

    let x = document.getElementById("posta")
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (x.value.match(mailformat)) {
        x.value = "";
        alert("Prijava je bila uspešna!");
        return true;
    }
    else {
        alert("Uneli ste nevažeću email adresu!");
        return false;
    }
}