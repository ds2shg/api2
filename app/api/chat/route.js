import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { messages } = body;

    const response = await fetch('http://jeju.local:8080/ollama/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer sk-2e5fff3b86d1432ab5490aedecd0a929',
      },
      body: JSON.stringify({
        model: 'gpt-oss:20b',
        messages: messages,
        stream: false,
      }),
    });

    if (!response.ok) {
      console.error('Ollama API error:', response.status, response.statusText);
      return NextResponse.json({ error: 'Failed to fetch from Ollama' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
