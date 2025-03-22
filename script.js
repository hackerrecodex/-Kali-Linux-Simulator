const terminalBody = document.getElementById('terminal-body');
const commandInput = document.getElementById('command-input');

// Command handler
commandInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = commandInput.value.trim();
    commandInput.value = '';
    handleCommand(command);
  }
});

// Available commands
const commands = {
  help: 'Available commands: help, clear, nmap, ping, whois, ls, cd, cat',
  clear: () => {
    terminalBody.innerHTML = '';
  },
  nmap: 'Simulating nmap scan...\nOpen ports: 22 (SSH), 80 (HTTP), 443 (HTTPS)',
  ping: 'Pinging google.com...\n64 bytes from 142.250.192.14: icmp_seq=1 ttl=115 time=15.4 ms',
  whois: 'Simulating whois lookup...\nDomain: example.com\nRegistrar: GoDaddy',
  ls: 'Desktop  Documents  Downloads  Music  Pictures  Videos',
  cd: 'Changing directory...',
  cat: 'File content: Hello, Kali Linux Simulator!',
};

// Handle commands
function handleCommand(command) {
  const output = document.createElement('p');
  output.textContent = `user@kali-simulator:~$ ${command}`;
  terminalBody.appendChild(output);

  if (commands[command]) {
    const response = typeof commands[command] === 'function' ? commands[command]() : commands[command];
    const responseLine = document.createElement('p');
    responseLine.textContent = response;
    terminalBody.appendChild(responseLine);
  } else {
    const errorLine = document.createElement('p');
    errorLine.textContent = `Command not found: ${command}`;
    terminalBody.appendChild(errorLine);
  }

  // Scroll to bottom
  terminalBody.scrollTop = terminalBody.scrollHeight;
}
