import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// This allows Next.js to stream responses at edge speed
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    // 1. Pull the conversation history array from the frontend request
    const { messages } = await req.json();

    // 2. Call the AI model with the historical context
    const result = await streamText({
      model: openai('gpt-4o-mini'), // Highly efficient, fast model
      system: 'You are a helpful, concise AI coding assistant built by Victor.',
      messages,
    });

    // 3. Return a specialized streaming data response back to the client
    return result.toDataStreamResponse();
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Failed to process streaming request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
