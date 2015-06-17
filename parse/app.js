/**
 * Created by jack on 6/17/15.
 */

$(function () {

    var parseApplicationId="PeOznNLKHrpifbmEcBTJpR6ZXuimHI77Ek9scre2";
    var parseJavaScriptKey="0u26ZHb2MuQ3PNeYuwnUem7fvxlA7nH8IU7nLlrf";

    Parse.initialize(parseApplicationId, parseJavaScriptKey);
    var Test = Parse.Object.extend("Test");
    var test = new Test();

    test.save({
            name: "John",
            text: "hi"
        },
        {
        success: function(object) {
            console.log("Parse.com object is saved: "+object);
    //alternatively you could use
    //alert("Parse.com object is saved");
        },
        error: function(object) {
            console.log("Error! Parse.com object is not saved: "+object);
        }
    });
});


