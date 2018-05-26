'use strict'

               // [0]   [1]    [2]   [3]     [4]
 var ToBeList = ['am', 'are', 'is', 'was', 'were'];

window.addEventListener('load', function () {

    document.onkeypress = mostrarInformacionTecla

})

function mostrarInformacionTecla(event) {

    event.preventDefault();

    if (event.keyCode == 13)
        document.getElementById('cerrar-modal').checked = true

}

var before = {};
var sentence = {};
var typeElement = null;

function allowDrop(event) {
    event.preventDefault();
}

function DragEventElement(e, type) {
    before = {
        id: e.srcElement.id,
        innerHTML: e.srcElement.innerHTML,
        type: type
    };
    if (before.type == 'PropperNoun' || before.type == 'CommonNoun')
        typeElement = before.type;
}

function DropEventElement(event, id) {

    event.preventDefault();
    document.getElementById(id).innerHTML = before.innerHTML

    var text = document.getElementById('text_' + before.id).innerHTML

    switch (id) {
        case 'subject': {
            sentence.subject = text;
            break;
        }
        case 'tobe': {
            sentence.tobe = text;
            break;
        }
        case 'complement': {
            sentence.complement = text;
            break;
        }
    }

    sentence.full = GetValue(sentence.subject) + ' ' + GetValue(sentence.tobe) + ' ' + GetValue(sentence.complement);

}

function GetValue(value) {
    return value == undefined ? "-" : value
}



function SentenceValidate() {

    switch (sentence.subject) {
        case "I": {
            ValidateToBeExpression(0, 3)
            break;
        }
        case "You": {
            ValidateToBeExpression(1, 4)
            break;
        }
        case "He": {
            ValidateToBeExpression(2, 3)
            break;
        }
        case "She": {
            ValidateToBeExpression(2, 3)
            break;
        }
        case "It": {
            ValidateToBeExpression(2, 3)
            break;
        }
        case "We": {
            ValidateToBeExpression(1, 4)
            break;
        }
        case "They": {
            ValidateToBeExpression(1, 4)
            break;
        }
        default: {

            switch (typeElement) {
                case 'PropperNoun': {
                    if (sentence.tobe == ToBeList[2] || sentence.tobe == ToBeList[3]) {
                        if (sentence.complement != null) {
                            ModalShow(true); break
                        }
                    }
                    ModalShow(false)
                    break;
                }
                case 'CommonNoun': {

                    var reg1 = /^(the|The)(\s)+[a-zA-Z]+(s)$/
                    var reg2 = /^(the|The)(\s)+[a-zA-Z]{1,}$/

                    console.log(sentence.subject)
                    if (reg1.test(sentence.subject)){
                        ValidateToBeExpression(1, 4)
                    } else {
                        ValidateToBeExpression(2, 3)
                    }
                        
                    // if (reg2.test(sentence.subject)){
                    //     ValidateToBeExpression(2, 3)
                    // }
                        
                    break;
                }
                default: {
                    ModalShow(false)
                }
            }

        }
    }



    // alert(sentence.full)
    // var reg = /^(the|The)(\s)+[a-zA-Z]+(s)(\s)$/

    // if (reg.test('The pencils '))
    //     console.log('Correcto')
    // else
    //     console.log('Incorrecto')

    // if (sentence.subject.includes('The')) {
    //     if (sentence.subject.charAt(sentence.subject.length - 1) == 's') {
    //         if (sentence.tobe == 'are' || sentence.tobe == 'were') {
    //             console.log('vamos bien')
    //         }
    //     }
    // }

}

function ValidateToBeExpression(opt1, opt2) {
       
    if (sentence.tobe == ToBeList[opt1] || sentence.tobe == ToBeList[opt2]) {
        if (sentence.complement != null) {
            ModalShow(true); return;
        }
    }
    ModalShow(false)
}

function ModalShow(validate) {

    console.log(validate)
    let logo = document.getElementById('logo')

    if (validate)
        logo.src = '/img/291201.svg'
    else
        logo.src = '/img/291202.svg'

    document.getElementById('mostrar-modal').checked = true;
}