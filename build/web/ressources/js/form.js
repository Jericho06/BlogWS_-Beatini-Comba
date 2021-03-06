/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var url = "/BlogWS2015/resources/files/upload";

var position;
var filesUploaded = [];
var filesUploadedNames = [];

/*****Partie drag and drop******/

$(document).ready(function () {

    var dropZone = document.getElementById('dropZone');


    dropZone.addEventListener('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';

        $("#dropZone").css({"border-style": "dashed"});
    });

    dropZone.addEventListener('dragleave', function (e) {
        e.stopPropagation();
        e.preventDefault();
        $("#dropZone").css({"border-style": "solid"});
    });

    
    dropZone.addEventListener('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files; 
        for (var i = 0, f; f = files[i]; i++) {
            if (f.type.match(/image.*/)) {
                var reader = new FileReader();
                reader.onload = (function (file) {
                    return function (e) { 

                        if ($.inArray(e.target.result, filesUploaded) == -1) {
                            $("<img class=\"uploadedImg miniature\"src=\"" + e.target.result + "\"/>").insertAfter("#media-list");
                            filesUploaded.push(e.target.result);
                            filesUploadedNames.push(file.name);
                            console.log("fichier ajouté");
                        } else {
                            console.log("fichier déjà existant");
                        }
                    }
                })(f);
                reader.readAsDataURL(f); 
            }
        }

        $("#dropZone").css({"border-style": "dashed"});
    });
});

window.onload = function () {
    var myForm = document.querySelector("#myForm");
    var fileSelector = document.querySelector("#fileSelector");
    var progress = document.querySelector("#progress");

}
function sendForm() {
    console.log("in sendForm()");

        console.log("form : " + filesUploadedNames);
    // SEND THE FORM USING AJAX

    var myForm = document.querySelector("#myForm");
    var fileSelector = document.querySelector("#fileSelector");

    // On remplit un objet FormData pour envoyer le formulaire
    // (y compris les fichiers attachés) en multipart
    var data = new FormData(myForm);
    var files = fileSelector.files;
    for (var i = 0; i < files.length; i++) {
        
        var name = "file";
        data.append(name, fileSelector.files[i]);
    }

    sendFormDataWithXhr2(url, data);

    return false;
}




function sendFormDataWithXhr2(url, data) {
    // ajax request
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url); // With FormData,
    // POST is mandatory
    
    

    xhr.onload = function () {
        $(".uploadedImg").remove();
        console.log('Upload complete !');
        filesUploaded = [];
        filesUploadedNames = [];

    };

    xhr.onerror = function () {
        console.log("erreur lors de l'envoi");
    }
    
    xhr.upload.onprogress = function (e) {
        progress.value = e.loaded; // number of bytes uploaded
        progress.max = e.total;    // total number of bytes in the file
    };

    // send the request
    xhr.send(data);
}

/*****Partie selection d'image******/

function fichierSelectionner(event) {

    var files = event.target.files;

    for (var i=0, f; f=files[i]; i++) {

        var reader = new FileReader();
        reader.onload = (function (file) {
            return function (e) {
                if ($.inArray(e.target.result, filesUploaded) == -1) {
                    $("<img class=\"uploadedImg miniature\"src=\"" + e.target.result + "\" style='heigth : 50px; width : 50px;'/>").insertAfter("#media-list");
                    filesUploaded.push(e.target.result);
                    filesUploadedNames.push(file.name);

                   
                    // On regarde l'état du fichier inséré
                    console.log("fichier ajouté");
                } else {
                    console.log("fichier déjà existant");
                }
            }
        })
                (f);

        reader.readAsDataURL(f);
    }
};

