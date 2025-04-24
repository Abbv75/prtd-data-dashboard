import { AxiosInstense } from "../../helpers/AxiosInstense";
import { RESPONSE_T } from "../../types";

export const deleteFichesProjets = async (id: number) => {
    try {
        const { data }: { data: RESPONSE_T } = await AxiosInstense.postForm('/fiches-projets/delete.php', { id });

        return data.code === 200;
    } catch (error) {
        console.error("Erreur lors de la suppression", error);

        return "Une erreur est survenue lors de la suppresion.";
    }
}