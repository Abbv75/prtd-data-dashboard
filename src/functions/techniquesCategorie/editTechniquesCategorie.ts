import { AxiosInstense } from "../../helpers/AxiosInstense";
import { RESPONSE_T } from "../../types";

export const editTechniquesCategorie = async (
    id: number | string,
    nom: string,
) => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.postForm(
            '/techniquesCategorie/edit.php',
            {
                id,
                nom,
            }
        );

        return data.code === 200;
    } catch (error) {
        console.error("Une erreur est survenue. lors de la modification :", error);

        return false;
    }
}