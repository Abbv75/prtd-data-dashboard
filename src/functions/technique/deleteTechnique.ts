import { AxiosInstense } from "../../helpers/AxiosInstense";
import { RESPONSE_T } from "../../types";

export const deleteTechnique = async (id: number) => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.postForm('/technique/delete.php', { id });

        return data.code === 200;
    } catch (error) {
        console.error("Error fetching techniques:", error);

        return "Une erreur est survenue lors de la suppresion.";
    }
}