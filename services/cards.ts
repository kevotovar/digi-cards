import axios from "axios";
import { CARDS } from "../endpoints";

export function fetchCards() {
	return axios.get(CARDS);
}
