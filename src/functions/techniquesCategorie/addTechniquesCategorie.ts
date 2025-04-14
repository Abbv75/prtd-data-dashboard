import { AxiosInstense } from "../../helpers/AxiosInstense";
import { RESPONSE_T } from "../../types";

export const addTechniquesCategorie = async (
    nom: string,
    description?: string
) => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.postForm(
            '/techniquesCategorie/add.php',
            {
                nom,
                description
            }
        );

        return data.code === 200;
    } catch (error) {
        console.error("Une erreur est survenue. lors de l'ajout :", error);

        return false;
    }
}