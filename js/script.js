$(function() {
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

	$(".element-1").bind('touchstart mouseenter', function() {
        element(1);
    });

    $(".element-2").bind('touchstart mouseenter', function() {
        element(2);
    });

    $(".element-3").bind('touchstart mouseenter', function() {
        element(3);
    });

    $(".element-4").bind('touchstart mouseenter', function() {
        element(4);
    });

    $(".element-5").bind('touchstart mouseenter', function() {
        element(5);
    });

    $(".element-6").bind('touchstart mouseenter', function() {
        element(6);
    });

    $(".element-1 .layer-2").bind('touchstart click', function() {
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

    $(".element-2 .layer-2").bind('touchstart click', function() {
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

    $(".element-3 .layer-2").bind('touchstart click', function() {
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

    $(".element-4 .layer-2").bind('touchstart click', function() {
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

    $(".element-5 .layer-2").bind('touchstart click', function() {
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

    $(".element-6 .layer-2").bind('touchstart click', function() {
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

    $(".cancel").bind('touchstart click', function() {
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
