import { AxiosInstense } from "../../helpers/AxiosInstense";
import { RESPONSE_T } from "../../types";

export const editTechniqueContent = async (
    id: number | string,
    content: string,
) => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.postForm(
            '/technique/editContent.php',
            {
                id,
                content,
            }
        );

        return data.code === 200;
    } catch (error) {
        console.error("Une erreur est survenue. lors de la modification :", error);

        return false;
    }
}