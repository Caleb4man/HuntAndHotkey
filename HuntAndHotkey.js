const HuntAndHotkey = {
    assignHotkeysToLinks: function (keyMapping) {
      const HotkeyTarget = document.querySelector('.HotkeyTarget');
      if (!HotkeyTarget) return; // If .HotkeyTarget doesn't exist, exit the function. 
  
      const links = mainPanel.querySelectorAll('a');
  
      // Loop through each link. This assigns each key if it's not already assigned.
      for (let i = 0; i < links.length; i++) {
        const key = keyMapping[i];
        if (key && !this.isKeyAlreadyAssigned(key)) {
          this.assignKeyToLink(links[i], key);
        }
      }
  
      // Add an event listener for key presses
      document.addEventListener('keydown', this.handleKeyPress.bind(this));
    },
  
    isKeyAlreadyAssigned: function (key) {
      return document.querySelector(`a[data-link-key='${key.toLowerCase()}']`) !== null;
    },
  
    assignKeyToLink: function (link, key) {
      // Append the key in square brackets to the link's inner HTML. 
      // Modify this line if you need them to appear in any other format: 
      link.innerHTML += ` [${key}]`;
      link.setAttribute('data-link-key', key.toLowerCase());
    },
  
    handleKeyPress: function (event) {
      // Find what key was pressed, and find the corresponding link
      const pressedKey = event.key.toLowerCase();
      const link = document.querySelector(`a[data-link-key='${pressedKey}']`);
      
      if (link) {
        link.click(); // Trigger the link click, which will either follow the link or trigger any other events.
      }
    }
  };
  
// Example usage, this assigns hotkeys based on a standard US QWERTY keyboard. 
// HuntAndHotkey.assignHotkeysToLinks('1234567890qwertyuiopasdfghjklzxcvbnm');
  
