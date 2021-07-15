name_of_the_guest_array = [];

function submit() {
    var display_guest_array = [];
    for (var i = 1; i <= 4; i++) {
        var name_of_the_guest = document.getElementById("name_of_the_guest_" + i).value;
        console.log(name_of_the_guest);
        name_of_the_guest_array.push(name_of_the_guest);


    }
    console.log(name_of_the_guest);
    var length_of_the_array = name_of_the_guest_array.length;
    console.log(length_of_the_array);
    for (var k = 0; k < length_of_the_array; k++) {
        display_guest_array.push("<h4>NAME - " + name_of_the_guest_array[k] + "</h4>")
        console.log(display_guest_array);
    }
    console.log(display_guest_array);
    document.getElementById("display_name_with_commas").innerHTML = display_guest_array;
    var remove_comma = display_guest_array.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML = remove_comma;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting() {
    name_of_the_guest_array.sort();
    console.log(name_of_the_guest_array);
    var display_sorted_array = [];
    var length_of_the_array = name_of_the_guest_array.length;
    console.log(length_of_the_array);
    for (var k = 0; k < length_of_the_array; k++) {
        display_sorted_array.push("<h4>NAME - " + name_of_the_guest_array[k] + "</h4>")
        console.log(display_sorted_array);
    }
    var remove_comma = display_sorted_array.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML=remove_comma
}