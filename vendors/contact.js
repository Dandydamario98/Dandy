$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                },
                subject: {
                    required: true,
                },
                number: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                }
            },
            messages: {
                name: {
                    required: "Nama Wajib Diisi",
                },
                subject: {
                    required: "Subjek Wajib Diisi",
                },
                number: {
                    required: "come on, you have a number, don't you?",
                },
                email: {
                    required: "E-Mail Harap Diisi"
                },
                message: {
                    required: "Harap Masukkan Pesan",
                }
            },
        })
    })
        
 })(jQuery)
})