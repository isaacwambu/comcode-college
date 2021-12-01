let codingCourses_visible = true;
let microsoftCourses_visible = true;
let networkingCourses_visible = true;
let introCourses_visible = true;



// This fun. will get us the visibility of course list, for the clicked arrow
function getClickedArrow (id) {
    switch (id) {
        case "microsoft_courses_list":
            return microsoftCourses_visible;
        case "intro_courses_list":
            return introCourses_visible;
        case "networking_courses_list":
            return networkingCourses_visible;
        case "coding_courses_list":
            return codingCourses_visible;
        default:
            break;
    }
}

// This fun will set the var of the courseList visibility based on the value 
function setClickedArrowImage (id, value) {
    switch (id) {
        case "microsoft_courses_list":
            microsoftCourses_visible = value
            return;
        case "intro_courses_list":
            introCourses_visible = value;
            return;
        case "networking_courses_list":
            networkingCourses_visible = value;
            return;
        case "coding_courses_list":
            codingCourses_visible = value;
            return;
        default:
            break;
    }
}

// This fun. will give us the id of the arrow based on the course list id we pass
function getArrowId (id){
    switch (id) {
        case "microsoft_courses_list":
            return "show_more_less_microsoft_courses";
        case "intro_courses_list":
            return "show_more_less_intro_courses";
        case "networking_courses_list":
            return "show_more_less_networking_courses";
        case "coding_courses_list":
            return "show_more_less_coding_courses";
        default:
            break;
    }
}
