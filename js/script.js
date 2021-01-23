$(document).ready(function () {
    const icons = [
        {
            name: 'cat',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'crow',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dog',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dove',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'dragon',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'horse',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'hippo',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'fish',
            prefix: 'fa-',
            type: 'animal',
            family: 'fas',
        },
        {
            name: 'carrot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'apple-alt',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'lemon',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'pepper-hot',
            prefix: 'fa-',
            type: 'vegetable',
            family: 'fas',
        },
        {
            name: 'user-astronaut',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-graduate',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-ninja',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        },
        {
            name: 'user-secret',
            prefix: 'fa-',
            type: 'user',
            family: 'fas',
        }
    ];
    const colors = [
        'blue',
        'orange',
        'purple'
    ];
    const types = getTypes(icons);

    const iconsColor = icons.map((element) => {
        console.log(element.type);
        const indexType = types.indexOf(element.type)
        console.log(indexType);

        return {
            ...element,
            color: colors[indexType]
        }
    });
    console.log(iconsColor);

    const container = $('.icons');
    stampaIcone(iconsColor, container);

    const select = $('#type');
    stampaOpzioni(types, select);

    select.change(function () {
        const selezionato = $(this).val();
        console.log(selezionato);


        const filteredIcon = filterValue(iconsColor, selezionato);

        stampaIcone(filteredIcon, container);
    });


});

function filterValue(array, type) {
    const filteredIcons = array.filter((element) => {
        return element.type == type;
    });
    return filteredIcons;
}








function stampaOpzioni(array, select) {
    array.forEach((element) => {
        select.append(`
        <option value="${element}">${element}</option>
        `)

    })
}





function stampaIcone(array, container) {
    container.html('');
    array.forEach((element) => {
        const { name, family, prefix, type, color } = element;
        container.append(
            `             
    <div class="icona">
                <i class="${family} ${prefix}${name}" style="color:${color}"></i>
                <div class="titolo">${name.toUpperCase()}</div>
            </div>`

        );
    });

}
// funzione per  creare  l'array con animal, vegetable , user
function getTypes(array) {

    const types = [];
    array.forEach((Element) => {
        if (!types.includes(Element.type)) {
            types.push(Element.type)
        }
    });
    return types
}
