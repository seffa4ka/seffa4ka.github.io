$(function() {
    let isMobile = false;
    let elements = {
        "e1": {"id": 1, "state": "layer-1", "lock": false},
        "e2": {"id": 2, "state": "layer-1", "lock": false},
        "e3": {"id": 3, "state": "layer-1", "lock": false},
        "e4": {"id": 4, "state": "layer-1", "lock": false},
        "e5": {"id": 5, "state": "layer-1", "lock": false},
        "e6": {"id": 6, "state": "layer-1", "lock": false}
    };
    let level = {
        "l1": null,
        "l2": null
    }

    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


    function Satate() {
        for (let element in elements) {
            if (elements[element].state === "cancel") {
                $(".element-" + elements[element].id + " .cancel").show();
                $(".element-" + elements[element].id + " .layer-1").hide();
                $(".element-" + elements[element].id + " .layer-2").hide();
                $(".element-" + elements[element].id + " .layer-3").hide();
                $(".element-" + elements[element].id + " .layer-4").hide();
            } else if (elements[element].state === "layer-1") {
                $(".element-" + elements[element].id + " .cancel").hide();
                $(".element-" + elements[element].id + " .layer-1").show();
                $(".element-" + elements[element].id + " .layer-2").hide();
                $(".element-" + elements[element].id + " .layer-3").hide();
                $(".element-" + elements[element].id + " .layer-4").hide();
            } else if (elements[element].state === "layer-2") {
                $(".element-" + elements[element].id + " .cancel").hide();
                $(".element-" + elements[element].id + " .layer-1").hide();
                $(".element-" + elements[element].id + " .layer-2").show();
                $(".element-" + elements[element].id + " .layer-3").hide();
                $(".element-" + elements[element].id + " .layer-4").hide();
            } else if (elements[element].state === "layer-3") {
                $(".element-" + elements[element].id + " .cancel").hide();
                $(".element-" + elements[element].id + " .layer-1").hide();
                $(".element-" + elements[element].id + " .layer-2").hide();
                $(".element-" + elements[element].id + " .layer-3").show();
                $(".element-" + elements[element].id + " .layer-4").hide();
            } else if (elements[element].state === "layer-4") {
                $(".element-" + elements[element].id + " .cancel").hide();
                $(".element-" + elements[element].id + " .layer-1").hide();
                $(".element-" + elements[element].id + " .layer-2").hide();
                $(".element-" + elements[element].id + " .layer-3").hide();
                $(".element-" + elements[element].id + " .layer-4").show();
            };
        };
        console.log('state');
    }

    function normolizeLayer4() {
        for (let element in elements) {
            if (elements[element].state === "layer-4") {
                elements[element].state = "layer-3";
            }
        }
    }

    function element(e) {
        switch(e) {
          case 1:
            if (elements.e1.state === "layer-1") {
                elements.e1.state = "layer-2";
                elements.e2.state = "layer-1";
                elements.e3.state = "layer-1";
                elements.e4.state = "layer-1";
                elements.e5.state = "layer-1";
                elements.e6.state = "layer-1";
            } else if (elements.e1.state === "layer-2" && !elements.e1.lock) {
                elements.e1.state = "layer-1";
            } else if (elements.e1.state === "layer-3") {
                normolizeLayer4();
                elements.e1.state = "layer-4";
            } else if (elements.e1.state === "layer-4") {
                elements.e1.state = "layer-3";
            };
            break;

          case 2:
            if (elements.e2.state === "layer-1") {
                elements.e1.state = "layer-1";
                elements.e2.state = "layer-2";
                elements.e3.state = "layer-1";
                elements.e4.state = "layer-1";
                elements.e5.state = "layer-1";
                elements.e6.state = "layer-1";
            } else if (elements.e2.state === "layer-2" && !elements.e2.lock) {
                elements.e2.state = "layer-1";
            } else if (elements.e2.state === "layer-3") {
                let el = 1;

                normolizeLayer4();
                elements.e2.state = "layer-4";

                $(".element-2 .sub-2-element-1").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-1');
                $(".element-2 .sub-2-element-2").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-2');
                $(".element-2 .sub-2-element-3").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-3');
                $(".element-2 .sub-2-element-4").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-4');
                $(".element-2 .sub-2-element-5").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-5');
                $(".element-2 .sub-2-element-6").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-6');
            } else if (elements.e2.state === "layer-4") {
                elements.e2.state = "layer-3";
            };
            break;

          case 3:
            if (elements.e3.state === "layer-1") {
                elements.e1.state = "layer-1";
                elements.e2.state = "layer-1";
                elements.e3.state = "layer-2";
                elements.e4.state = "layer-1";
                elements.e5.state = "layer-1";
                elements.e6.state = "layer-1";
            } else if (elements.e3.state === "layer-2" && !elements.e3.lock) {
                elements.e3.state = "layer-1";
            } else if (elements.e3.state === "layer-3") {
                let el = 2;

                if (level.l1 === 1) {
                    el = 1;
                }

                normolizeLayer4();
                elements.e3.state = "layer-4";

                $(".element-3 .sub-2-element-1").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-1');
                $(".element-3 .sub-2-element-2").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-2');
                $(".element-3 .sub-2-element-3").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-3');
                $(".element-3 .sub-2-element-4").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-4');
                $(".element-3 .sub-2-element-5").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-5');
                $(".element-3 .sub-2-element-6").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-6');
            } else if (elements.e3.state === "layer-4") {
                elements.e3.state = "layer-3";
            };
            break;

          case 4:
            if (elements.e4.state === "layer-1") {
                elements.e1.state = "layer-1";
                elements.e2.state = "layer-1";
                elements.e3.state = "layer-1";
                elements.e4.state = "layer-2";
                elements.e5.state = "layer-1";
                elements.e6.state = "layer-1";
            } else if (elements.e4.state === "layer-2" && !elements.e4.lock) {
                elements.e4.state = "layer-1";
            } else if (elements.e4.state === "layer-3") {
                let el = 2;

                if (level.l1 === 5 || level.l1 === 6) {
                    el = 3;
                }

                normolizeLayer4();
                elements.e4.state = "layer-4";

                $(".element-4 .sub-2-element-1").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-1');
                $(".element-4 .sub-2-element-2").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-2');
                $(".element-4 .sub-2-element-3").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-3');
                $(".element-4 .sub-2-element-4").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-4');
                $(".element-4 .sub-2-element-5").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-5');
                $(".element-4 .sub-2-element-6").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-6');
            } else if (elements.e4.state === "layer-4") {
                elements.e4.state = "layer-3";
            };
            break;

          case 5:
            if (elements.e5.state === "layer-1") {
                elements.e1.state = "layer-1";
                elements.e2.state = "layer-1";
                elements.e3.state = "layer-1";
                elements.e4.state = "layer-1";
                elements.e5.state = "layer-2";
                elements.e6.state = "layer-1";
            } else if (elements.e5.state === "layer-2" && !elements.e5.lock) {
                elements.e5.state = "layer-1";
            } else if (elements.e5.state === "layer-3") {
                let el = 3;

                if (level.l1 === 6) {
                    el = 4;
                }

                normolizeLayer4();
                elements.e5.state = "layer-4";

                $(".element-5 .sub-2-element-1").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-1');
                $(".element-5 .sub-2-element-2").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-2');
                $(".element-5 .sub-2-element-3").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-3');
                $(".element-5 .sub-2-element-4").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-4');
                $(".element-5 .sub-2-element-5").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-5');
                $(".element-5 .sub-2-element-6").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-6');
            } else if (elements.e5.state === "layer-4") {
                elements.e5.state = "layer-3";
            };
            break;

          case 6:
            if (elements.e6.state === "layer-1") {
                elements.e1.state = "layer-1";
                elements.e2.state = "layer-1";
                elements.e3.state = "layer-1";
                elements.e4.state = "layer-1";
                elements.e5.state = "layer-1";
                elements.e6.state = "layer-2";
            } else if (elements.e6.state === "layer-2" && !elements.e6.lock) {
                elements.e6.state = "layer-1";
            } else if (elements.e6.state === "layer-3") {
                let el = 4;

                normolizeLayer4();
                elements.e6.state = "layer-4";

                $(".element-6 .sub-2-element-1").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-1');
                $(".element-6 .sub-2-element-2").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-2');
                $(".element-6 .sub-2-element-3").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-3');
                $(".element-6 .sub-2-element-4").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-4');
                $(".element-6 .sub-2-element-5").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-5');
                $(".element-6 .sub-2-element-6").text('e-' + level.l1 + '-' + level.l2 + '-' + el + '-6');
            } else if (elements.e6.state === "layer-4") {
                elements.e6.state = "layer-3";
            };
            break;
        }
        
        Satate();
    }

    if (isMobile) {
        $(".element-1").bind('click', function() {
            console.log('a');
            element(1);
        });

        $(".element-2").bind('click', function() {
            element(2);
        });

        $(".element-3").bind('click', function() {
            element(3);
        });

        $(".element-4").bind('click', function() {
            element(4);
        });

        $(".element-5").bind('click', function() {
            element(5);
        });

        $(".element-6").bind('click', function() {
            element(6);
        });
    } else {
        $(".element-1").bind('mouseenter', function() {
            console.log('a');
            element(1);
        });

        $(".element-2").bind('mouseenter', function() {
            element(2);
        });

        $(".element-3").bind('mouseenter', function() {
            element(3);
        });

        $(".element-4").bind('mouseenter', function() {
            element(4);
        });

        $(".element-5").bind('mouseenter', function() {
            element(5);
        });

        $(".element-6").bind('mouseenter', function() {
            element(6);
        });
    }

    $(".element-1 .layer-2").bind('click', function() {
        elements.e1.lock = true;
        elements.e2.state = "cancel";
        elements.e3.state = "layer-3";
        elements.e4.state = "layer-3";
        elements.e5.state = "layer-3";
        elements.e6.state = "layer-3";

        let el = $(this).attr('class').replace("layer layer-2 sub-element-", "");

        level.l1 = 1;
        level.l2 = parseInt(el);

        $(".element-3 .layer-3").text('e-1-' + el + '-1');
        $(".element-4 .layer-3").text('e-1-' + el + '-2');
        $(".element-5 .layer-3").text('e-1-' + el + '-3');
        $(".element-6 .layer-3").text('e-1-' + el + '-4');

        Satate();
    });

    $(".element-2 .layer-2").bind('click', function() {
        elements.e2.lock = true;
        elements.e1.state = "cancel";
        elements.e3.state = "layer-3";
        elements.e4.state = "layer-3";
        elements.e5.state = "layer-3";
        elements.e6.state = "layer-3";

        let el = $(this).attr('class').replace("layer layer-2 sub-element-", "");

        level.l1 = 2;
        level.l2 = parseInt(el);

        $(".element-3 .layer-3").text('e-2-' + el + '-1');
        $(".element-4 .layer-3").text('e-2-' + el + '-2');
        $(".element-5 .layer-3").text('e-2-' + el + '-3');
        $(".element-6 .layer-3").text('e-2-' + el + '-4');

        Satate();
    });

    $(".element-3 .layer-2").bind('click', function() {
        elements.e3.lock = true;
        elements.e1.state = "cancel";
        elements.e2.state = "layer-3";
        elements.e4.state = "layer-3";
        elements.e5.state = "layer-3";
        elements.e6.state = "layer-3";

        let el = $(this).attr('class').replace("layer layer-2 sub-element-", "");

        level.l1 = 3;
        level.l2 = parseInt(el);

        $(".element-2 .layer-3").text('e-3-' + el + '-1');
        $(".element-4 .layer-3").text('e-3-' + el + '-2');
        $(".element-5 .layer-3").text('e-3-' + el + '-3');
        $(".element-6 .layer-3").text('e-3-' + el + '-4');

        Satate();
    });

    $(".element-4 .layer-2").bind('click', function() {
        elements.e4.lock = true;
        elements.e1.state = "cancel";
        elements.e2.state = "layer-3";
        elements.e3.state = "layer-3";
        elements.e5.state = "layer-3";
        elements.e6.state = "layer-3";

        let el = $(this).attr('class').replace("layer layer-2 sub-element-", "");

        level.l1 = 4;
        level.l2 = parseInt(el);

        $(".element-2 .layer-3").text('e-4-' + el + '-1');
        $(".element-3 .layer-3").text('e-4-' + el + '-2');
        $(".element-5 .layer-3").text('e-4-' + el + '-3');
        $(".element-6 .layer-3").text('e-4-' + el + '-4');

        Satate();
    });

    $(".element-5 .layer-2").bind('click', function() {
        elements.e5.lock = true;
        elements.e1.state = "cancel";
        elements.e2.state = "layer-3";
        elements.e3.state = "layer-3";
        elements.e4.state = "layer-3";
        elements.e6.state = "layer-3";

        let el = $(this).attr('class').replace("layer layer-2 sub-element-", "");

        level.l1 = 5;
        level.l2 = parseInt(el);

        $(".element-2 .layer-3").text('e-5-' + el + '-1');
        $(".element-3 .layer-3").text('e-5-' + el + '-2');
        $(".element-4 .layer-3").text('e-5-' + el + '-3');
        $(".element-6 .layer-3").text('e-5-' + el + '-4');

        Satate();
    });

    $(".element-6 .layer-2").bind('click', function() {
        elements.e6.lock = true;
        elements.e1.state = "cancel";
        elements.e2.state = "layer-3";
        elements.e3.state = "layer-3";
        elements.e4.state = "layer-3";
        elements.e5.state = "layer-3";

        let el = $(this).attr('class').replace("layer layer-2 sub-element-", "");

        level.l1 = 6;
        level.l2 = parseInt(el);

        $(".element-2 .layer-3").text('e-6-' + el + '-1');
        $(".element-3 .layer-3").text('e-6-' + el + '-2');
        $(".element-4 .layer-3").text('e-6-' + el + '-3');
        $(".element-5 .layer-3").text('e-6-' + el + '-4');

        Satate();
    });

    $(".cancel").bind('click', function() {
        let el = ($(this).parent().attr('class')).replace("element element-", "");

        for (let element in elements) {
            if (parseInt(elements[element].id) === parseInt(el)) {
                elements[element].state = "layer-2";
            } else {
                elements[element].state = "layer-1";
            }

            elements[element].lock = false;
        }

        Satate();
    });
});
