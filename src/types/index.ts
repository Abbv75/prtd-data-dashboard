export type USE_STATE_T = React.Dispatch<React.SetStateAction<any>>

export type LOADING_STATE_T = "En cours de chargement."
    | "Chargement finit."
    | "Chargement échoué."
    | "Chargememnt reussi"
    | "En attente"
    | null;

export interface RESPONSE_T {
    message: string;
    code: number;
    data: any;
}

export interface TECHNIQUE_CATEGORIE_T {
    idTechniquesCategorie: number;
    nomTechniquesCategorie: string;
    descriptionTechniquesCategorie?: string;
}

export interface TECHNIQUE_T {
    idTechnique: number;
    titre: string;
    content: string;
    colloneIndex?: number;
    id_techniquesCategorie: number;
}

export interface BONNES_PRATIQUES_T {
    idBonnesPratiques: number;
    intitule: string;
    description: string;
    image?: string;
    id_filiere: number;
}

export interface FICHES_PROJETS_T {
    idFichesProjets: number;
    intitule: string;
    description: string;
    image: string;
    fichier: number;
}