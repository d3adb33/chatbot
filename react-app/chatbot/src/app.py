from flask import Flask, request, jsonify
import openai

openai.api_key = "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"

app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    #get input text from the frontend
    input_text = request.json['inputText']

    prompt = f"Conversation with chatbot:\nUser: {input_text}\nChatbot:"
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=1024,
        temperature=0.5,
        n=1,
        stop=None,
        timeout=30,
    )

    output_text = response.choices[0].text.strip()
    return jsonify({'outputText': output_text})

if __name__ == '__main__':
    app.run(debug=True)