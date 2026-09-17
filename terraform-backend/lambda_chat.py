import json
import os
import urllib.request

def handler(event, context):
    try:
        # Parse prompt from frontend
        body = json.loads(event.get('body', '{}'))
        user_prompt = body.get('prompt', '')

        if not user_prompt:
            raise ValueError("Prompt is empty")

        api_key = os.environ.get('GEMINI_API_KEY')
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"

        # System Context: Injecting instructions so the AI acts as your portfolio assistant
        system_context = (
            "You are an AI assistant for Jomarie Nacario's portfolio. "
            "Jomarie is a Cloud Engineer based in NY specializing in AWS, GCP, React, and Terraform. "
            "Keep answers professional, concise, and helpful. "
            f"User asks: {user_prompt}"
        )

        payload = {
            "contents": [{"parts": [{"text": system_context}]}]
        }
        
        req = urllib.request.Request(
            url, 
            data=json.dumps(payload).encode('utf-8'), 
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            reply = result['candidates'][0]['content']['parts'][0]['text']

        return {
            "statusCode": 200,
            "headers": { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            "body": json.dumps({"reply": reply})
        }

    except Exception as e:
        print(f"Error: {str(e)}")
        return {
            "statusCode": 500,
            "headers": { "Access-Control-Allow-Origin": "*" },
            "body": json.dumps({"reply": "I am currently offline. Please try again later."})
        }
