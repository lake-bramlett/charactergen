

$(document).ready(function () {

var characterName = "";
var characterClass = "";
var characterRace = "";
var characterGender = "";

var level = 1;

    //attribute variables

    var abiPool = 27;

   




    var strBase = 8;
    var strMod = 0;
    var strRace = 0;
    var strBonus = 0;
    var strTotal = strBase + strMod + strRace + strBonus;
    var dexBase = 8;
    var dexMod = 0;
    var dexRace = 0;
    var dexBonus = 0;
    var dexTotal = dexBase + dexMod + dexRace + dexBonus;
    var conBase = 8;
    var conMod = 0;
    var conRace = 0;
    var conBonus = 0;
    var conTotal = conBase + conMod + conRace + conBonus;
    var intBase = 8;
    var intMod = 0;
    var intRace = 0;
    var intBonus = 0;
    var intTotal = intBase + intMod + intRace + intBonus;
    var wisBase = 8;
    var wisMod = 0;
    var wisRace = 0;
    var wisBonus = 0;
    var wisTotal = wisBase + wisMod + wisRace + wisBonus;
    var chaBase = 8;
    var chaMod = 0;
    var chaRace = 0;
    var chaBonus = 0;
    var chaTotal = chaBase + chaMod + chaRace + chaBonus;

    function updateStatsHtml() {

        strTotal = strBase + strMod + strRace + strBonus;
        dexTotal = dexBase + dexMod + dexRace + dexBonus;
        conTotal = conBase + conMod + conRace + conBonus;
        intTotal = intBase + intMod + intRace + intBonus;
        wisTotal = wisBase + wisMod + wisRace + wisBonus;
        chaTotal = chaBase + chaMod + chaRace + chaBonus;
        
        $('#abi').html(abiPool);
        $('#str').html(strTotal);
        $('#dex').html(dexTotal);
        $('#con').html(conTotal);
        $('#int').html(intTotal);
        $('#wis').html(wisTotal);
        $('#cha').html(chaTotal);
        console.log('_____________________')
        console.log('Strength: ' + strTotal);
        console.log('Dexterity: ' + dexTotal);
        console.log('Constitution: ' + conTotal);
        console.log('Intelligence: ' + intTotal);
        console.log('Wisdom: ' + wisTotal);
        console.log('Charisma: ' + chaTotal);
    };


    function resetRaceMod() {
        strRace = 0;
        dexRace = 0;
        conRace = 0;
        intRace = 0;
        wisRace = 0;
        chaRace = 0;
        resetRaceBonus();


    };

    function resetRaceBonus() {
        strBonus = 0;
        dexBonus = 0;
        conBonus = 0;
        intBonus = 0;
        wisBonus = 0;
        chaBonus = 0;
        $('.race-add').remove();


    };

    function setRaceBonus() {

        var raceBonus = 2
        
                    $('.decreasestr').after('<button class="race-add-str race-add">Racial Bonus</button>');
                    $('.decreasedex').after('<button class="race-add-dex race-add">Racial Bonus</button>');
                    $('.decreasecon').after('<button class="race-add-con race-add">Racial Bonus</button>');
                    $('.decreaseint').after('<button class="race-add-int race-add">Racial Bonus</button>');
                    $('.decreasewis').after('<button class="race-add-con race-add">Racial Bonus</button>');
                    $('.decreasecha').after('<button class="race-add-cha race-add">Racial Bonus</button>');
        
                    $('.race-add-str').click(function () {
        
                        if (raceBonus > 0) {
        
                        strBonus ++;
                        raceBonus --;
        
                        updateStatsHtml();
                        $('.race-add-str').remove();
                        console.log('Strength Bonus Added');
                        };
        
                        if (raceBonus === 0) {
                            $('.race-add').remove();
                        };
        
                    });
        
                    $('.race-add-dex').click(function () {
        
                        if (raceBonus > 0) {
                        
                        dexBonus ++;
                        raceBonus --;
        
                        updateStatsHtml();
                        $('.race-add-dex').remove();
                        console.log('Dexterity Bonus Added');
                        };
                        if (raceBonus === 0) {
                            $('.race-add').remove();
                        };
                                    });
        
                    $('.race-add-con').click(function () {
        
                        if (raceBonus > 0) {
        
                        conBonus ++;
                        raceBonus --;
        
                        updateStatsHtml();
                        $('.race-add-con').remove();
                        console.log('Constitution Bonus Added');
                        };
        
                        if (raceBonus === 0) {
                            $('.race-add').remove();
                        };
        
                    });
        
                    $('.race-add-int').click(function () {
        
                        if (raceBonus > 0) {
                        
                        intBonus ++;
                        raceBonus --;
                        
                        updateStatsHtml();
                        $('.race-add-int').remove();
                        console.log('Intelligence Bonus Added');
                        };
        
                        if (raceBonus === 0) {
                            $('.race-add').remove();
                        };
                        
                    });
        
                    $('.race-add-wis').click(function () {
        
                        if (raceBonus > 0) {
                                        
                        wisBonus ++;
                        raceBonus --;
                                        
                        updateStatsHtml();
                        $('.race-add-wis').remove();
                        console.log('Wisdom Bonus Added');
                        };
        
                        if (raceBonus === 0) {
                            $('.race-add').remove();
                        };
                                        
                    });
        
                    $('.race-add-cha').click(function () {
        
                        if (raceBonus > 0) {
                        
                         chaBonus ++;
                         raceBonus --;
                        
                        updateStatsHtml();
                        $('.race-add-cha').remove();
                        console.log('Charisma Bonus Added');
                        };
        
                        if (raceBonus === 0) {
                            $('.race-add').remove();
                        };
                        
                                    });           
        


    };


    //

   

    //random attribute button

    function randomAttributes() {

        strBase = 0;
        dexBase = 0;
        conBase = 0; 
        intBase = 0;
        wisBase = 0;
        chaBase = 0;

        $('.increasestr, .decreasestr, .increasedex, .decreasedex, .increasecon, .decreasecon, .increaseint, .decreaseint, .increasewis, .decreasewis, .increasecha, .decreasecha').remove();
       

        var statsArray = [];
        var baseArray = [];
        
        for (j = 0; j < 6; j++) {

        for (i = 0; i < 4; i++) {
        
        
        baseArray.push(Math.floor((Math.random() * 6)) + 1); 

        baseArray.sort();
    
        };
    
        baseArray.pop([0])

        console.log('Base Array: ' + baseArray);

        baseArray = baseArray[0] + baseArray[1] + baseArray[2];

        statsArray.push(baseArray);

        baseArray = [];

    };

    $(".ability").html('Random Ability Scores: <br /><button draggable="true" ondragstart="drag(event)">' + statsArray[0] + '</button><button draggable="true" ondragstart="drag(event)">' + statsArray[1] + '</button><button draggable="true" ondragstart="drag(event)">' + statsArray[2] + '</button><button draggable="true" ondragstart="drag(event)">' + statsArray[3] + '</button><button draggable="true" ondragstart="drag(event)">' + statsArray[4] + '</button><button draggable="true" ondragstart="drag(event)">' + statsArray[5] + '</button>');
    


    console.log('Stats Array: ' + statsArray);

};

    
    $('.randomize').click(function () {
        randomAttributes();

    });
    
    //



    //initial attribute scores
    $('#abi').html(abiPool);
    $('#str').html(strTotal);
    $('#dex').html(dexTotal);
    $('#con').html(conTotal);
    $('#int').html(intTotal);
    $('#wis').html(wisTotal);
    $('#cha').html(chaTotal);

    //

    //button functions to increase/decrease abilities

    $(".increasestr").click(function () {
        if (strMod <= 4 && abiPool >= 1) {
            strMod++;
            abiPool--;
            updateStatsHtml()
        } else if ((strMod === 5 || strMod === 6) && abiPool >= 2) {
            strMod++;
            abiPool -= 2;
            updateStatsHtml()
        };

    });

    $(".decreasestr").click(function () {
        if (strMod <= 5 && strMod > 0 && abiPool < 27) {
            strMod--;
            abiPool++;
            updateStatsHtml()
        } else if ((strMod === 7 || strMod === 6) && abiPool < 27) {
            strMod--;
            abiPool += 2;
            updateStatsHtml()
        };
    });

    $(".increasedex").click(function () {
        if (dexMod <= 4 && abiPool >= 1) {
            dexMod++;
            abiPool--;
            updateStatsHtml()
        } else if ((dexMod === 5 || dexMod === 6) && abiPool >= 2) {
            dexMod++;
            abiPool -= 2;
            updateStatsHtml()
        };
    });

    $(".decreasedex").click(function () {
        if (dexMod <= 5 && dexMod > 0 && abiPool < 27) {
            dexMod--;
            abiPool++;
            updateStatsHtml()
        } else if ((dexMod === 7 || dexMod === 6) && abiPool < 27) {
            dexMod--;
            abiPool += 2;
            updateStatsHtml()
        };


    });


    $(".increasecon").click(function () {
        if (conMod <= 4 && abiPool >= 1) {
            conMod++;
            abiPool--;
            updateStatsHtml()
        } else if ((conMod === 5 || conMod === 6) && abiPool >= 2) {
            conMod++;
            abiPool -= 2;
            updateStatsHtml()
        };
    });

    $(".decreasecon").click(function () {
        if (conMod <= 5 && conMod > 0 && abiPool < 27) {
            conMod--;
            abiPool++;
            updateStatsHtml()
        } else if ((conMod === 7 || conMod === 6) && abiPool < 27) {
            conMod--;
            abiPool += 2;
            updateStatsHtml()
        };


    });


    $(".increaseint").click(function () {
        if (intMod <= 4 && abiPool >= 1) {
            intMod++;
            abiPool--;
            updateStatsHtml()
        } else if ((intMod === 5 || intMod === 6) && abiPool >= 2) {
            intMod++;
            abiPool -= 2;
            updateStatsHtml()
        };
    });

    $(".decreaseint").click(function () {
        if (intMod <= 5 && intMod > 0 && abiPool < 27) {
            intMod--;
            abiPool++;
            updateStatsHtml()
        } else if ((intMod === 7 || intMod === 6) && abiPool < 27) {
            intMod--;
            abiPool += 2;
            updateStatsHtml()
        };


    });

    $(".increasewis").click(function () {
        if (wisMod <= 4 && abiPool >= 1) {
            wisMod++;
            abiPool--;
            updateStatsHtml()
        } else if ((wisMod === 5 || wisMod === 6) && abiPool >= 2) {
            wisMod++;
            abiPool -= 2;
            updateStatsHtml()
        };
    });

    $(".decreasewis").click(function () {
        if (wisMod <= 5 && wisMod > 0 && abiPool < 27) {
            wisMod--;
            abiPool++;
            updateStatsHtml()
        } else if ((wisMod === 7 || wisMod === 6) && abiPool < 27) {
            wisMod--;
            abiPool += 2;
            updateStatsHtml()
        };


    });

    $(".increasecha").click(function () {
        if (chaMod <= 4 && abiPool >= 1) {
            chaMod++;
            abiPool--;
            updateStatsHtml()
        } else if ((chaMod === 5 || chaMod === 6) && abiPool >= 2) {
            chaMod++;
            abiPool -= 2;
            updateStatsHtml()
        };
    });

    $(".decreasecha").click(function () {
        if (chaMod <= 5 && chaMod > 0 && abiPool < 27) {
            chaMod--;
            abiPool++;
            updateStatsHtml()
        } else if ((chaMod === 7 || chaMod === 6) && abiPool < 27) {
            chaMod--;
            abiPool += 2;
            updateStatsHtml()
        };


    });
    //

    //Inventory
    $(".add-item").on('click', function (event) {
        event.preventDefault();
        var listItem = $('.item-input').val();

        var itemHtml = "<li><span class='item-text'>" + listItem + "</span><button class='item-remove'>-</button></li>";

        $('.inventory-list').append(itemHtml);
        


    });

    $(".item-remove").on('click', function (event) {
        event.preventDefault();
        $('.item-text').remove(html);


    });
    //
    // Race selector & racial ability modifier 
    $('select[name="races"]').change(function () {
        if ($(this).val() == "1") {

            resetRaceMod();

            conRace += 2;
            wisRace++;
            
            updateStatsHtml();
            console.log('Hill Dwarf')

        } else if ($(this).val() == "2") {
            
                        resetRaceMod();
            
                        conRace += 2;
                        strRace += 2;
                        
                        updateStatsHtml();
                        console.log('Mountain Dwarf');
        
        } else if ($(this).val() == "3") {

            resetRaceMod();

            dexRace += 2;
            intRace ++;

            updateStatsHtml();
            console.log('High Elf');


        } else if ($(this).val() == "4") {

            resetRaceMod();

            dexRace += 2;
            wisRace ++;

            updateStatsHtml();
            console.log('Wood Elf');
        
        } else if ($(this).val() == "5") {

            resetRaceMod();

            dexRace += 2;
            chaRace ++;

            updateStatsHtml();
            console.log('Dark Elf');

        } else if ($(this).val() == "6") {

            resetRaceMod();

            dexRace += 2;
            chaRace ++;

            updateStatsHtml();
            console.log('Lightfoot Halfling');

        } else if ($(this).val() == "7") {

            resetRaceMod();

            dexRace += 2;
            conRace ++;

            updateStatsHtml();
            console.log('Stout Halfling');

        } else if ($(this).val() == "8") {

            resetRaceMod();

            strRace ++;
            dexRace ++;
            conRace ++;
            intRace ++;
            wisRace ++;
            chaRace ++;

            updateStatsHtml();
            console.log('Human');

        } else if ($(this).val() == "9") {

            resetRaceMod();

            strRace += 2;
            chaRace ++;

            updateStatsHtml();
            console.log('Dragonborn');

        } else if ($(this).val() == "10") {

            resetRaceMod();

            intRace += 2;
            dexRace ++;

            updateStatsHtml();
            console.log('Forest Gnome');

        } else if ($(this).val() == "11") {

            resetRaceMod();

            intRace += 2;
            conRace ++;

            updateStatsHtml();
            console.log('Rock Gnome');

        } else if ($(this).val() == "12") {

            resetRaceMod();


            chaRace =+ 2
            //find a way to increase 2 abilties of user's choice
            alert('Choose two abilities to increase by 1!')
            
            setRaceBonus();
            
            updateStatsHtml();
            console.log('Half-Elf');

        } else if ($(this).val() == "13") {

            resetRaceMod();

            strRace += 2;
            conRace ++;

            updateStatsHtml();
            console.log('Half-Orc');

        } else if ($(this).val() == "14") {

            resetRaceMod();

            chaRace += 2;
            intRace ++;

            updateStatsHtml();
            console.log('Tiefling');
        };

   
                    });
    
   
    //

    //class & level selector

    
    function classLevel () {

        level = 1;

        $('.class-level').html('Class Level: ' + level);
        $('.class-button').html('<button class="increase-level">Level Up</button>');
        $('.increase-level').click(function () {

            if (level < 20) {
                level ++;
                $('.class-level').html('Class Level: ' + level);
                console.log('Class Level: ' + level);
            };

        });
    };

    $('select[name="classes"]').change(function () {

        if ($(this).val() == "barbarian") {

            classLevel();

            if (level == 1) {

            };
        
        
        };

        if ($(this).val() == "bard") {

            classLevel();
        
        };

        if ($(this).val() == "cleric") {

            classLevel();
        
        };

        if ($(this).val() == "druid") {

            classLevel();
        
        };

        if ($(this).val() == "fighter") {

            classLevel();

        };

        if ($(this).val() == "monk") {

            classLevel();
        };

        if ($(this).val() == "paladin") {

            classLevel();
        
        };

        if ($(this).val() == "ranger") {

            classLevel();
        
        };

        if ($(this).val() == "rogue") {

            classLevel();
        
        };

        if ($(this).val() == "sorcerer") {

            classLevel();
        
        };

        if ($(this).val() == "warlock") {

            classLevel();
        
        };

        if ($(this).val() == "wizard") {

            classLevel();
        
        };

    });

//

alert('Javascript is working!');

});
