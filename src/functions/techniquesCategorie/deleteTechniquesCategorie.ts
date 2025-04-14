import { AxiosInstense } from "../../helpers/AxiosInstense";
import { RESPONSE_T } from "../../types";

export const deleteTechniquesCategorie = async (id: number) => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.postForm('/techniquesCategorie/delete.php', { id });

        return data.code === 200;
    } catch (error) {
        console.error("Error fetching techniques categories:", error);

        return "Une erreur est survenue lors de la récupération des catégories de techniques.";
    }
}