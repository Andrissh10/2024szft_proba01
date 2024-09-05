const nemet=['BMW', 'AUDI', 'MERCEDES', 'VOLKSWAGEN', 'OPEL']
const japan=['NISSAN', 'MITSUBISHI', 'TOYOTA', 'SUBARU', ]

function init() {
    document.getElementById('nemet').innerHTML += nemet.map( v =>
        `<div id="kocsi" onclick="f('${ v }')">${ v }</div>`
    ).join("")
    document.getElementById('japan').innerHTML += japan.map( v =>
        `<div id="kocsi" onclick="f('${ v }')">${ v }</div>`
    ).join("")
}
const f = console.log


/*

function init() {
    document.getElementById('body').innerHTML = ` 
    <div onclick="f('cica')">Cica</div>
    <div onclick="f('kutya')" class="harapos">Kutya</div>
    <div onclick="f('malac')">Malac</div>`
    
}


function f(a) {
    console.log(a)
}
*/