# Personal Website with AI Chat

This project implements a personal website with an AI-powered chat feature using OpenAI's GPT-3.5-turbo model.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key_here
```

3. Start the server:
```bash
npm start
```

The server will run on port 3000 by default.

## Features

- AI-powered chat interface
- Real-time responses using OpenAI's GPT-3.5-turbo model
- Secure API key management using environment variables
- CORS enabled for cross-origin requests

## Dependencies

- express: Web server framework
- openai: OpenAI API client
- cors: Cross-Origin Resource Sharing middleware
- dotenv: Environment variable management 