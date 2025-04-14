import { AxiosInstense } from "../../helpers/AxiosInstense";
import { RESPONSE_T } from "../../types";

export const editTechniqueTitle = async (
    id: number | string,
    titre: string,
) => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.postForm(
            '/technique/editTitle.php',
            {
                id,
                titre,
            }
        );

        return data.code === 200;
    } catch (error) {
        console.error("Une erreur est survenue. lors de la modification :", error);

        return false;
    }
}