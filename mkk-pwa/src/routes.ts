import HomePage from "./views/home.vue"
import LoginPage from "./views/login.vue"
import WorkJournal from "./views/workJournal.vue";
import Visit from "./views/visit.vue";
import Logout from "./views/logout.vue";

const ROUTE_NAME_LOGIN = "login"
const ROUTE_NAME_WORK_JOURNAL = "workJournal"

const routes = [
    {
        name: "home",
        path: "/",
        component: HomePage
    },
    {
        name: "login",
        path: "/login",
        component: LoginPage
    },
    {
        name: "workJournal",
        path: "/work-journal",
        component: WorkJournal
    },
    {
        name: "visit",
        path: "/work-journal/:id",
        component: Visit
    },
    {
        name: "logout",
        path: "/logout",
        component: Logout
    }
] as any

export {
    routes,
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_WORK_JOURNAL
}