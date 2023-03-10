import openai from "./chat-gpt"


const query = async (prompt: string, chatId: string, model: string) => {
    return await openai.createCompletion({
        model,
        prompt,
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    })
        .then(res => res.data.choices[0].text)
        .catch(err => `ChatGPT was enable to find an answer for that! (Error: ${err.message})`)
}

export default query