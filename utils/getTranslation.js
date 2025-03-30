import { useFetch } from "nuxt/app";

export default async function getTranslation(sourceText, order){
    const destText = await useFetch(`/api/getTranslation`,
        {
            method: "POST",
            params: {
                sourceText: sourceText
            }
        }
    )

    return {
        destText: destText,
        order: order
    }
}