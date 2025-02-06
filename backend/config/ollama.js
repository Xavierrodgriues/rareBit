import ollama from "ollama";

export const generateChat =async (messages) => {
    const respnse = await ollama.chat({
        model : "mistral:latest",
        messages : messages,
        stream : false
    })

    return respnse.message.content
}