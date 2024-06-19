import { Client } from "@gradio/client";

async function predictCapital() {
    try {
        let client = await Client.connect("cognitivecomputations/chat");
        let result = await client.predict("/chat", { 		
            message: "What is the capital of France?", 		
            model: "dolphin-2.9.1-llama-3-70b.Q3_K_M.gguf", 		
            max_tokens: 10, 		
            temperature: 0.1, 		
            top_p: 0.1, 		
            top_k: 0, 		
            repeat_penalty: 0, 
        });

        console.log(result.data);
    } catch (error) {
        console.error("Error predicting capital:", error);
    }
}

// Add event listener to the button
document.getElementById('predictButton').addEventListener('click', predictCapital);
