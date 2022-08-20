class Game {
    constructor() {

    }
    start() {

        form = new Form()
        form.display()
        blackHat = createSprite(939, 503, 50, 50)
        paintingtool = createSprite(238, 632, 50, 50)
        mirror = createSprite(615, 284, 50, 50)
        eifletower = createSprite(830, 290, 50, 50)
        sofa = createSprite(742, 488, 50, 50)
        magnet = createSprite(1074, 550, 50, 50)
        purse = createSprite(524, 650, 50, 50)
        snail = createSprite(179, 244, 50, 50)
        tie = createSprite(198, 427, 50, 50)
        tape = createSprite(122, 682, 50, 50)
        clock = createSprite(266, 311, 50, 50)
        blackHat.visible = false
        paintingtool.visible = false
        mirror.visible = false
        eifletower.visible = false
        sofa.visible = false
        magnet.visible = false
        purse.visible = false
        snail.visible = false
        tie.visible = false
        tape.visible = false
        clock.visible = false

        things={"i1":blackHat,
        "i2":paintingtool,
        "i3":mirror,
        "i4":eifletower,
        "i5":sofa,
        "i6":magnet,
        "i7":purse,
        "i8":snail,
        "i9":tie,
        "i10":tape,
        "i11":clock}

        items = Object.keys(things).length;
    }
    play() {
        if (mousePressedOver(things.i1)) {
            delete things.i1
            this.bhalert()
            items = Object.keys(things).length;
        }
        if (mousePressedOver(things.i2)) {
            delete things.i2
            this.ptalert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i3)) {
            delete things.i3
            this.mialert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i4)) {
            delete things.i4
            this.eitalert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i5)) {
            delete things.i5
            this.soalert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i6)) {
            delete things.i6
            this.magalert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i7)) {
            delete things.i7
            this.pualert()
            items = Object.keys(things).length;
        }
        if (mousePressedOver(things.i8)) {
            delete things.i8
            this.snalert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i9)) {
            delete things.i9
            this.tiealert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i10)) {
            delete things.i10
            this.talert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i11)) {
            delete things.i11
            this.clalert()
            items = Object.keys(things).length
        }
        if(items===10){
            console.log("All Items Collected!!")
        this.walert()
        }
        drawSprites()
    }
    bhalert() {
        swal({
            title: "Black Hat Collected ",
            icon: "success"
        })
    }
    ptalert() {

        swal({
            title: "Painting Tool Collected ",
            icon: "success"
        })
    }
    mialert() {

        swal({
            title: "Mirror Collected ",
            icon: "success"
        })
    }
    eitalert() {

        swal({
            title: "Eifle Tower  Collected ",
            icon: "success"
        })
    }
    soalert() {

        swal({
            title: "sofa Collected ",
            icon: "success"
        })
    }
    magalert() {

        swal({
            title: " Magnet Collected ",
            icon: "success"
        })
    }
    pualert() {

        swal({
            title: "purse Collected ",
            icon: "success"
        })
    }
    snalert() {

        swal({
            title: "snail Collected ",
            icon: "success"
        })
    }
    tiealert() {

        swal({
            title: "tie Collected ",
            icon: "success"
        })
    }
    talert() {

        swal({
            title: "tape Collected ",
            icon: "success"
        })
    }
    clalert() {

        swal({
            title: "clock Collected ",
            icon: "success"
        })
    }
    walert(){

        swal(
            {
              title: `Congratulations!!!`,
              text: "You Have Won This Round!!",
              confirmButtonText: "Play Again"
        
            },
            function (isConfirm) {
              if (isConfirm) {
               gameState=2
              }
            }
        
          )
    }
    start2() {
        playcards1=createSprite(974,639,50,50)
        playcards2=createSprite(614,696,50,50)
        playcards3=createSprite(608,418,50,50)
        apples1=createSprite(849,539,50,50)
        apples2=createSprite(747,501,50,50)
        apples3=createSprite(532,682,50,50)
        apples4=createSprite(225,674,50,50)
        apples5=createSprite(365,412,50,50)
        clock1=createSprite(948,121,50,50)
      clock2=createSprite(396,170,50,50)
        clock3=createSprite(384,484,50,50)
       clock4=createSprite(271,627,50,50)
       clock5=createSprite(770,287,50,50)
       clock6=createSprite(778,491,50,50)
       shoe1 =createSprite(842,312,50,50)
       shoe2 =createSprite(670,665,50,50)
       shoe3 =createSprite(153,560,50,50)
       shoe4 =createSprite(398,629,50,50)
         
        playcards1.visible = false
        playcards2.visible = false
        playcards3.visible = false
        apples1.visible = false
        apples2.visible = false
        apples3.visible = false
        apples4.visible = false
        apples5.visible = false
        clock1.visible = false
        clock2.visible = false
        clock3.visible = false
        clock4.visible = false
        clock5.visible = false
        clock6.visible = false
        shoe1.visible = false
        shoe2.visible = false
        shoe3.visible = false
        shoe4.visible = false

        things={"i1":playcards1,
        "i2":playcards2,
        "i3":playcards3,
        "i4":apples1,
        "i5":apples2,
        "i6":apples3,
        "i7":apples4,
        "i8":apples5,
        "i9":clock1,
        "i10":clock2,
        "i11":clock3,
        "i12":clock4,
        "i13":clock5,
        "i14":clock6,
        "i15":shoe1,
         "i16":shoe2,
        "i17":shoe3,
        "i18":shoe4,}

        items = Object.keys(things).length;
    }
    play2() {
        if (mousePressedOver(things.i1)) {
            delete things.i1
            this.pcalert()
            items = Object.keys(things).length;
        }
        if (mousePressedOver(things.i2)) {
            delete things.i2
            this.pc2alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i3)) {
            delete things.i3
            this.pc3alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i4)) {
            delete things.i4
            this.ap1alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i5)) {
            delete things.i5
            this.ap2alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i6)) {
            delete things.i6
            this.ap3alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i7)) {
            delete things.i7
            this.ap4alert()
            items = Object.keys(things).length;
        }
        if (mousePressedOver(things.i8)) {
            delete things.i8
            this.ap5alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i9)) {
            delete things.i9
            this.cl1alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i10)) {
            delete things.i10
            this.cl2alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i11)) {
            delete things.i11
            this.cl3alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i12)) {
            delete things.i12
            this.cl4alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i13)) {
            delete things.i13
            this.cl5alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i14)) {
            delete things.i14
            this.cl6alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i15)) {
            delete things.i15
            this.sh1alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i16)) {
            delete things.i16
            this.sh2alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i17)) {
            delete things.i17
            this.sh3alert()
            items = Object.keys(things).length
        }
        if (mousePressedOver(things.i18)) {
            delete things.i18
            this.sh4alert()
            items = Object.keys(things).length
        }
        if(items===0){
            console.log("All Items Collected!!")
        this.walert()
        }
        

        drawSprites()
    }
    pcalert() {
        swal({
            title: " Playing Cards  Collected ",
            icon: "Find More!!"
        })
    }
    pc2alert() {

        swal({
            title: "Playing Cards  Collected ",
            icon: "Find More !!"
        })
    }
    pc3alert() {

        swal({
            title: "Playing Card  Collected ",
            icon: "success...Great Job!!"
        })
    } 
   
    ap1alert() {

        swal({
            title: "Apple   Collected ",
            icon: "Find More!!"
        })
    }
    ap2alert() {

        swal({
            title: "Apple  Collected ",
            icon: "Find More!!"
        })
    }
    ap3alert() {

        swal({
            title: " Apple  Collected ",
            icon: "Find More!!"
        })
    }
    ap4alert() {

        swal({
            title: "Apple  Collected ",
            icon: "Find MOre!!"
        })
    }
    ap5alert() {

        swal({
            title: "Apple  Collected ",
            icon: "success...Great Job!!"
        })
    }
    cl1alert() {

        swal({
            title: "Clock  Collected ",
            icon: "Find More!!"
        })
    }
    cl2alert() {

        swal({
            title: "Clock  Collected ",
            icon: "Find More!!"
        })
    }
    cl3alert() {

        swal({
            title: "clock  Collected ",
            icon: "Find MOre!!"
        })
    }
    cl4alert() {

        swal({
            title: "clock Collected ",
            icon: "Find More!!"
        })
    }
    cl5alert() {

        swal({
            title: "clock  Collected ",
            icon: "Find More!!"
        })
    }
    cl6alert() {

        swal({
            title: "clock  Collected ",
            icon: "success"
        })
    }
    sh1alert() {

        swal({
            title: "Shoe  Collected ",
            icon: "Find More!!"
        })
    }
    sh2alert() {

        swal({
            title: "Shoe  Collected ",
            icon: "Find More!!"
        })
    } sh3alert() {

        swal({
            title: "Shoe  Collected ",
            icon: "Find More!!"
        })
    }
    sh4alert() {

        swal({
            title: "Shoe  Collected ",
            icon: "success"
        })
    }
    walert(){

        swal({
            title: "Congracts All Items Are Collected!",
            text: "You Are Getting Much Better!",
            icon: "success",
            button: "Aww yiss!",
          });
    }
}