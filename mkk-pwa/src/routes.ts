import HomePage from "@/views/home.vue"
import LoginPage from "@/views/login.vue"
import WorkJournal from "@/views/workJournal.vue";

const ROUTE_NAME_LOGIN = "login"
const ROUTE_NAME_WORK_JOURNAL = "workJournal"

const routes = [{
    name: "home",
    path: "/",
    component: HomePage
}, {
    name: "login",
    path: "/login",
    component: LoginPage
}, {
    name: "workJournal",
    path: "/work-journal",
    component: WorkJournal
}] as any

export {
    routes,
    ROUTE_NAME_LOGIN,
    ROUTE_NAME_WORK_JOURNAL
}