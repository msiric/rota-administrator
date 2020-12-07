import Vue from "vue";
import { format } from "date-fns";

Vue.filter("formattedDate", (date) => format(new Date(date), "PPP"));
