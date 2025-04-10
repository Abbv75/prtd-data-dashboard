import { AxiosInstense } from "../../helpers/AxiosInstense";
import { RESPONSE_T, TECHNIQUE_CATEGORIE_T } from "../../types";

export const getTechniquesCategorie = async () => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.get('/techniquesCategorie/get.php');

        return data.code === 200 ? data.data as TECHNIQUE_CATEGORIE_T[] : data.message;
    } catch (error) {
        console.error("Error fetching techniques categories:", error);

        return "Une erreur est survenue lors de la récupération des catégories de techniques.";
    }
}