import { AxiosInstense } from "../../helpers/AxiosInstense";
import { BONNES_PRATIQUES_T, RESPONSE_T } from "../../types";

export const getAllBonnesPratiques = async () => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.get('/bonnes-pratiques/get.php');

        return data.code === 200 ? data.data as BONNES_PRATIQUES_T[] : data.message;
    } catch (error) {
        console.error("Error fetching BONNES PRATIQUES:", error);

        return "Une erreur est survenue lors de la récupération des techniques.";
    }
}