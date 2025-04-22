async function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (!message) return;
    
    // Add user message to chat
    addMessage(message, 'user');
    messageInput.value = '';
    
    try {
        // Show loading indicator
        const loadingIndicator = document.createElement('div');
        loadingIndicator.className = 'message loading';
        loadingIndicator.textContent = 'AI is thinking...';
        document.getElementById('chat-messages').appendChild(loadingIndicator);
        
        // Call our backend server
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        
        if (!response.ok) {
            throw new Error('Failed to get response from server');
        }
        
        const data = await response.json();
        
        // Remove loading indicator
        document.getElementById('chat-messages').removeChild(loadingIndicator);
        
        // Add AI response to chat
        addMessage(data.response, 'ai');
    } catch (error) {
        console.error('Error:', error);
        addMessage('I apologize, but I am having trouble connecting right now. Please try again later.', 'ai');
    }
} 