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