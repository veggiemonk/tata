/**
 * Created by bisconti on 29/08/14.
 */

$(function (){
    "use strict";


    /*var serverURL = '//qaiapps.groups.be/ariane/',
        baseURL = '//qaiapps.groups.be/itransfer/';*/
    //var serverURL = '//deviapps.groups.be/ariane/',
    var serverURL = '//172.20.20.64:8018/',
        baseURL = '//localhost:4000/';



    /**
     * Returns one of supported language, default if not.
     * Supported languages: 'nl', 'fr', 'en' (default).
     * @returns {string}
     */
    function getNavigatorLanguage () {
        var locale = (window.navigator.userLanguage || window.navigator.language);
        locale = /..-../.test(locale) ? locale.split('-')[0] : locale.split('_')[0];
        if ((locale !== "en") && (locale !== "fr") && (locale !== "nl") ) locale = 'en';
        return locale;
    }


    function enterPressed (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            submitLogin();
            return false;
        } else {
            return true;
        }
    }

    function submitLogin(){
        var credentials =
        {
            "login"     : $('#login').val(),
            "password"  : $('#password').val()
        };

      $('#loader').show();

        $.ajax({
            type: "POST",
            url: serverURL + 'login',
            data: credentials,
            success: function (data){
                if(data.token){
                    sessionStorage.setItem("token", data.token);
                    sessionStorage.setItem("username", credentials.login);
                }
                //redirect to itransfer;
                window.location = baseURL + 'file.html';
                window.login = $('#login').val();
            },
            dataType: 'json',
            /*complete: function () {
              $('#loader').hide();
            },*/
            error: function (xhr) {
                $('#loader').hide();
                if(xhr.status >= 500) {
                    alert ( "ERROR: connection problem");
                }
            },
            statusCode: {
                403: function() {
                    $('#loader').hide();
                    alert( "ERROR: login / password incorrect." );
                },
                401: function() {
                    $('#loader').hide();
                    alert ( "ERROR: connection problem");
                },
                504: function() {
                    $('#loader').hide();
                    alert ( "ERROR: connection problem");
                }
            }
        });
    }

    //set language
    sessionStorage.setItem("lang", getNavigatorLanguage() );

    //set event
    $('#submit-login').on('click', submitLogin);
    $('input').keypress(enterPressed);
    $('.login-lang').on('click', function (){
       sessionStorage.setItem("lang", $(this).html().toLowerCase());
    });
});