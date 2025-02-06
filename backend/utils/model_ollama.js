import ollama from 'ollama'
export const generateChat = async (messages) => {
    try {
        const response = await ollama.chat({ model: 'mistral:latest', messages: messages, stream: false })
        console.log(response,'response')
        return response.message.content
    } catch (error) {
        console.log(error,'ollama error')
    }
}