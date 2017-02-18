class Recepie {
    constructor(name, origin, time, preparation, ingridients) {
        this.name = name;
        this.origin = origin;
        this.time = time
        this.preparation = preparation
        this.ingridients = ingridients;

    }
}


$(() => {
    let recepies = [];
    let $tBody = $("#ingridient")
    let ingridients = {};
    let $listIngridients = $("#listIngridients");
    let niza = []
    let id = 0;


    let addRecepies = (a, $listIngridients, id) => {

        $listIngridients.append(
            `
            <tr>
            <td class = "index">${id + 1}</td>
            <td>${a.name}</td>
            <td>${a.origin}</td>
            <td>${niza}</td>
            <td>${a.time}</td>
            <td>${a.preparation}</td>
            <td><button class="btn btn-danger delete">Избриши</button></td>
            </tr>
            `
        )

    }



    $("#mySelect").on("change", () => {
        $selected = $("#mySelect option:selected")
        $tBody.html(
            `
        
        <tr>
            <td>${$selected.text()}</td>
            <td><input type="number" id="ammount" class ="form-control" style = "width: 100px;"></td>
            <td><button id="addIngridient">Додади Состојка</button></td>
        </tr>
        
        `
        )

    })


    $tBody.on("click", "#addIngridient", () => {
        niza = [];
        ingridients[$("select option:selected").val()] = $("#ammount").val()
        console.log(ingridients)
        niza.push($("#mySelect option:selected").val());
        console.log(niza);
    })


    $("#saveRecepie").on("click", () => {
        debugger;
        $listIngridients.empty();
        // let id = 1 + (recepies != null ? recepies.length : 0);
        let recepie = new Recepie($("#name").val(), $("#origin").val(), $("#time").val(), $("#txtArea").val(), ingridients)
        recepies.push(recepie);
        console.log(recepies);







        $(".clearOnSave").val("");
        $("#mySelect").val($("#mySelect option:first").val());
        $("#recepieList").toggle(".hide")
        $("#recepie-form").toggle(".hide");


        recepies.forEach((m, id) => { addRecepies(m, $listIngridients, id) });

        ingridients = {};


    })


    $("#newRecepie").on("click", () => {
        $("#recepie-form").toggle(".hide");
        $("#recepieList").toggle(".hide")
    })

    $("#listIngridients").on("click", "button", function() {
        debugger;
        let currentRowId = $(this).closest("tr").find(".index").text();
        // $(this).closest("tr").remove();
        recepies.splice(currentRowId - 1, 1);

        $listIngridients.empty();
        recepies.forEach((m, id) => addRecepies(m, $listIngridients, id))

    })
})