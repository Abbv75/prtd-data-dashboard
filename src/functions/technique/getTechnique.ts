import { AxiosInstense } from "../../helpers/AxiosInstense";
import { RESPONSE_T, TECHNIQUE_T } from "../../types";

export const getTechnique = async () => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.get('/technique/get.php');

        return data.code === 200 ? data.data as TECHNIQUE_T[] : data.message;
    } catch (error) {
        console.error("Error fetching techniques:", error);

        return "Une erreur est survenue lors de la récupération des techniques.";
    }
}