$( 'document' ).ready( function () {
    'use strict';
    // tooltip - add rel='tooltip' to the tooltip element
    $( function () {
        $( "[rel='tooltip']" ).tooltip();
    } );


    ////////////////////////////////////////////////////////
    //                  SIDENAV
    ///////////////////////////////////////////////////////

    $( function () {
        $( '.cat1 > a:nth-child(1)' ).on( 'click', function () {
            console.log( $( this ) );
        } );


        $( '#root' ).on( 'click', function () {
            alert( $( this ).next() );
            $( this ).next().toggle();
        } );

    } );
} );