import ollama from 'ollama'


export const generateChat = async (messages) => {
    try {
        const response = await ollama.chat({ model: 'llama3.1', messages: [messages], stream: false })
        return response.message.content
    } catch (error) {
        return 
    }
}