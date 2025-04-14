import { AxiosInstense } from "../../helpers/AxiosInstense";
import { RESPONSE_T } from "../../types";

export const addTechnique = async (
    titre: string,
    content: string,
    id_techniquesCategorie: number,
    colloneIndex?: number,
) => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.postForm(
            '/technique/add.php',
            {
                titre,
                content,
                colloneIndex,
                id_techniquesCategorie
            }
        );

        return data.code === 200;
    } catch (error) {
        console.error("Une erreur est survenue. lors de l'ajout :", error);

        return false;
    }
}